/**
 * Elyor Teacher — Educational Platform Script
 * Vanilla JavaScript implementation for lessons, quizzes, progress,
 * multi-language switching (UZ, EN, RU), search, dark mode, and copy buttons.
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentLang: localStorage.getItem('elyor_lang') || 'uz',
    currentTheme: localStorage.getItem('elyor_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeCourseId: 'computer',
    activeLessonId: 'comp-basics',
    completedLessons: new Set(JSON.parse(localStorage.getItem('elyor_completed') || '[]')),
    quiz: {
      courseId: 'computer',
      currentIndex: 0,
      score: 0,
      answered: false,
      selectedOption: null,
      finished: false
    }
  };

  // Helper to fetch translated text
  function t(key) {
    const lang = state.currentLang;
    if (APP_DATA.translations[lang] && APP_DATA.translations[lang][key]) {
      return APP_DATA.translations[lang][key];
    }
    return APP_DATA.translations.uz[key] || key;
  }

  // Toast Notification
  function showToast(msg) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  // Copy to clipboard
  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(t('copiedToast'));
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(t('copiedToast'));
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  }

  // Theme Management
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    updateThemeToggleIcon();
  }

  function toggleTheme() {
    state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('elyor_theme', state.currentTheme);
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    updateThemeToggleIcon();
  }

  function updateThemeToggleIcon() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    if (state.currentTheme === 'dark') {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      btn.setAttribute('title', 'Light mode');
    } else {
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      btn.setAttribute('title', 'Dark mode');
    }
  }

  // Language Management
  function setLanguage(lang) {
    if (!['uz', 'en', 'ru'].includes(lang)) return;
    state.currentLang = lang;
    localStorage.setItem('elyor_lang', lang);
    document.documentElement.lang = lang;

    // Update Language UI buttons
    const langLabels = { uz: '🇺🇿 UZ', en: '🇬🇧 EN', ru: '🇷🇺 RU' };
    const langBtnText = document.getElementById('current-lang-text');
    if (langBtnText) {
      langBtnText.textContent = langLabels[lang];
    }
    document.querySelectorAll('.lang-item').forEach(item => {
      if (item.dataset.lang === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Close menu
    const langMenu = document.getElementById('lang-select-menu');
    if (langMenu) langMenu.classList.remove('open');

    // Update all i18n text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key) {
        el.textContent = t(key);
      }
    });

    // Update input placeholders
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = t('searchPlaceholder');
    }

    // Refresh dynamic sections
    renderProgress();
    renderCourseCards();
    renderSidebar();
    renderActiveLesson();
    renderQuiz();
  }

  // Progress Calculations
  function getAllLessons() {
    const list = [];
    APP_DATA.courses.forEach(course => {
      course.lessons.forEach(l => list.push({ ...l, courseId: course.id }));
    });
    return list;
  }

  function renderProgress() {
    const all = getAllLessons();
    const total = all.length;
    const completedCount = state.completedLessons.size;
    const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

    // Header Pill
    const headerPill = document.getElementById('header-progress-pill');
    if (headerPill) {
      headerPill.innerHTML = `<span>✓</span> <span>${completedCount} / ${total} ${t('progressCompleted')}</span>`;
    }

    // Dashboard Bar
    const dashPct = document.getElementById('progress-dash-pct');
    if (dashPct) dashPct.textContent = `${percentage}%`;

    const dashFill = document.getElementById('progress-dash-fill');
    if (dashFill) dashFill.style.width = `${percentage}%`;

    const dashText = document.getElementById('progress-dash-text');
    if (dashText) {
      dashText.textContent = `${completedCount} / ${total} ${t('progressCompleted')}`;
    }
  }

  // Course Cards in Section
  function renderCourseCards() {
    const container = document.getElementById('courses-cards-container');
    if (!container) return;

    container.innerHTML = APP_DATA.courses.map(course => {
      const lang = state.currentLang;
      const title = course.title[lang] || course.title.uz;
      const desc = course.desc[lang] || course.desc.uz;
      const totalLessons = course.lessons.length;
      const completedCourseLessons = course.lessons.filter(l => state.completedLessons.has(l.id)).length;
      const pct = Math.round((completedCourseLessons / totalLessons) * 100);
      const isComp = course.id === 'computer';

      return `
        <div class="course-card" data-course-id="${course.id}">
          <div class="course-card-top">
            <div class="course-icon-box ${isComp ? 'course-icon-comp' : 'course-icon-prompt'}">
              ${course.icon}
            </div>
            <span class="course-badge">${totalLessons} ${t('lessonsCount')}</span>
          </div>
          <h3 class="course-card-title">${title}</h3>
          <p class="course-card-desc">${desc}</p>
          <div class="course-topics-list">
            ${course.topics.map(tp => `<span class="topic-tag">${tp}</span>`).join('')}
          </div>
          <div class="course-progress-info">
            <span>${completedCourseLessons} / ${totalLessons} ${t('progressCompleted')}</span>
            <span><strong>${pct}%</strong></span>
          </div>
          <div class="course-track">
            <div class="course-fill" style="width: ${pct}%;"></div>
          </div>
          <button class="btn btn-primary btn-sm open-course-btn" data-course="${course.id}">
            ${t('startCourse')} →
          </button>
        </div>
      `;
    }).join('');

    // Attach listeners
    container.querySelectorAll('.open-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const courseId = btn.dataset.course;
        switchCourse(courseId);
        scrollToWorkspace();
      });
    });
  }

  function scrollToWorkspace() {
    const el = document.getElementById('workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Workspace Sidebar
  function renderSidebar() {
    const course = APP_DATA.courses.find(c => c.id === state.activeCourseId) || APP_DATA.courses[0];
    const lang = state.currentLang;

    // Update Tab buttons
    document.querySelectorAll('.course-tab-btn').forEach(btn => {
      if (btn.dataset.course === state.activeCourseId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Render lessons list
    const listEl = document.getElementById('sidebar-lessons-list');
    if (!listEl) return;

    listEl.innerHTML = course.lessons.map((lesson, idx) => {
      const isCompleted = state.completedLessons.has(lesson.id);
      const isActive = lesson.id === state.activeLessonId;
      const title = lesson.title[lang] || lesson.title.uz;

      return `
        <li class="lesson-nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-lesson-id="${lesson.id}">
          <div class="lesson-nav-item-title">
            <span class="lesson-num-badge">${idx + 1}</span>
            <span>${title}</span>
          </div>
          <svg class="lesson-status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            ${isCompleted
              ? '<polyline points="20 6 9 17 4 12"></polyline>'
              : '<circle cx="12" cy="12" r="9"></circle>'
            }
          </svg>
        </li>
      `;
    }).join('');

    // Attach listeners to sidebar items
    listEl.querySelectorAll('.lesson-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const lessonId = item.dataset.lessonId;
        selectLesson(lessonId);
      });
    });
  }

  // Workspace Active Lesson Reader
  function renderActiveLesson() {
    const lang = state.currentLang;
    const course = APP_DATA.courses.find(c => c.id === state.activeCourseId) || APP_DATA.courses[0];
    let lesson = course.lessons.find(l => l.id === state.activeLessonId);
    
    // Fallback if lesson not in current course
    if (!lesson) {
      lesson = course.lessons[0];
      state.activeLessonId = lesson.id;
    }

    // Breadcrumb
    const breadcrumbCourse = document.getElementById('lesson-breadcrumb-course');
    if (breadcrumbCourse) {
      breadcrumbCourse.textContent = course.title[lang] || course.title.uz;
    }

    const breadcrumbLesson = document.getElementById('lesson-breadcrumb-title');
    if (breadcrumbLesson) {
      breadcrumbLesson.textContent = lesson.title[lang] || lesson.title.uz;
    }

    // Main Title
    const titleEl = document.getElementById('lesson-main-title');
    if (titleEl) {
      titleEl.innerHTML = `<span>${lesson.title[lang] || lesson.title.uz}</span>`;
    }

    // Summary / Meta
    const metaEl = document.getElementById('lesson-meta-bar');
    if (metaEl) {
      const summary = lesson.summary[lang] || lesson.summary.uz;
      metaEl.textContent = summary;
    }

    // Body
    const bodyEl = document.getElementById('lesson-body-area');
    if (bodyEl) {
      const contentHtml = lesson.content[lang] || lesson.content.uz;
      bodyEl.innerHTML = contentHtml;

      // Attach copy button listeners inside content
      bodyEl.querySelectorAll('.copy-prompt-btn').forEach(btn => {
        btn.textContent = t('btnCopyPrompt');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const copyText = btn.getAttribute('data-copy') || btn.closest('.prompt-box')?.querySelector('.prompt-box-content')?.textContent;
          if (copyText) {
            copyTextToClipboard(copyText.trim());
          }
        });
      });
    }

    // Toggle Complete Button
    const completeBtn = document.getElementById('lesson-toggle-complete-btn');
    if (completeBtn) {
      const isCompleted = state.completedLessons.has(lesson.id);
      if (isCompleted) {
        completeBtn.classList.add('completed');
        completeBtn.innerHTML = `<span>✓</span> <span>${t('btnCompleted')}</span>`;
      } else {
        completeBtn.classList.remove('completed');
        completeBtn.innerHTML = `<span>○</span> <span>${t('btnCompleteLesson')}</span>`;
      }
    }

    // Prev / Next Navigation Buttons
    const currIndex = course.lessons.findIndex(l => l.id === lesson.id);
    const prevBtn = document.getElementById('lesson-prev-btn');
    const nextBtn = document.getElementById('lesson-next-btn');

    if (prevBtn) {
      if (currIndex > 0) {
        prevBtn.style.visibility = 'visible';
        prevBtn.textContent = `← ${t('btnPrevLesson')}`;
      } else {
        prevBtn.style.visibility = 'hidden';
      }
    }

    if (nextBtn) {
      if (currIndex < course.lessons.length - 1) {
        nextBtn.style.visibility = 'visible';
        nextBtn.textContent = `${t('btnNextLesson')} →`;
      } else {
        nextBtn.style.visibility = 'hidden';
      }
    }

    // Update sidebar active classes
    document.querySelectorAll('.lesson-nav-item').forEach(item => {
      if (item.dataset.lessonId === lesson.id) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  function selectLesson(lessonId) {
    state.activeLessonId = lessonId;
    renderActiveLesson();
  }

  function switchCourse(courseId) {
    state.activeCourseId = courseId;
    const course = APP_DATA.courses.find(c => c.id === courseId);
    if (course && course.lessons.length > 0) {
      state.activeLessonId = course.lessons[0].id;
    }
    renderSidebar();
    renderActiveLesson();
  }

  function toggleLessonCompleted() {
    const lessonId = state.activeLessonId;
    if (state.completedLessons.has(lessonId)) {
      state.completedLessons.delete(lessonId);
    } else {
      state.completedLessons.add(lessonId);
      showToast(t('lessonCompletedToast'));
    }
    localStorage.setItem('elyor_completed', JSON.stringify(Array.from(state.completedLessons)));
    renderProgress();
    renderCourseCards();
    renderSidebar();
    renderActiveLesson();
  }

  function goToPrevLesson() {
    const course = APP_DATA.courses.find(c => c.id === state.activeCourseId);
    if (!course) return;
    const idx = course.lessons.findIndex(l => l.id === state.activeLessonId);
    if (idx > 0) {
      selectLesson(course.lessons[idx - 1].id);
    }
  }

  function goToNextLesson() {
    const course = APP_DATA.courses.find(c => c.id === state.activeCourseId);
    if (!course) return;
    const idx = course.lessons.findIndex(l => l.id === state.activeLessonId);
    if (idx < course.lessons.length - 1) {
      selectLesson(course.lessons[idx + 1].id);
    }
  }

  // Quiz Engine
  function switchQuizTab(courseId) {
    state.quiz.courseId = courseId;
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    state.quiz.selectedOption = null;
    state.quiz.finished = false;

    document.querySelectorAll('.quiz-tab').forEach(tab => {
      if (tab.dataset.course === courseId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    renderQuiz();
  }

  function renderQuiz() {
    const lang = state.currentLang;
    const questions = APP_DATA.quizzes[state.quiz.courseId] || [];
    const totalQ = questions.length;
    const activeBox = document.getElementById('quiz-active-card');
    const completeBox = document.getElementById('quiz-complete-card');

    if (!activeBox || !completeBox) return;

    if (state.quiz.finished) {
      activeBox.style.display = 'none';
      completeBox.classList.add('visible');

      const finalScoreEl = document.getElementById('quiz-final-score');
      if (finalScoreEl) finalScoreEl.textContent = `${state.quiz.score} / ${totalQ}`;

      const finalMsg = document.getElementById('quiz-final-msg');
      if (finalMsg) {
        if (state.quiz.score === totalQ) {
          finalMsg.textContent = lang === 'uz' ? 'A’lo natija! Barcha savollarga to‘g‘ri javob berdingiz.' : (lang === 'en' ? 'Flawless score! You answered every question correctly.' : 'Отличный результат! Вы ответили правильно на все вопросы.');
        } else if (state.quiz.score >= Math.ceil(totalQ * 0.7)) {
          finalMsg.textContent = lang === 'uz' ? 'Juda yaxshi natija! Mavzuni mustahkam o‘zlashtirgansiz.' : (lang === 'en' ? 'Great performance! You have a solid grasp of the concepts.' : 'Хороший результат! Вы уверенно владеете темой.');
        } else {
          finalMsg.textContent = lang === 'uz' ? 'Yaxshi urinish! Darslarni qayta ko‘rib chiqib, o‘z bilimlaringizni yanada boyiting.' : (lang === 'en' ? 'Good effort! Review the lessons and try again to improve your score.' : 'Неплохая попытка! Повторите уроки и попробуйте улучшить результат.');
        }
      }
      return;
    }

    activeBox.style.display = 'block';
    completeBox.classList.remove('visible');

    const currentQ = questions[state.quiz.currentIndex];
    if (!currentQ) return;

    // Counter & score
    const counterEl = document.getElementById('quiz-counter-text');
    if (counterEl) {
      counterEl.textContent = `${state.quiz.currentIndex + 1} / ${totalQ}`;
    }

    const scoreBadge = document.getElementById('quiz-score-badge');
    if (scoreBadge) {
      scoreBadge.textContent = `${t('quizScoreLabel')}: ${state.quiz.score}`;
    }

    // Question Text
    const qTextEl = document.getElementById('quiz-question-title');
    if (qTextEl) {
      qTextEl.textContent = currentQ.question[lang] || currentQ.question.uz;
    }

    // Options
    const optionsContainer = document.getElementById('quiz-options-list');
    if (optionsContainer) {
      optionsContainer.innerHTML = currentQ.options.map((opt, idx) => {
        const text = opt.text[lang] || opt.text.uz;
        let btnClass = 'quiz-option-btn';

        if (state.quiz.answered) {
          if (opt.correct) {
            btnClass += ' correct';
          } else if (state.quiz.selectedOption === idx && !opt.correct) {
            btnClass += ' incorrect';
          }
        }

        return `
          <button class="${btnClass}" data-index="${idx}" ${state.quiz.answered ? 'disabled' : ''}>
            <span>${text}</span>
            ${state.quiz.answered && opt.correct ? '<span>✓</span>' : ''}
            ${state.quiz.answered && state.quiz.selectedOption === idx && !opt.correct ? '<span>✕</span>' : ''}
          </button>
        `;
      }).join('');

      // Options click
      optionsContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.index, 10);
          selectQuizOption(idx);
        });
      });
    }

    // Feedback Box
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (feedbackBox && nextBtn) {
      if (state.quiz.answered) {
        feedbackBox.classList.add('visible');
        const isCorrect = currentQ.options[state.quiz.selectedOption]?.correct;
        feedbackBox.className = `quiz-feedback-box visible ${isCorrect ? 'correct' : 'incorrect'}`;

        const expText = currentQ.explanation[lang] || currentQ.explanation.uz;
        feedbackBox.innerHTML = `
          <strong>${isCorrect ? '✓ ' + (lang === 'uz' ? "To'g'ri javob!" : (lang === 'en' ? "Correct!" : "Правильно!")) : '✕ ' + (lang === 'uz' ? "Noto'g'ri javob." : (lang === 'en' ? "Incorrect." : "Неверно."))}</strong>
          <p>${expText}</p>
        `;

        nextBtn.style.display = 'inline-flex';
        nextBtn.textContent = state.quiz.currentIndex === totalQ - 1 ? t('quizFinished') : `${t('btnNextQuestion')} →`;
      } else {
        feedbackBox.classList.remove('visible');
        nextBtn.style.display = 'none';
      }
    }
  }

  function selectQuizOption(index) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;
    state.quiz.selectedOption = index;

    const questions = APP_DATA.quizzes[state.quiz.courseId] || [];
    const currentQ = questions[state.quiz.currentIndex];

    if (currentQ && currentQ.options[index]?.correct) {
      state.quiz.score += 1;
    }

    renderQuiz();
  }

  function nextQuizQuestion() {
    const questions = APP_DATA.quizzes[state.quiz.courseId] || [];
    if (state.quiz.currentIndex < questions.length - 1) {
      state.quiz.currentIndex += 1;
      state.quiz.answered = false;
      state.quiz.selectedOption = null;
      renderQuiz();
    } else {
      state.quiz.finished = true;
      renderQuiz();
    }
  }

  function retakeQuiz() {
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    state.quiz.selectedOption = null;
    state.quiz.finished = false;
    renderQuiz();
  }

  // Search Engine
  function handleSearch(query) {
    const resultsBox = document.getElementById('search-results-box');
    const resultsList = document.getElementById('search-results-list');
    const clearBtn = document.getElementById('search-clear-btn');
    if (!resultsBox || !resultsList) return;

    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      resultsBox.classList.remove('visible');
      if (clearBtn) clearBtn.classList.remove('visible');
      return;
    }

    if (clearBtn) clearBtn.classList.add('visible');

    const lang = state.currentLang;
    const all = getAllLessons();

    const matches = all.filter(l => {
      const title = (l.title[lang] || l.title.uz).toLowerCase();
      const summary = (l.summary[lang] || l.summary.uz).toLowerCase();
      const content = (l.content[lang] || l.content.uz).toLowerCase();
      return title.includes(trimmed) || summary.includes(trimmed) || content.includes(trimmed);
    });

    resultsBox.classList.add('visible');

    if (matches.length === 0) {
      resultsList.innerHTML = `<li class="search-result-item"><span style="color: var(--text-muted);">${t('noResults')}</span></li>`;
      return;
    }

    resultsList.innerHTML = matches.map(m => {
      const title = m.title[lang] || m.title.uz;
      const courseObj = APP_DATA.courses.find(c => c.id === m.courseId);
      const courseName = courseObj ? (courseObj.title[lang] || courseObj.title.uz) : '';

      return `
        <li class="search-result-item" data-course="${m.courseId}" data-lesson="${m.id}">
          <div class="search-result-info">
            <span class="search-result-title">${title}</span>
            <span class="search-result-category">${courseName}</span>
          </div>
          <span style="font-size: 0.8125rem; color: var(--primary);">Ochish →</span>
        </li>
      `;
    }).join('');

    resultsList.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const cId = item.dataset.course;
        const lId = item.dataset.lesson;
        switchCourse(cId);
        selectLesson(lId);
        resultsBox.classList.remove('visible');
        scrollToWorkspace();
      });
    });
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Language Dropdown
    const langBtn = document.getElementById('lang-select-btn');
    const langMenu = document.getElementById('lang-select-menu');
    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('open');
      });
      document.addEventListener('click', () => {
        langMenu.classList.remove('open');
      });
      langMenu.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
          setLanguage(item.dataset.lang);
        });
      });
    }

    // Mobile navigation drawer toggle
    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
      });
      mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });
    }

    // Hero CTA buttons
    const btnHeroStart = document.getElementById('hero-btn-start');
    if (btnHeroStart) {
      btnHeroStart.addEventListener('click', () => {
        switchCourse('computer');
        scrollToWorkspace();
      });
    }

    const btnHeroPrompt = document.getElementById('hero-btn-prompt');
    if (btnHeroPrompt) {
      btnHeroPrompt.addEventListener('click', () => {
        switchCourse('prompt');
        scrollToWorkspace();
      });
    }

    // Workspace sidebar tabs
    document.querySelectorAll('.course-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.dataset.course;
        switchCourse(cId);
      });
    });

    // Lesson controls
    const toggleCompleteBtn = document.getElementById('lesson-toggle-complete-btn');
    if (toggleCompleteBtn) {
      toggleCompleteBtn.addEventListener('click', toggleLessonCompleted);
    }

    const prevBtn = document.getElementById('lesson-prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', goToPrevLesson);

    const nextBtn = document.getElementById('lesson-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', goToNextLesson);

    // Quiz controls
    document.querySelectorAll('.quiz-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        switchQuizTab(tab.dataset.course);
      });
    });

    const quizNextBtn = document.getElementById('quiz-next-btn');
    if (quizNextBtn) quizNextBtn.addEventListener('click', nextQuizQuestion);

    const quizRetakeBtn = document.getElementById('quiz-retake-btn');
    if (quizRetakeBtn) quizRetakeBtn.addEventListener('click', retakeQuiz);

    // Search input
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
      });
    }
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          handleSearch('');
          searchInput.focus();
        }
      });
    }

    // Brand logo click
    const brandLogo = document.getElementById('brand-logo');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Initialization
  function init() {
    initTheme();
    setLanguage(state.currentLang);
    setupEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
