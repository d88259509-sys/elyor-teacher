/**
 * Elyor Teacher — Educational Platform Data
 * Contains comprehensive static lessons, translations, and quizzes for:
 * 1. Kompyuter savodxonligi (Computer Literacy)
 * 2. Prompt yozish (Prompt Engineering)
 * Languages: Uzbek (uz), English (en), Russian (ru)
 */

const APP_DATA = {
  translations: {
    uz: {
      siteTitle: "Elyor Teacher — Ta'limiy Platforma",
      brandName: "Elyor Teacher",
      brandBadge: "Ta'limiy Platforma",
      navHome: "Bosh sahifa",
      navCourses: "Kurslar",
      navComp: "Kompyuter",
      navPrompt: "Prompt yozish",
      navQuiz: "Testlar",
      navAbout: "Haqida",
      heroBadge: "100% Bepul va Ochiq Ta'lim",
      heroTitle: "ELyor Teacher",
      heroSubtitle: "Kompyuter savodxonligi va zamonaviy prompt yozishni o‘rganing.",
      heroDesc: "Kompyuterdan to‘g‘ri foydalanish va AI vositalari uchun kuchli prompt yozish ko‘nikmalarini bosqichma-bosqich o‘rganing.",
      btnStartLessons: "Darslarni boshlash",
      btnPromptCourse: "Prompt yozishni o‘rganish",
      statCourses: "To'liq kurs",
      statLessons: "Amaliy dars",
      statQuizzes: "Test savoli",
      statFree: "Bepul va ochiq",
      progressTitle: "Sizning umumiy o'zlashtirish darajangiz",
      progressCompleted: "bajarildi",
      searchPlaceholder: "Darslar, mavzular va promptlarni qidirish...",
      searchResults: "Qidiruv natijalari",
      noResults: "Mos keladigan dars topilmadi",
      coursesSectionTag: "Bizning Kurslarimiz",
      coursesSectionTitle: "Zamonaviy raqamli ko'nikmalar",
      coursesSectionDesc: "Noldan boshlab professional darajagacha bosqichma-bosqich o'rganing.",
      course1Title: "Kompyuter savodxonligi",
      course1Desc: "Kompyuter qurilmalari, Windows, fayllar, internet va kiberxavfsizlik asoslari.",
      course2Title: "Prompt yozish",
      course2Desc: "AI vositalari uchun professional darajada buyruqlar, tizimlar va promptlar tuzish.",
      lessonsCount: "ta dars",
      startCourse: "Darslarni ko'rish",
      btnCompleteLesson: "Darsni yakunlash",
      btnCompleted: "Bajarildi ✓",
      btnPrevLesson: "Oldingi dars",
      btnNextLesson: "Keyingi dars",
      btnCopyPrompt: "Nusxa olish",
      copiedToast: "Prompt nusxalandi!",
      lessonCompletedToast: "Tabriklaymiz! Dars yakunlandi.",
      quizTitle: "Bilimingizni sinab ko'ring",
      quizDesc: "Har bir kurs bo'yicha interaktiv testlarni yeching va ball to'plang.",
      quizCompTab: "Kompyuter testi",
      quizPromptTab: "Prompt yozish testi",
      btnCheckAnswer: "Javob berish",
      btnNextQuestion: "Keyingi savol",
      btnRetakeQuiz: "Testni qayta topshirish",
      quizFinished: "Test yakunlandi!",
      quizScoreLabel: "Sizning natijangiz",
      aboutTitle: "Platforma haqida",
      aboutText: "Elyor Teacher — kompyuter savodxonligi va prompt yozish ko‘nikmalarini o‘rganish uchun yaratilgan bepul ta’limiy platforma.",
      aboutFeature1: "Hech qanday ro'yxatdan o'tish yoki to'lov talab qilinmaydi",
      aboutFeature2: "Barcha progress brauzeringiz xotirasida xavfsiz saqlanadi",
      aboutFeature3: "Haqiqiy dasturlash, dizayn va ta'lim uchun tayyor prompt andozalari",
      footerDesc: "Barcha uchun bepul kompyuter savodxonligi va AI vositalaridan samarali foydalanish kursi.",
      footerRights: "Barcha huquqlar himoyalangan."
    },
    en: {
      siteTitle: "Elyor Teacher — Educational Platform",
      brandName: "Elyor Teacher",
      brandBadge: "Education Platform",
      navHome: "Home",
      navCourses: "Courses",
      navComp: "Computer",
      navPrompt: "Prompt Writing",
      navQuiz: "Quizzes",
      navAbout: "About",
      heroBadge: "100% Free & Open Education",
      heroTitle: "ELyor Teacher",
      heroSubtitle: "Learn computer literacy and modern prompt engineering.",
      heroDesc: "Master fundamental computer skills and write effective prompts for AI tools step by step.",
      btnStartLessons: "Start Lessons",
      btnPromptCourse: "Learn Prompt Writing",
      statCourses: "Full Courses",
      statLessons: "Practical Lessons",
      statQuizzes: "Quiz Questions",
      statFree: "Free & Open",
      progressTitle: "Your Overall Learning Progress",
      progressCompleted: "completed",
      searchPlaceholder: "Search lessons, topics, and prompts...",
      searchResults: "Search Results",
      noResults: "No matching lessons found",
      coursesSectionTag: "Our Courses",
      coursesSectionTitle: "Modern Digital Skills",
      coursesSectionDesc: "Learn from fundamentals to proficient practical application.",
      course1Title: "Computer Literacy",
      course1Desc: "Hardware fundamentals, Windows OS, files, internet navigation, and cybersecurity.",
      course2Title: "Prompt Writing",
      course2Desc: "Crafting structured, high-precision prompts and instructions for AI models.",
      lessonsCount: "lessons",
      startCourse: "View Lessons",
      btnCompleteLesson: "Mark as Completed",
      btnCompleted: "Completed ✓",
      btnPrevLesson: "Previous Lesson",
      btnNextLesson: "Next Lesson",
      btnCopyPrompt: "Copy Prompt",
      copiedToast: "Prompt copied to clipboard!",
      lessonCompletedToast: "Congratulations! Lesson completed.",
      quizTitle: "Test Your Knowledge",
      quizDesc: "Take interactive quizzes for both courses and test your understanding.",
      quizCompTab: "Computer Quiz",
      quizPromptTab: "Prompt Quiz",
      btnCheckAnswer: "Submit Answer",
      btnNextQuestion: "Next Question",
      btnRetakeQuiz: "Retake Quiz",
      quizFinished: "Quiz Completed!",
      quizScoreLabel: "Your Score",
      aboutTitle: "About The Platform",
      aboutText: "Elyor Teacher is a free educational platform designed to teach computer literacy and effective prompt writing skills.",
      aboutFeature1: "No sign-up or paid subscription required",
      aboutFeature2: "All your learning progress is saved locally in your browser",
      aboutFeature3: "Real-world prompt formulas for coding, design, and analysis",
      footerDesc: "Free computer literacy and practical AI prompt engineering education for everyone.",
      footerRights: "All rights reserved."
    },
    ru: {
      siteTitle: "Elyor Teacher — Образовательная Платформа",
      brandName: "Elyor Teacher",
      brandBadge: "Образование",
      navHome: "Главная",
      navCourses: "Курсы",
      navComp: "Компьютер",
      navPrompt: "Промпты",
      navQuiz: "Тесты",
      navAbout: "О проекте",
      heroBadge: "100% Бесплатное и открытое обучение",
      heroTitle: "ELyor Teacher",
      heroSubtitle: "Освойте компьютерную грамотность и современный промптинг.",
      heroDesc: "Пошагово освойте правильную работу за компьютером и навыки составления точных промптов для ИИ.",
      btnStartLessons: "Начать уроки",
      btnPromptCourse: "Изучить промпты",
      statCourses: "Полных курса",
      statLessons: "Практических уроков",
      statQuizzes: "Вопросов теста",
      statFree: "Бесплатно",
      progressTitle: "Ваш общий прогресс обучения",
      progressCompleted: "завершено",
      searchPlaceholder: "Поиск уроков, тем и промптов...",
      searchResults: "Результаты поиска",
      noResults: "Уроки не найдены",
      coursesSectionTag: "Наши курсы",
      coursesSectionTitle: "Современные цифровые навыки",
      coursesSectionDesc: "От базовых понятий до уверенного практического владения.",
      course1Title: "Компьютерная грамотность",
      course1Desc: "Устройство ПК, Windows, файловая система, интернет и основы безопасности.",
      course2Title: "Написание промптов",
      course2Desc: "Создание структурированных, эффективных запросов и инструкций для ИИ.",
      lessonsCount: "уроков",
      startCourse: "Открыть уроки",
      btnCompleteLesson: "Завершить урок",
      btnCompleted: "Пройдено ✓",
      btnPrevLesson: "Предыдущий урок",
      btnNextLesson: "Следующий урок",
      btnCopyPrompt: "Копировать промпт",
      copiedToast: "Промпт скопирован в буфер!",
      lessonCompletedToast: "Поздравляем! Урок успешно пройден.",
      quizTitle: "Проверьте свои знания",
      quizDesc: "Интерактивные тесты по обоим курсам для закрепления материала.",
      quizCompTab: "Тест по ПК",
      quizPromptTab: "Тест по промптам",
      btnCheckAnswer: "Ответить",
      btnNextQuestion: "Следующий вопрос",
      btnRetakeQuiz: "Пройти тест заново",
      quizFinished: "Тест завершен!",
      quizScoreLabel: "Ваш результат",
      aboutTitle: "О платформе",
      aboutText: "Elyor Teacher — это бесплатная образовательная платформа для обучения компьютерной грамотности и навыкам написания промптов.",
      aboutFeature1: "Без регистрации и платных подписок",
      aboutFeature2: "Весь прогресс сохраняется локально в вашем браузере",
      aboutFeature3: "Готовые шаблоны промптов для программирования, дизайна и текстов",
      footerDesc: "Бесплатный курс компьютерной грамотности и прикладного промпт-инжиниринга.",
      footerRights: "Все права защищены."
    }
  },

  // Courses and Lessons Database
  courses: [
    {
      id: "computer",
      icon: "💻",
      title: {
        uz: "Kompyuter savodxonligi",
        en: "Computer Literacy",
        ru: "Компьютерная грамотность"
      },
      desc: {
        uz: "Kompyuterning ishlash tamoyillari, qurilmalari, Windows boshqaruvi, xavfsizlik va internet.",
        en: "Core hardware components, Windows operating system, file management, internet security, and shortcuts.",
        ru: "Устройство компьютера, операционная система Windows, файлы, интернет и цифровая безопасность."
      },
      topics: ["CPU", "RAM", "SSD", "Windows", "Internet", "Xavfsizlik", "Tezkor tugmalar"],
      lessons: [
        {
          id: "comp-basics",
          title: {
            uz: "Kompyuter asoslari",
            en: "Computer Basics",
            ru: "Основы компьютера"
          },
          summary: {
            uz: "Kompyuter nima, axborotni qabul qilish, qayta ishlash va saqlash jarayoni.",
            en: "What is a computer: input, processing, storage, and output fundamentals.",
            ru: "Что такое компьютер: ввод информации, обработка, хранение и вывод данных."
          },
          content: {
            uz: `
              <h3>1. Kompyuter nima?</h3>
              <p>Kompyuter — bu axborotni kiritish, saqlash, qayta ishlash va chiqarish uchun mo‘ljallangan elektron hisoblash mashinasidir.</p>
              
              <div class="lesson-callout">
                <div class="lesson-callout-title">💡 Asosiy 4 ta bosqich:</div>
                <ul>
                  <li><strong>Kiritish (Input):</strong> Klaviatura, sichqoncha yoki mikrofon orqali ma'lumot beriladi.</li>
                  <li><strong>Qayta ishlash (Processing):</strong> Protsessor (CPU) ma'lumotlarni hisoblaydi va buyruqlarni bajaradi.</li>
                  <li><strong>Saqlash (Storage):</strong> RAM (vaqtinchalik) va SSD/HDD (doimiy) xotirada saqlanadi.</li>
                  <li><strong>Chiqarish (Output):</strong> Monitor, printer yoki karnay orqali natija taqdim etiladi.</li>
                </ul>
              </div>

              <h3>2. Uskunaviy ta'minot (Hardware) va Dasturiy ta'minot (Software)</h3>
              <p>Kompyuter ikki asosiy bo'lakdan iborat: Hardware (qo'l bilan ushlab bo'ladigan barcha temir qismlar) va Software (uning ichida ishlaydigan barcha operatsion tizim va dasturlar).</p>
            `,
            en: `
              <h3>1. What is a Computer?</h3>
              <p>A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data.</p>
              
              <div class="lesson-callout">
                <div class="lesson-callout-title">💡 The 4 Core Stages:</div>
                <ul>
                  <li><strong>Input:</strong> Receiving data through keyboard, mouse, or microphone.</li>
                  <li><strong>Processing:</strong> The Central Processing Unit (CPU) executes instructions.</li>
                  <li><strong>Storage:</strong> Data stored in RAM (temporary) and SSD/HDD (permanent).</li>
                  <li><strong>Output:</strong> Displaying results via monitor, speakers, or printer.</li>
                </ul>
              </div>

              <h3>2. Hardware vs Software</h3>
              <p>Hardware represents the physical electronic components (case, motherboard, chips). Software represents the programs and OS directing hardware operations.</p>
            `,
            ru: `
              <h3>1. Что такое компьютер?</h3>
              <p>Компьютер — это электронное устройство, предназначенное для приема, обработки, хранения и вывода информации.</p>
              
              <div class="lesson-callout">
                <div class="lesson-callout-title">💡 4 основных этапа работы:</div>
                <ul>
                  <li><strong>Ввод (Input):</strong> Клавиатура, мышь или микрофон передают данные.</li>
                  <li><strong>Обработка (Processing):</strong> Процессор (CPU) производит вычисления.</li>
                  <li><strong>Хранение (Storage):</strong> ОЗУ (оперативная память) и SSD/HDD (постоянная).</li>
                  <li><strong>Вывод (Output):</strong> Экран, динамики или принтер отображают результат.</li>
                </ul>
              </div>

              <h3>2. Аппаратное (Hardware) и программное (Software) обеспечение</h3>
              <p>Hardware — это физические компоненты («железо»). Software — операционная система и программы, управляющие оборудованием.</p>
            `
          }
        },
        {
          id: "comp-cpu",
          title: {
            uz: "CPU (Markaziy protsessor)",
            en: "CPU (Central Processing Unit)",
            ru: "CPU (Центральный процессор)"
          },
          summary: {
            uz: "Protsessor kompyuterning miyasi: yadrolar, gigagers (GHz) va vazifalari.",
            en: "The brain of the computer: cores, clock speed (GHz), and computation tasks.",
            ru: "Мозг компьютера: ядра, тактовая частота (ГГц) и выполнение команд."
          },
          content: {
            uz: `
              <h3>Protsessor nima va u qanday ishlaydi?</h3>
              <p>CPU (Central Processing Unit) — kompyuterning boshqaruv markazi va "miyasi". U har bir dastur va tizim buyruqlarini sekundiga milliardlab marta hisoblaydi.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⚙️ Asosiy ko'rsatkichlar:</div>
                <ul>
                  <li><strong>Yadrolar (Cores):</strong> Bitta chip ichidagi mustaqil hisoblash bloklari. Ko'p yadrolar bir vaqtda ko'p dasturlar ishlashini ta'minlaydi.</li>
                  <li><strong>Takt chastotasi (GHz):</strong> Protsessor bir soniyada bajara oladigan sikllar soni. Masalan: 3.5 GHz = soniyasiga 3.5 milliard sikl.</li>
                  <li><strong>Kesh xotira (Cache L1, L2, L3):</strong> Protsessor ichidagi eng tezkor kichik xotira qatlami.</li>
                </ul>
              </div>
              <p><strong>Yetakchi ishlab chiqaruvchilar:</strong> Intel (Core i3, i5, i7, i9) va AMD (Ryzen 3, 5, 7, 9) hamda Apple Silicon (M1, M2, M3, M4).</p>
            `,
            en: `
              <h3>What is a CPU and How Does it Work?</h3>
              <p>The CPU (Central Processing Unit) is the primary component that executes instructions comprising a computer program.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⚙️ Key Specifications:</div>
                <ul>
                  <li><strong>Cores:</strong> Physical computation units. Multi-core processors handle concurrent applications seamlessly.</li>
                  <li><strong>Clock Speed (GHz):</strong> Cycles per second. 3.5 GHz means 3.5 billion instruction cycles per second.</li>
                  <li><strong>Cache Memory (L1, L2, L3):</strong> Ultra-fast on-die memory for immediate instruction buffering.</li>
                </ul>
              </div>
              <p><strong>Major Manufacturers:</strong> Intel, AMD, and Apple Silicon.</p>
            `,
            ru: `
              <h3>Что такое процессор и как он работает?</h3>
              <p>Процессор (CPU) — главный вычислительный чип компьютера, отвечающий за выполнение команд операционной системы и программ.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⚙️ Ключевые параметры:</div>
                <ul>
                  <li><strong>Количество ядер:</strong> Независимые вычислительные ядра для параллельной работы.</li>
                  <li><strong>Тактовая частота (ГГц):</strong> Количество операций в секунду.</li>
                  <li><strong>Кэш-память (L1, L2, L3):</strong> Сверхбыстрая встроенная память процессора.</li>
                </ul>
              </div>
              <p><strong>Основные производители:</strong> Intel, AMD и Apple (чипы серии M).</p>
            `
          }
        },
        {
          id: "comp-ram",
          title: {
            uz: "RAM (Operativ xotira)",
            en: "RAM (Random Access Memory)",
            ru: "RAM (Оперативная память)"
          },
          summary: {
            uz: "Tezkor vaqtinchalik xotira: hajm, tezlik va kompyuter tezligiga ta'siri.",
            en: "Volatile fast workspace memory: capacity, speed, and multitasking performance.",
            ru: "Быстрая энергозависимая память для запущенных программ и вкладок браузера."
          },
          content: {
            uz: `
              <h3>RAM nima va u nima uchun kerak?</h3>
              <p>RAM (Random Access Memory) — ayni damda ochiq turgan dasturlar, brauzer sahifalari va operatsion tizim ma'lumotlarini ushlab turuvchi juda tezkor xotiradir.</p>
              
              <div class="lesson-callout warning">
                <div class="lesson-callout-title">⚠️ Muhim eslatma:</div>
                <p>RAM — uchuvchan (volatile) xotira. Kompyuter o'chirilishi yoki qayta yoqilishi bilan RAM ichidagi barcha ma'lumotlar to'liq o'chib ketadi. Shuning uchun fayllarni doimiy saqlash uchun SSD/HDD kerak.</p>
              </div>

              <h3>Qancha RAM yetarli?</h3>
              <ul>
                <li><strong>8 GB:</strong> Oddiy ofis ishlari, darslar, veb-surfing va video tomosha qilish uchun minimal standart.</li>
                <li><strong>16 GB:</strong> Zamonaviy ko'p vazifalilik, grafik tahrir, dasturlash va ko'plab ochiq brauzer varaqlari uchun eng tavsiya etiladigan hajm.</li>
                <li><strong>32 GB+:</strong> Og'ir video montaj (4K), 3D modellashtirish va professional dasturlar uchun.</li>
              </ul>
            `,
            en: `
              <h3>What is RAM and Why is it Essential?</h3>
              <p>RAM is high-speed temporary memory providing immediate data access for actively running software and operating system tasks.</p>
              <div class="lesson-callout warning">
                <div class="lesson-callout-title">⚠️ Volatile Memory:</div>
                <p>When the computer powers down, RAM loses all stored content. Permanent storage requires SSD or HDD drives.</p>
              </div>
              <h3>Recommended Capacities:</h3>
              <ul>
                <li><strong>8 GB:</strong> Basic web browsing, word processing, and general study tasks.</li>
                <li><strong>16 GB:</strong> Modern standard for multitasking, coding, and media consumption.</li>
                <li><strong>32 GB+:</strong> Intensive video editing, 3D rendering, and heavy local development.</li>
              </ul>
            `,
            ru: `
              <h3>Что такое оперативная память?</h3>
              <p>RAM — сверхбыстрая временная память, в которую загружаются запущенные программы и текущие данные операционной системы.</p>
              <div class="lesson-callout warning">
                <div class="lesson-callout-title">⚠️ Энергозависимость:</div>
                <p>При выключении компьютера вся информация в RAM стирается. Долговременное хранение обеспечивают диски SSD и HDD.</p>
              </div>
              <h3>Оптимальный объем памяти:</h3>
              <ul>
                <li><strong>8 ГБ:</strong> Базовая работа с документами, интернет и просмотр видео.</li>
                <li><strong>16 ГБ:</strong> Современный стандарт для комфортной работы, программирования и учебы.</li>
                <li><strong>32 ГБ+:</strong> Монтаж видео высокого разрешения, 3D-графика и тяжелый софт.</li>
              </ul>
            `
          }
        },
        {
          id: "comp-storage",
          title: {
            uz: "SSD va HDD (Doimiy xotira)",
            en: "SSD and HDD Storage",
            ru: "SSD и HDD (Постоянные накопители)"
          },
          summary: {
            uz: "Fayllar, tizim va dasturlarni doimiy saqlash: qattiq disklar va tezkor SSD drayverlar.",
            en: "Permanent file retention: mechanical hard drives vs solid-state drives.",
            ru: "Постоянное хранение файлов: классические жесткие диски против быстрых SSD."
          },
          content: {
            uz: `
              <h3>SSD va HDD o'rtasidagi farq</h3>
              <p>Kompyuteringiz o'chganida ham rasmlaringiz, hujjatlaringiz va Windows tizimi doimiy xotira qurilmalarida saqlanib qoladi.</p>

              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">HDD (Qattiq disk)</div>
                  <p>Aylanuvchi magnit disk va harakatlanuvchi ignadan iborat mexanik qurilma.</p>
                  <ul>
                    <li>Tezlik: Sekin (~100-150 MB/s)</li>
                    <li>Shovqin: Bor, tebranish bor</li>
                    <li>Zarbaga chidamsiz</li>
                    <li>Arzon katta hajm (arxivlar uchun)</li>
                  </ul>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">SSD (Qattiq jism drayveri)</div>
                  <p>Harakatsiz mikrosxemalar (flash xotira) asosida ishlaydi.</p>
                  <ul>
                    <li>Tezlik: Juda tez (550 MB/s dan 7000 MB/s gacha NVMe)</li>
                    <li>Mutlaqo shovqinsiz va tejamkor</li>
                    <li>Windows bir necha soniyada yuklanadi</li>
                    <li>Zamonaviy kompyuterlar uchun shart!</li>
                  </ul>
                </div>
              </div>
            `,
            en: `
              <h3>Differences Between SSD and HDD</h3>
              <p>Permanent storage preserves operating systems, software, documents, and multimedia across power cycles.</p>
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">HDD (Hard Disk Drive)</div>
                  <p>Mechanical magnetic platters with read/write heads.</p>
                  <ul>
                    <li>Speed: Slower (~100-150 MB/s)</li>
                    <li>Vulnerable to drops and vibration</li>
                    <li>Cost-effective for massive archival data</li>
                  </ul>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">SSD (Solid State Drive)</div>
                  <p>Pure flash memory with zero moving parts.</p>
                  <ul>
                    <li>Speed: Extremely fast (500 MB/s up to 7000+ MB/s on NVMe)</li>
                    <li>Instant OS boot times and snappy application launch</li>
                    <li>Essential standard for all modern devices</li>
                  </ul>
                </div>
              </div>
            `,
            ru: `
              <h3>Разница между SSD и HDD</h3>
              <p>Постоянная память хранит ваши файлы и саму систему даже после отключения питания.</p>
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">HDD (Жесткий диск)</div>
                  <p>Механический накопитель с вращающимися пластинами.</p>
                  <ul>
                    <li>Скорость: Невысокая (100–150 МБ/с)</li>
                    <li>Боится падений и вибраций</li>
                    <li>Подходит для хранения больших архивов</li>
                  </ul>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">SSD (Твердотельный накопитель)</div>
                  <p>Быстрая флеш-память без движущихся деталей.</p>
                  <ul>
                    <li>Скорость: От 500 МБ/с до 7000+ МБ/с (NVMe)</li>
                    <li>Мгновенная загрузка Windows и программ</li>
                    <li>Обязателен для комфортной работы сегодня</li>
                  </ul>
                </div>
              </div>
            `
          }
        },
        {
          id: "comp-monitor",
          title: {
            uz: "Monitor va ekran texnologiyalari",
            en: "Monitor and Display Technology",
            ru: "Монитор и технологии экранов"
          },
          summary: {
            uz: "Ekran o'lchami, ruxsati (Resolution), matritsa turlari (IPS, VA, OLED) va gerts (Hz).",
            en: "Display sizes, resolutions (FHD, 4K), panel matrices (IPS, OLED), and refresh rates.",
            ru: "Разрешение экрана, типы матриц (IPS, VA, OLED) и частота обновления (Гц)."
          },
          content: {
            uz: `
              <h3>Monitor turlari va parametrlar</h3>
              <p>Monitor — kompyuterdan olinayotgan vizual ma'lumotlarni aks ettiruvchi asosiy vosita. Ko'z salomatligi va qulaylik monitor sifatiga bevosita bog'liq.</p>
              <ul>
                <li><strong>Ruxsat (Resolution):</strong> Ekranni tashkil qiluvchi piksellar soni. Full HD (1920x1080), 2K (2560x1440), 4K (3840x2160). Piksel qancha ko'p bo'lsa, tasvir shuncha tiniq bo'ladi.</li>
                <li><strong>Matritsa turlari:</strong>
                  <ul>
                    <li><strong>IPS:</strong> Ranglarni juda aniq ko'rsatadi, ko'rish burchagi keng (dizayn va kundalik ish uchun ideal).</li>
                    <li><strong>VA:</strong> Yuqori kontrast va to'q qora rang.</li>
                    <li><strong>OLED:</strong> Har bir piksel o'zi yonadi, cheksiz kontrast va mukammal ranglar.</li>
                  </ul>
                </li>
                <li><strong>Yangilanish chastotasi (Hz):</strong> Ekran soniyasiga necha marta yangilanishi. 60Hz odatiy ofis ishlari uchun, 120Hz-144Hz+ esa harakatlar o'ta silliq bo'lishi uchun.</li>
              </ul>
            `,
            en: `
              <h3>Monitor Specs and Display Types</h3>
              <p>Choosing the right monitor prevents eye strain and delivers accurate visual feedback.</p>
              <ul>
                <li><strong>Resolution:</strong> Number of pixels. Full HD (1920x1080), 2K/QHD (2560x1440), 4K UHD (3840x2160).</li>
                <li><strong>Panel Types:</strong>
                  <ul>
                    <li><strong>IPS:</strong> Superior color accuracy and wide viewing angles (standard for design/general work).</li>
                    <li><strong>VA:</strong> High contrast ratios with deep blacks.</li>
                    <li><strong>OLED:</strong> Self-emissive pixels offering true pitch blacks.</li>
                  </ul>
                </li>
                <li><strong>Refresh Rate (Hz):</strong> Frames refreshed per second. 60Hz for regular work; 120Hz+ for ultra-fluid motion.</li>
              </ul>
            `,
            ru: `
              <h3>Характеристики мониторов</h3>
              <p>Монитор отображает всю визуальную информацию. Правильный выбор экрана снижает утомляемость глаз.</p>
              <ul>
                <li><strong>Разрешение:</strong> Количество точек (пикселей). Full HD (1920x1080), 2K (2560x1440), 4K (3840x2160). Чем выше разрешение, тем четче текст.</li>
                <li><strong>Типы матриц:</strong>
                  <ul>
                    <li><strong>IPS:</strong> Реалистичная цветопередача и широкие углы обзора.</li>
                    <li><strong>VA:</strong> Высокая контрастность и глубокий черный цвет.</li>
                    <li><strong>OLED:</strong> Индивидуальная подсветка каждого пикселя.</li>
                  </ul>
                </li>
                <li><strong>Частота обновления (Гц):</strong> 60 Гц — базовый офисный стандарт, 120–144 Гц — повышенная плавность интерфейса.</li>
              </ul>
            `
          }
        },
        {
          id: "comp-keyboard",
          title: {
            uz: "Klaviatura (Keyboard)",
            en: "Keyboard Fundamentals",
            ru: "Клавиатура (Keyboard)"
          },
          summary: {
            uz: "Klaviatura tuzilishi, tugmalar guruhlari, terish qoidalari va ergonomika.",
            en: "Keyboard architecture, layout groupings, typing posture, and ergonomics.",
            ru: "Строение клавиатуры, функциональные группы клавиш и основы слепой печати."
          },
          content: {
            uz: `
              <h3>Klaviatura tuzilishi va tugmalar guruhlari</h3>
              <p>Klaviatura — kompyuterga matn, raqam va boshqaruv buyruqlarini kiritish uchun asosiy apparat vositasidir.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⌨️ Tugmalar guruhlari:</div>
                <ul>
                  <li><strong>Alifbo va raqamlar bloki:</strong> Harflar, raqamlar, tinish belgilari va Space (bo'sh joy) tugmasi.</li>
                  <li><strong>Funksional tugmalar (F1 — F12):</strong> Har bir dasturda o'z vazifasiga ega (masalan, F1 — yordam, F5 — yangilash, F11 — to'liq ekran).</li>
                  <li><strong>Modifikator tugmalar:</strong> Shift (katta harflar va yuqori belgilar), Ctrl va Alt (boshqa tugmalar bilan birgalikda buyruq berish uchun).</li>
                  <li><strong>Navigatsiya va tahrir:</strong> Enter (yangi qatorga o'tish yoki tasdiqlash), Backspace (chapdagi belgini o'chirish), Delete (o'ngdagi belgini o'chirish), Tab (kattaroq bo'sh joy tashlash), Esc (bekor qilish).</li>
                  <li><strong>Raqamli blok (Numpad):</strong> O'ng tomondagi kalkulyator kabi qulay raqamlar majmuasi.</li>
                </ul>
              </div>

              <h3>O'n barmoq bilan yozish (Touch Typing) sirlari</h3>
              <p>Klaviaturaning <strong>F</strong> va <strong>J</strong> (kirillchada <strong>A</strong> va <strong>O</strong>) tugmalarida kichik bo'rtma (chiziqcha) mavjud. Ular ko'rmasdan turib ko'rsatkich barmoqlaringizni to'g'ri boshlang'ich nuqtaga qo'yish uchun maxsus yaratilgan!</p>
            `,
            en: `
              <h3>Keyboard Anatomy and Functional Groups</h3>
              <p>The keyboard is the essential human-to-computer text input and shortcut apparatus.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⌨️ Primary Key Clusters:</div>
                <ul>
                  <li><strong>Alphanumeric Cluster:</strong> Letters, numbers, basic punctuation, and the Space bar.</li>
                  <li><strong>Function Keys (F1-F12):</strong> Program accelerators (F5 refresh, F11 fullscreen).</li>
                  <li><strong>Modifier Keys:</strong> Shift, Ctrl, Alt, and the Windows/Command key.</li>
                  <li><strong>Control & Editing:</strong> Enter, Backspace, Delete, Tab, and Esc.</li>
                  <li><strong>Numeric Keypad (Numpad):</strong> Dedicated calculator layout for numerical data entry.</li>
                </ul>
              </div>
              <p><strong>Home Row Tactile Ridges:</strong> The subtle tactile bumps on the 'F' and 'J' keys allow touch-typists to anchor index fingers without looking.</p>
            `,
            ru: `
              <h3>Строение клавиатуры и группы клавиш</h3>
              <p>Клавиатура — главное устройство для ввода текста и выполнения горячих команд.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">⌨️ Основные группы клавиш:</div>
                <ul>
                  <li><strong>Алфавитно-цифровой блок:</strong> Буквы, цифры, символы и пробел.</li>
                  <li><strong>Функциональные клавиши (F1–F12):</strong> Специальные действия (F5 — обновить, F11 — во весь экран).</li>
                  <li><strong>Клавиши-модификаторы:</strong> Shift, Ctrl, Alt и Win.</li>
                  <li><strong>Управляющие клавиши:</strong> Enter, Backspace, Delete, Tab, Esc.</li>
                  <li><strong>Цифровой блок (Numpad):</strong> Быстрый ввод цифр справа.</li>
                </ul>
              </div>
              <p><strong>Тактильные выступы:</strong> Засечки на клавишах «А» и «О» (латинские F и J) служат ориентиром для слепой печати.</p>
            `
          }
        },
        {
          id: "comp-mouse",
          title: {
            uz: "Sichqoncha va sensor panel (Mouse & Touchpad)",
            en: "Mouse & Touchpad Mechanics",
            ru: "Мышь и сенсорная панель (Mouse & Touchpad)"
          },
          summary: {
            uz: "Ko'rsatkich (kursor), chap/o'ng tugmalar, g'ildirakcha va drag-and-drop usullari.",
            en: "Cursor navigation, primary/secondary clicks, scroll wheels, gestures, and drag-and-drop.",
            ru: "Управление курсором, левый и правый клик, колесико прокрутки и перетаскивание (Drag & Drop)."
          },
          content: {
            uz: `
              <h3>Sichqoncha bilan ishlash qoidalari</h3>
              <p>Sichqoncha (yoki noutbukdagi Touchpad) ekrandagi kursorni erkin harakatlantirish va ob'ektlar ustida amallar bajarish imkonini beradi.</p>

              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖱️ Asosiy 4 ta harakat:</div>
                <ul>
                  <li><strong>Bitta chap bosish (Single Click):</strong> Fayl, tugma yoki havolani tanlash.</li>
                  <li><strong>Ikkita tez chap bosish (Double Click):</strong> Dastur yoki papkani ochish, faylni ishga tushirish.</li>
                  <li><strong>O'ng bosish (Right Click):</strong> Kontekst menyuni ochish (xususiyatlar, nusxa olish, o'chirish, qayta nomlash).</li>
                  <li><strong>Ushlab surish (Drag and Drop):</strong> Chap tugmani bosgan holda faylni yangi papkaga yoki boshqa joyga ko'chirish.</li>
                  <li><strong>G'ildirakcha (Scroll):</strong> Uzoq matnlar va veb-sahifalarni yuqoriga/pastga qulay o'tkazish.</li>
                </ul>
              </div>

              <h3>Touchpad (Sensor panel) imo-ishoralari</h3>
              <p>Noutbukda ikki barmoq bilan yuqoriga/pastga surish — sahifani siljitadi (scroll). Ikki barmoq bilan bitta bosish — sichqonchaning o'ng tugmasi vazifasini bajaradi.</p>
            `,
            en: `
              <h3>Mouse and Touchpad Mechanics</h3>
              <p>The mouse translates hand kinetic movement into precise screen coordinates.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖱️ Core Actions:</div>
                <ul>
                  <li><strong>Single Left-Click:</strong> Selects target objects or focus inputs.</li>
                  <li><strong>Double-Click:</strong> Launches executable applications or opens folders.</li>
                  <li><strong>Right-Click (Context Menu):</strong> Reveals options like Copy, Rename, and Properties.</li>
                  <li><strong>Drag and Drop:</strong> Holding the left button while dragging moves files seamlessly.</li>
                  <li><strong>Scroll Wheel:</strong> Vertical panning across lengthy documents.</li>
                </ul>
              </div>
              <p><strong>Touchpad Multi-Touch:</strong> Two-finger drag performs smooth scrolling, while two-finger tap acts as a secondary right-click.</p>
            `,
            ru: `
              <h3>Работа с мышью и тачпадом</h3>
              <p>Мышь переносит движения вашей руки на экран с помощью курсора.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖱️ Главные действия:</div>
                <ul>
                  <li><strong>Одинарный клик:</strong> Выделение элемента или кнопки.</li>
                  <li><strong>Двойной клик:</strong> Запуск программы или открытие папки.</li>
                  <li><strong>Правый клик:</strong> Контекстное меню действий (Копировать, Свойства, Удалить).</li>
                  <li><strong>Перетаскивание (Drag & Drop):</strong> Перемещение файла с зажатой левой кнопкой.</li>
                  <li><strong>Колесико (Скролл):</strong> Быстрая прокрутка страниц вверх и вниз.</li>
                </ul>
              </div>
            `
          }
        },
        {
          id: "comp-windows",
          title: {
            uz: "Windows operatsion tizimi",
            en: "Windows Operating System",
            ru: "Операционная система Windows"
          },
          summary: {
            uz: "Ish stoli, vazifalar paneli (Taskbar), 'Pusk' menyusi va derazalarni boshqarish.",
            en: "Desktop layout, taskbar, Start menu, window snapping, and settings panel.",
            ru: "Рабочий стол, панель задач, меню Пуск и управление окнами программ."
          },
          content: {
            uz: `
              <h3>Windows interfeysi bilan tanishuv</h3>
              <p>Operatsion tizim — kompyuter apparat qismlari bilan sizning dasturlaringiz o'rtasidagi asosiy ko'prikdir.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖥️ Ish maydoni elementlari:</div>
                <ul>
                  <li><strong>Ish stoli (Desktop):</strong> Ekrandagi asosiy maydon, yorliqlar va hujjatlar joylashadigan joy.</li>
                  <li><strong>Boshlash (Start / Pusk):</strong> Kompyuterdagi barcha dasturlar, sozlamalar va o'chirish tugmasi joylashgan menyu.</li>
                  <li><strong>Vazifalar paneli (Taskbar):</strong> Ekranning pastki qismidagi faol dasturlar, soat, til va ovoz ko'rsatkichlari joyi.</li>
                  <li><strong>Deraza (Window) boshqaruvi:</strong> Yuqori o'ng burchakdagi 3 ta tugma — Minimallashtirish (_), Kengaytirish (□), va Yopish (X).</li>
                </ul>
              </div>
            `,
            en: `
              <h3>Windows Fundamentals</h3>
              <p>The operating system coordinates hardware resources and provides a cohesive graphical interface.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖥️ Desktop Elements:</div>
                <ul>
                  <li><strong>Desktop:</strong> Primary workspace for files and program shortcuts.</li>
                  <li><strong>Start Menu:</strong> Central launchpad for applications, power states, and system settings.</li>
                  <li><strong>Taskbar:</strong> Bottom dock presenting running apps, system tray, and clock.</li>
                  <li><strong>Window Controls:</strong> Minimize (_), Maximize (□), and Close (X).</li>
                </ul>
              </div>
            `,
            ru: `
              <h3>Основы операционной системы Windows</h3>
              <p>Windows организует работу всех деталей компьютера и предоставляет удобный интерфейс с окнами.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🖥️ Главные элементы:</div>
                <ul>
                  <li><strong>Рабочий стол:</strong> Основное пространство для файлов и ярлыков.</li>
                  <li><strong>Меню Пуск:</strong> Доступ ко всем установленным программам и кнопке выключения.</li>
                  <li><strong>Панель задач:</strong> Нижняя полоса с запущенными приложениями, часами и языком.</li>
                  <li><strong>Управление окном:</strong> Свернуть (_), Развернуть (□) и Закрыть (X).</li>
                </ul>
              </div>
            `
          }
        },
        {
          id: "comp-files",
          title: {
            uz: "Fayllar va papkalar",
            en: "Files and Folders",
            ru: "Файлы и папки"
          },
          summary: {
            uz: "Fayl turlari, kengaytmalar (.docx, .pdf, .jpg), papka tuzish va nusxalash.",
            en: "File architectures, extensions (.docx, .pdf, .jpg), folder hierarchy, and organization.",
            ru: "Файловая система, расширения (.docx, .pdf), создание папок и организация архива."
          },
          content: {
            uz: `
              <h3>Fayl va papka nima?</h3>
              <p><strong>Fayl</strong> — kompyuter xotirasida ma'lum bir nom bilan saqlangan axborot to'plami (matn, rasm, qo'shiq, dastur).<br>
              <strong>Papka (Folder)</strong> — fayllarni mavzular bo'yicha tartibli saqlash uchun mo'ljallangan virtual jild.</p>

              <h3>Keng tarqalgan fayl kengaytmalari (Extensions)</h3>
              <ul>
                <li><strong>.docx / .txt:</strong> Matnli hujjatlar (Word, Bloknot).</li>
                <li><strong>.pdf:</strong> O'zgarmas elektron kitob va rasmiy hujjat formati.</li>
                <li><strong>.jpg / .png:</strong> Rasmlar (PNG shaffof fonni qo'llab-quvvatlaydi).</li>
                <li><strong>.mp3 / .mp4:</strong> Ovoz va video fayllar.</li>
                <li><strong>.zip / .rar:</strong> Siqilgan arxiv fayllar.</li>
                <li><strong>.exe:</strong> Windows dasturini o'rnatuvchi va ishga tushiruvchi fayl.</li>
              </ul>
            `,
            en: `
              <h3>Files and Folder Structures</h3>
              <p>A file represents stored data under a specific filename and extension, while folders serve as organizational directories.</p>
              <h3>Common File Extensions:</h3>
              <ul>
                <li><strong>.docx / .txt:</strong> Documents.</li>
                <li><strong>.pdf:</strong> Portable Document Format for universal reading.</li>
                <li><strong>.jpg / .png:</strong> Image formats.</li>
                <li><strong>.zip / .rar:</strong> Compressed archives.</li>
                <li><strong>.exe:</strong> Executable application files.</li>
              </ul>
            `,
            ru: `
              <h3>Файлы и организация папок</h3>
              <p>Файл — это единица хранения информации с именем и расширением. Папка — каталог для структурирования файлов.</p>
              <h3>Популярные расширения файлов:</h3>
              <ul>
                <li><strong>.docx / .txt:</strong> Текстовые документы.</li>
                <li><strong>.pdf:</strong> Универсальный формат документов и книг.</li>
                <li><strong>.jpg / .png:</strong> Графические изображения.</li>
                <li><strong>.zip / .rar:</strong> Архивы данных.</li>
                <li><strong>.exe:</strong> Исполняемые файлы программ для Windows.</li>
              </ul>
            `
          }
        },
        {
          id: "comp-internet",
          title: {
            uz: "Internet va uning ishlashi",
            en: "The Internet Fundamentals",
            ru: "Как устроен Интернет"
          },
          summary: {
            uz: "Global tarmoq, serverlar, mijozlar, IP-manzillar va veb-saytlar qanday yuklanadi.",
            en: "Global networking, client-server models, IP addresses, domains, and protocols.",
            ru: "Глобальная сеть, серверы, клиенты, IP-адреса и протоколы передачи данных."
          },
          content: {
            uz: `
              <h3>Internet nima?</h3>
              <p>Internet — butun dunyodagi milliardlab kompyuter va serverlarni simli (optik tolali) va simsiz (sun'iy yo'ldosh, radio) kanallar orqali bir-biriga bog'lovchi yagona global tarmoqdir.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🌐 Asosiy tushunchalar:</div>
                <ul>
                  <li><strong>Server:</strong> Katta ma'lumotlarni kechayu-kunduz saqlovchi va ulashuvchi kuchli kompyuter.</li>
                  <li><strong>Klient (Mijoz):</strong> Sizning kompyuteringiz yoki telefoningiz (serverga so'rov yuboradi).</li>
                  <li><strong>IP-manzil:</strong> Tarmoqdagi har bir qurilmaning unikal raqamli manzili (masalan: 192.168.1.1).</li>
                  <li><strong>Domen nomi (DNS):</strong> IP-manzillarni odamlar eslab qolishi oson bo'lgan so'zlarga aylantirish tizimi (masalan: google.com).</li>
                </ul>
              </div>
            `,
            en: `
              <h3>How the Internet Operates</h3>
              <p>The internet is a global network of interconnected computers communicating via standardized communication protocols (TCP/IP).</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🌐 Core Concepts:</div>
                <ul>
                  <li><strong>Server:</strong> Dedicated computing machine hosting web content 24/7.</li>
                  <li><strong>Client:</strong> Your personal web browser requesting pages.</li>
                  <li><strong>IP Address:</strong> Unique numerical identifier assigned to networked hardware.</li>
                  <li><strong>DNS (Domain Name System):</strong> Translates names like google.com into numeric IP addresses.</li>
                </ul>
              </div>
            `,
            ru: `
              <h3>Принцип работы интернета</h3>
              <p>Интернет — всемирная паутина соединенных серверов и пользовательских устройств, обменивающихся пакетами данных.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🌐 Главные термины:</div>
                <ul>
                  <li><strong>Сервер:</strong> Компьютер, круглосуточно хранящий сайты и базы данных.</li>
                  <li><strong>Клиент:</strong> Ваш браузер, отправляющий запрос на просмотр страницы.</li>
                  <li><strong>IP-адрес:</strong> Уникальный сетевой номер каждого устройства.</li>
                  <li><strong>DNS:</strong> Служба, переводящая сложные IP-номера в понятные имена сайтов (yandex.ru, google.com).</li>
                </ul>
              </div>
            `
          }
        },
        {
          id: "comp-browsers",
          title: {
            uz: "Brauzerlar bilan ishlash",
            en: "Web Browsers",
            ru: "Работа с веб-браузерами"
          },
          summary: {
            uz: "Google Chrome, Edge, Firefox: xatcho'plar (bookmarks), kesh tozalash va kengaytmalar.",
            en: "Google Chrome, Edge, Firefox: bookmarks, cache clearing, tabs, and extensions.",
            ru: "Популярные браузеры, закладки, очистка кэша, вкладки и полезные расширения."
          },
          content: {
            uz: `
              <h3>Brauzer — internetga ochiladigan deraza</h3>
              <p>Brauzer veb-sahifalarning HTML, CSS va JavaScript kodlarini o'qib, ularni ko'zga ko'rinadigan chiroyli sahifa shaklida ochib beradi.</p>
              <ul>
                <li><strong>Varaqlar (Tabs):</strong> Bir vaqtda bir nechta saytni ochish imkoniyati. Yangi varaq ochish: <span class="kbd-tag">Ctrl + T</span>.</li>
                <li><strong>Xatcho'plar (Bookmarks):</strong> Sevimli saytlarni eslab qolish: <span class="kbd-tag">Ctrl + D</span>.</li>
                <li><strong>Tarix (History):</strong> Oldin kirilgan saytlar ro'yxatini ko'rish: <span class="kbd-tag">Ctrl + H</span>.</li>
                <li><strong>Inkognito (Maxfiy rejim):</strong> Tarix va kuki fayllarini saqlamasdan internetga kirish: <span class="kbd-tag">Ctrl + Shift + N</span>.</li>
              </ul>
            `,
            en: `
              <h3>Navigating Web Browsers</h3>
              <p>Browsers parse HTML, styles, and scripts to render interactive web interfaces.</p>
              <ul>
                <li><strong>Tabs:</strong> Open multiple sites simultaneously (<span class="kbd-tag">Ctrl + T</span>).</li>
                <li><strong>Bookmarks:</strong> Save essential pages for quick access (<span class="kbd-tag">Ctrl + D</span>).</li>
                <li><strong>History:</strong> Review visited pages (<span class="kbd-tag">Ctrl + H</span>).</li>
                <li><strong>Incognito Mode:</strong> Private browsing session without saving history (<span class="kbd-tag">Ctrl + Shift + N</span>).</li>
              </ul>
            `,
            ru: `
              <h3>Возможности веб-браузеров</h3>
              <p>Браузер считывает программный код интернет-страниц и превращает его в удобный сайт.</p>
              <ul>
                <li><strong>Вкладки:</strong> Открытие сайтов параллельно (<span class="kbd-tag">Ctrl + T</span>).</li>
                <li><strong>Закладки:</strong> Сохранение важных страниц в один клик (<span class="kbd-tag">Ctrl + D</span>).</li>
                <li><strong>История:</strong> Просмотр посещенных сайтов (<span class="kbd-tag">Ctrl + H</span>).</li>
                <li><strong>Режим Инкогнито:</strong> Просмотр сайтов без сохранения истории и cookie (<span class="kbd-tag">Ctrl + Shift + N</span>).</li>
              </ul>
            `
          }
        },
        {
          id: "comp-google-search",
          title: {
            uz: "Google'da samarali qidiruv",
            en: "Effective Google Search",
            ru: "Эффективный поиск в Google"
          },
          summary: {
            uz: "Qidiruv operatorlari, qo'shtirnoqlar, aniq fayllarni qidirish (filetype) va filtrlash.",
            en: "Search operators, exact match quotes, filetype filters, and search shortcuts.",
            ru: "Поисковые операторы, точные фразы в кавычках, поиск по типу файлов и фильтры."
          },
          content: {
            uz: `
              <h3>Google'da professional kabi qidirish sirlari</h3>
              <p>Aksariyat odamlar Google'ga faqat oddiy so'zlar yozishadi. Maxsus operatorlar yordamida esa kerakli ma'lumotni 10 barobar tezroq topish mumkin:</p>
              <ul>
                <li><code>"aniq ibora"</code> — Agar so'zlarni qo'shtirnoqqa olsangiz, Google aynan shu tartibdagi jumlani qidiradi.</li>
                <li><code>site:edu.uz</code> — Faqat ko'rsatilgan sayt yoki domen ichidan qidirish.</li>
                <li><code>filetype:pdf</code> — Faqat ko'rsatilgan formatdagi fayllarni (kitoblar, taqdimotlar) topish. Masalan: <i>python darslik filetype:pdf</i>.</li>
                <li><code>mavzu -so'z</code> — Bitta so'zni natijalardan chiqarib tashlash (minus belgisi).</li>
              </ul>
            `,
            en: `
              <h3>Mastering Search Query Operators</h3>
              <p>Use search syntax to isolate the exact information you require instantly:</p>
              <ul>
                <li><code>"exact phrase"</code>: Enclosing in quotes guarantees matching the verbatim sentence.</li>
                <li><code>site:example.com</code>: Restricts results exclusively to the target website.</li>
                <li><code>filetype:pdf</code>: Locates specific downloadable documents or slides.</li>
                <li><code>keyword -unwanted</code>: Excludes specific terms from the result set.</li>
              </ul>
            `,
            ru: `
              <h3>Секреты точного поиска в Google</h3>
              <p>Используйте поисковые операторы для быстрого нахождения документации и книг:</p>
              <ul>
                <li><code>"точная фраза"</code>: Поиск строго указанного словосочетания.</li>
                <li><code>site:edu.uz</code>: Поиск только по страницам указанного сайта.</li>
                <li><code>filetype:pdf</code>: Поиск только PDF файлов (учебники, отчеты).</li>
                <li><code>слово -минус</code>: Исключение ненужных терминов из выдачи.</li>
              </ul>
            `
          }
        },
        {
          id: "comp-email",
          title: {
            uz: "Elektron pochta (Email)",
            en: "Electronic Mail (Email)",
            ru: "Электронная почта (Email)"
          },
          summary: {
            uz: "Pochta qutisi ochish, xat tuzilishi, mavzu (Subject), fayllar biriktirish va xat etikasi.",
            en: "Account setup, subject lines, attachments, CC/BCC fields, and professional etiquette.",
            ru: "Создание почты, тема письма, вложения, поля Копия/Скрытая копия и деловой этикет."
          },
          content: {
            uz: `
              <h3>Email bilan to'g'ri ishlash qoidalari</h3>
              <p>Elektron pochta (Gmail, Outlook) ishbilarmonlik va rasmiy muloqotning asosiy vositasidir.</p>
              <ul>
                <li><strong>Mavzu (Subject):</strong> Hech qachon mavzuni bo'sh qoldirmang. U xatning asosiy mazmunini 3-5 ta so'zda ifodalashi kerak.</li>
                <li><strong>Kimga (To):</strong> Xatning asosiy qabul qiluvchisi.</li>
                <li><strong>Nusxa (CC - Carbon Copy):</strong> Xatdan xabardor bo'lishi kerak bo'lgan boshqa kuzatuvchilar.</li>
                <li><strong>Yashirin nusxa (BCC):</strong> Boshqalar ko'rmaydigan maxfiy qabul qiluvchilar.</li>
                <li><strong>Biriktirma (Attachment - qisqich belgisi):</strong> Xatga hujjat, rasm yoki jadvallarni qo'shish.</li>
              </ul>
            `,
            en: `
              <h3>Professional Email Communication</h3>
              <p>Email remains the authoritative medium for institutional, academic, and business communication.</p>
              <ul>
                <li><strong>Subject Line:</strong> Concise 3-6 word summary of the message goal.</li>
                <li><strong>To:</strong> Primary intended action recipients.</li>
                <li><strong>CC:</strong> Informational copies for secondary stakeholders.</li>
                <li><strong>BCC:</strong> Blind carbon copies for private distribution.</li>
                <li><strong>Attachments:</strong> Cleanly named PDF or image documents.</li>
              </ul>
            `,
            ru: `
              <h3>Правила деловой электронной почты</h3>
              <p>Электронная почта — фундамент официальной переписки и учебы.</p>
              <ul>
                <li><strong>Тема (Subject):</strong> Никогда не оставляйте пустой; должна кратко отражать суть письма.</li>
                <li><strong>Кому:</strong> Главный адресат, от которого ждут ответа.</li>
                <li><strong>Копия (CC):</strong> Наблюдатели, которым полезна информация.</li>
                <li><strong>Скрытая копия (BCC):</strong> Получатели, чьи адреса скрыты от других.</li>
                <li><strong>Вложение:</strong> Прикрепление файлов документов или архивов.</li>
              </ul>
            `
          }
        },
        {
          id: "comp-wifi",
          title: {
            uz: "Wi-Fi va simsiz tarmoqlar",
            en: "Wi-Fi and Wireless Networks",
            ru: "Wi-Fi и беспроводные сети"
          },
          summary: {
            uz: "Wi-Fi nima, 2.4 GHz va 5 GHz chastotalar, routerlar va jamoat joylarida xavfsiz ulanish.",
            en: "Wi-Fi standards, 2.4 GHz vs 5 GHz bands, routers, and safe public hotspot protocols.",
            ru: "Как работает Wi-Fi, диапазоны 2.4 ГГц и 5 ГГц, роутеры и безопасность в общественных сетях."
          },
          content: {
            uz: `
              <h3>Wi-Fi qanday ishlaydi?</h3>
              <p>Wi-Fi radio to'lqinlar orqali qurilmalaringizni routerga (marshrutizatorga), u orqali esa global internetga bog'laydi.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">📶 2.4 GHz va 5 GHz farqi:</div>
                <ul>
                  <li><strong>2.4 GHz:</strong> To'lqinlari uzoqroq masofaga va devorlar ortiga yaxshi yetib boradi, lekin tezligi o'rtacha.</li>
                  <li><strong>5 GHz:</strong> Juda yuqori tezlik beradi, lekin qisqa masofada va devorlardan qiyin o'tadi.</li>
                </ul>
              </div>
              <p><strong>Xavfsizlik:</strong> Kafe yoki bekatlardagi ochiq (parolsiz) Wi-Fi tarmoqlarida shaxsiy bank parollari va maxfiy ma'lumotlarni kiritish xavfli!</p>
            `,
            en: `
              <h3>Wi-Fi Networking & Frequencies</h3>
              <p>Wi-Fi transmits data via high-frequency radio bands between your device and a wireless router.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">📶 2.4 GHz vs 5 GHz:</div>
                <ul>
                  <li><strong>2.4 GHz:</strong> Better range through walls, lower data bandwidth.</li>
                  <li><strong>5 GHz:</strong> High speeds and low latency, limited physical range.</li>
                </ul>
              </div>
            `,
            ru: `
              <h3>Как работает Wi-Fi</h3>
              <p>Wi-Fi передает радиосигналы между вашим устройством и маршрутизатором.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">📶 Разница 2.4 ГГц и 5 ГГц:</div>
                <ul>
                  <li><strong>2.4 ГГц:</strong> Пробивает стены и действует дальше, но скорость умеренная.</li>
                  <li><strong>5 ГГц:</strong> Сверхбыстрая передача данных на открытом пространстве.</li>
                </ul>
              </div>
            `
          }
        },
        {
          id: "comp-security",
          title: {
            uz: "Parol va kiberxavfsizlik",
            en: "Password & Cyber Security",
            ru: "Пароли и кибербезопасность"
          },
          summary: {
            uz: "Kuchli parollar tuzish, ikki bosqichli autentifikatsiya (2FA) va fishingdan himoyalanish.",
            en: "Creating unbreakable passwords, two-factor authentication (2FA), and avoiding phishing scams.",
            ru: "Надежные пароли, двухфакторная аутентификация (2FA) и защита от фишинга."
          },
          content: {
            uz: `
              <h3>Shaxsiy ma'lumotlarni qanday himoyalash kerak?</h3>
              <p>Har bir internet foydalanuvchisi bilishi shart bo'lgan oltin qoidalar:</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🔒 Kuchli parol qoidalari:</div>
                <ul>
                  <li>Kamida 12 ta belgidan iborat bo'lsin.</li>
                  <li>Katta va kichik harflar, raqamlar va maxsus belgilar (@, #, $, %) aralashmasi bo'lsin.</li>
                  <li>Tug'ilgan yil, ism yoki "123456" kabi sodda so'zlarni aslo ishlatmang!</li>
                  <li>Har bir xizmat uchun alohida yangi parol qo'llang.</li>
                </ul>
              </div>

              <h3>2FA — Ikki bosqichli tasdiqlash</h3>
              <p>Parolingiz birovga ma'lum bo'lib qolgan taqdirda ham, telefoningizga keladigan tasdiqlash kodi yoki authenticator ilovasi akkauntingizni buzilishdan 100% asraydi.</p>
            `,
            en: `
              <h3>Digital Security Essentials</h3>
              <p>Core protective measures for personal accounts and data privacy:</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🔒 Password Hygiene:</div>
                <ul>
                  <li>Minimum 12-16 alphanumeric and symbol characters.</li>
                  <li>Avoid personal identifiers, birth years, or sequential digits.</li>
                  <li>Never reuse identical passwords across services.</li>
                </ul>
              </div>
              <p><strong>Two-Factor Authentication (2FA):</strong> Demands a secondary verification token, stopping 99% of automated breach attempts.</p>
            `,
            ru: `
              <h3>Основы безопасности в сети</h3>
              <p>Главные правила защиты личных аккаунтов и файлов:</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🔒 Надежный пароль:</div>
                <ul>
                  <li>Не менее 12 символов.</li>
                  <li>Сочетание строчных и заглавных букв, цифр и спецзнаков (!@#).</li>
                  <li>Никаких дат рождения или имени.</li>
                  <li>Уникальный пароль для каждого сервиса.</li>
                </ul>
              </div>
              <p><strong>2FA (Двухфакторная защита):</strong> Обязательно включите подтверждение по SMS или коду в приложении.</p>
            `
          }
        },
        {
          id: "comp-shortcuts",
          title: {
            uz: "Eng muhim klaviatura tezkor tugmalari",
            en: "Essential Keyboard Shortcuts",
            ru: "Горячие клавиши (Shortcuts)"
          },
          summary: {
            uz: "Ish unumdorligini 3 barobar oshiruvchi Windows va matn tezkor tugmalari to'plami.",
            en: "Boost productivity 3x: universal Windows navigation and editing key bindings.",
            ru: "Комбинации клавиш Windows, ускоряющие работу с текстом и окнами в 3 раза."
          },
          content: {
            uz: `
              <h3>Ishni tezlashtiruvchi universal kombinatsiyalar</h3>
              <p>Ushbu tugmalarni bilgan mutaxassis sichqonchaga kamroq chalg'iydi va ishlarni tezroq bajaradi:</p>
              <div class="shortcuts-grid">
                <div class="shortcut-row"><span>Nusxa olish (Copy)</span><span class="kbd-tag">Ctrl + C</span></div>
                <div class="shortcut-row"><span>Qo'yish (Paste)</span><span class="kbd-tag">Ctrl + V</span></div>
                <div class="shortcut-row"><span>Kesib olish (Cut)</span><span class="kbd-tag">Ctrl + X</span></div>
                <div class="shortcut-row"><span>Oxirgi amalni bekor qilish (Undo)</span><span class="kbd-tag">Ctrl + Z</span></div>
                <div class="shortcut-row"><span>Barchasini belgilash (Select All)</span><span class="kbd-tag">Ctrl + A</span></div>
                <div class="shortcut-row"><span>Faylni saqlash (Save)</span><span class="kbd-tag">Ctrl + S</span></div>
                <div class="shortcut-row"><span>Ish stoliga o'tish (Desktop)</span><span class="kbd-tag">Win + D</span></div>
                <div class="shortcut-row"><span>Dasturlar orasida o'tish</span><span class="kbd-tag">Alt + Tab</span></div>
                <div class="shortcut-row"><span>Kompyuterni qulflash (Lock)</span><span class="kbd-tag">Win + L</span></div>
                <div class="shortcut-row"><span>Skrinshot olish (Screenshot)</span><span class="kbd-tag">Win + Shift + S</span></div>
              </div>
            `,
            en: `
              <h3>Universal Shortcut Accelerators</h3>
              <p>Memorize these bindings to streamline daily workflows:</p>
              <div class="shortcuts-grid">
                <div class="shortcut-row"><span>Copy</span><span class="kbd-tag">Ctrl + C</span></div>
                <div class="shortcut-row"><span>Paste</span><span class="kbd-tag">Ctrl + V</span></div>
                <div class="shortcut-row"><span>Cut</span><span class="kbd-tag">Ctrl + X</span></div>
                <div class="shortcut-row"><span>Undo</span><span class="kbd-tag">Ctrl + Z</span></div>
                <div class="shortcut-row"><span>Select All</span><span class="kbd-tag">Ctrl + A</span></div>
                <div class="shortcut-row"><span>Save Document</span><span class="kbd-tag">Ctrl + S</span></div>
                <div class="shortcut-row"><span>Show Desktop</span><span class="kbd-tag">Win + D</span></div>
                <div class="shortcut-row"><span>Switch Applications</span><span class="kbd-tag">Alt + Tab</span></div>
                <div class="shortcut-row"><span>Lock Screen</span><span class="kbd-tag">Win + L</span></div>
                <div class="shortcut-row"><span>Region Screenshot</span><span class="kbd-tag">Win + Shift + S</span></div>
              </div>
            `,
            ru: `
              <h3>Полезные комбинации клавиш</h3>
              <p>Эти сочетания экономят время при ежедневной работе с компьютером:</p>
              <div class="shortcuts-grid">
                <div class="shortcut-row"><span>Копировать</span><span class="kbd-tag">Ctrl + C</span></div>
                <div class="shortcut-row"><span>Вставить</span><span class="kbd-tag">Ctrl + V</span></div>
                <div class="shortcut-row"><span>Вырезать</span><span class="kbd-tag">Ctrl + X</span></div>
                <div class="shortcut-row"><span>Отменить действие</span><span class="kbd-tag">Ctrl + Z</span></div>
                <div class="shortcut-row"><span>Выделить все</span><span class="kbd-tag">Ctrl + A</span></div>
                <div class="shortcut-row"><span>Сохранить файл</span><span class="kbd-tag">Ctrl + S</span></div>
                <div class="shortcut-row"><span>Свернуть все окна</span><span class="kbd-tag">Win + D</span></div>
                <div class="shortcut-row"><span>Переключение окон</span><span class="kbd-tag">Alt + Tab</span></div>
                <div class="shortcut-row"><span>Заблокировать ПК</span><span class="kbd-tag">Win + L</span></div>
                <div class="shortcut-row"><span>Скриншот области</span><span class="kbd-tag">Win + Shift + S</span></div>
              </div>
            `
          }
        },
        {
          id: "comp-troubleshooting",
          title: {
            uz: "Oddiy nosozliklarni bartaraf etish",
            en: "Basic Troubleshooting",
            ru: "Устранение базовых неполадок"
          },
          summary: {
            uz: "Dastur qotib qolganda nima qilish kerak, Task Manager va qayta yoqish (Reboot).",
            en: "Handling frozen programs, Task Manager process termination, and systematic restarts.",
            ru: "Что делать если программа зависла, Диспетчер задач и перезагрузка системы."
          },
          content: {
            uz: `
              <h3>Kompyuter qotib qolganda 3 ta qadam:</h3>
              <p>Har qanday foydalanuvchi bilishi kerak bo'lgan oddiy va samarali usullar:</p>
              <ol>
                <li><strong>Qotgan dasturni majburiy yopish:</strong> <span class="kbd-tag">Ctrl + Shift + Esc</span> tugmalarini bosing. Bu "Task Manager" (Vazifalar boshqaruvchisi)ni ochadi. Qotib qolgan dastur ustiga bosing va "End Task" (Vazifani tugatish) tugmasini tanlang.</li>
                <li><strong>Qayta yoqish (Restart):</strong> Ko'p uchraydigan vaqtinchalik dasturiy to'qnashuvlar oddiy kompyuterni qayta yoqish orqali to'liq yechiladi.</li>
                <li><strong>Simlar va ulanishlarni tekshirish:</strong> Internet yoki klaviatura ishlamasa, USB va tarmoq simlari mahkam o'tirganini tekshiring.</li>
              </ol>
            `,
            en: `
              <h3>Resolving Common Freezes and Bugs:</h3>
              <ol>
                <li><strong>Terminate Stalled Processes:</strong> Press <span class="kbd-tag">Ctrl + Shift + Esc</span> to open Task Manager, locate the unresponsive app, and click "End Task".</li>
                <li><strong>System Reboot:</strong> Clears RAM buffers and resets operational threads.</li>
                <li><strong>Physical Connections:</strong> Check USB and Ethernet cables if peripheral communication stops.</li>
              </ol>
            `,
            ru: `
              <h3>3 шага при зависании компьютера:</h3>
              <ol>
                <li><strong>Принудительное закрытие:</strong> Нажмите <span class="kbd-tag">Ctrl + Shift + Esc</span> (Диспетчер задач), выберите зависшую программу и нажмите «Снять задачу».</li>
                <li><strong>Перезагрузка:</strong> Очищает оперативную память и перезапускает драйверы.</li>
                <li><strong>Проверка кабелей:</strong> Проверьте плотность подключения USB и сетевых проводов.</li>
              </ol>
            `
          }
        }
      ]
    },

    // Course 2: Prompt Writing
    {
      id: "prompt",
      icon: "✨",
      title: {
        uz: "Prompt yozish",
        en: "Prompt Writing",
        ru: "Написание промптов"
      },
      desc: {
        uz: "AI vositalari uchun professional darajadagi buyruqlar va promptlar tuzish san'ati.",
        en: "The discipline of designing precise, high-performance instructions for AI models.",
        ru: "Искусство создания четких и результативных текстовых запросов к языковым моделям."
      },
      topics: ["Rol", "Vazifa", "Kontekst", "Format", "Rasm promptlari", "Kod promptlari", "AI Studio"],
      lessons: [
        {
          id: "prompt-whatis",
          title: {
            uz: "Prompt nima?",
            en: "What is a Prompt?",
            ru: "Что такое промпт?"
          },
          summary: {
            uz: "Promptning mohiyati: inson va sun'iy intellekt modeli o'rtasidagi ko'prik.",
            en: "Core definition: the communicative prompt bridge connecting human intent to AI systems.",
            ru: "Определение: текстовая инструкция, передающая задачу и контекст искусственному интеллекту."
          },
          content: {
            uz: `
              <h3>Prompt tushunchasi</h3>
              <p><strong>Prompt</strong> — bu sun'iy intellekt (AI) modeliga aniq natija olish uchun beriladigan matnli buyruq, ko'rsatma yoki savoldir.</p>
              
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🎯 "Oltin qoida" (Garbage In, Garbage Out):</div>
                <p>AI modeli siz unga qanday ma'lumot bersangiz, shunga mos javob qaytaradi. Noaniq va chala prompt bersangiz — yuzaki javob olasiz; professional, aniq va kontekstli prompt bersangiz — yuqori darajadagi natijaga erishasiz.</p>
              </div>

              <h3>Prompt qayerda ishlatiladi?</h3>
              <ul>
                <li>Matn yozish va tahlil qilish (maqolalar, tarjimalar, xatlar).</li>
                <li>Dasturlash (kod yozish, xatolarni tuzatish, testlar).</li>
                <li>Rasmlar va dizayn (tasvir yaratish buyruqlari).</li>
                <li>Biznes va ta'lim (reja tuzish, tushuntirish berish).</li>
              </ul>
            `,
            en: `
              <h3>Understanding Prompts</h3>
              <p>A prompt is the textual directive, contextual briefing, or question supplied to an AI model to steer its output generation.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🎯 The Core Principle:</div>
                <p>High specificity yields high precision. Vague queries produce generalized summaries, whereas well-structured prompts yield expert-grade executions.</p>
              </div>
            `,
            ru: `
              <h3>Что такое промпт?</h3>
              <p>Промпт — это текстовый запрос или детальная инструкция, которую пользователь передает модели искусственного интеллекта для получения нужного результата.</p>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🎯 Главный закон промптинга:</div>
                <p>Каков запрос — таков и ответ. Размытый вопрос дает шаблонный текст; структурированная инструкция с контекстом обеспечивает профессиональный результат.</p>
              </div>
            `
          }
        },
        {
          id: "prompt-structure",
          title: {
            uz: "Prompt strukturasi va anatomiyasi",
            en: "Prompt Structure & Anatomy",
            ru: "Структура и анатомия промпта"
          },
          summary: {
            uz: "Mukammal promptning 5 ta ustuni: Rol + Vazifa + Kontekst + Cheklovlar + Format.",
            en: "The 5 pillars of an elite prompt: Role + Task + Context + Constraints + Format.",
            ru: "5 ключевых компонентов запроса: Роль + Задача + Контекст + Ограничения + Формат."
          },
          content: {
            uz: `
              <h3>Professional promptning 5 ta tarkibiy qismi</h3>
              <p>Samarali prompt shunchaki savol emas, u quyidagi tizimli bloklardan tashkil topadi:</p>
              
              <div class="lesson-callout">
                <ul>
                  <li><strong>1. Rol (Role):</strong> AI o'zini kim deb tasavvur qilishi kerak? (masalan: 10 yillik tajribaga ega dasturchi, marketing direktori).</li>
                  <li><strong>2. Vazifa (Task):</strong> Aniq nima ish qilinishi lozim? (fe'l bilan boshlansin: "yoz", "tahlil qil", "tuz").</li>
                  <li><strong>3. Kontekst (Context):</strong> Bu ish kim uchun, nima maqsadda qilinmoqda? Qanday vaziyat mavjud?</li>
                  <li><strong>4. Cheklovlar (Requirements/Constraints):</strong> So'zlar soni, ohangi (rasmiy/do'stona), nimalardan saqlanish kerakligi.</li>
                  <li><strong>5. Chiqish formati (Output Format):</strong> Natija jadval, ro'yxat, kod yoki JSON bo'lishi kerakmi?</li>
                </ul>
              </div>

              <h3>Tayyor formula misoli:</h3>
              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>PROMPT ANDOZA</span>
                  <button class="copy-prompt-btn" data-copy="Siz 10 yillik tajribaga ega katta frontend dasturchisiz (ROL). Menga HTML va CSS o'rganayotgan yangi talaba uchun flexbox va grid farqini tushuntirib bering (VAZIFA). Talaba vizual tushunishni yaxshi ko'radi (KONTEKST). Murakkab atamalarsiz, hayotiy misollar bilan tushuntiring, 250 so'zdan oshmasin (CHEKLOV). Javobni taqqoslash jadvali va qisqa xulosa ko'rinishida bering (FORMAT).">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">Siz 10 yillik tajribaga ega katta frontend dasturchisiz (ROL). Menga HTML va CSS o'rganayotgan yangi talaba uchun flexbox va grid farqini tushuntirib bering (VAZIFA). Talaba vizual tushunishni yaxshi ko'radi (KONTEKST). Murakkab atamalarsiz, hayotiy misollar bilan tushuntiring, 250 so'zdan oshmasin (CHEKLOV). Javobni taqqoslash jadvali va qisqa xulosa ko'rinishida bering (FORMAT).</div>
              </div>
            `,
            en: `
              <h3>The 5 Core Elements of a Prompt</h3>
              <ul>
                <li><strong>1. Role:</strong> Assigning subject-matter domain authority.</li>
                <li><strong>2. Task:</strong> Explicit action verb denoting the target goal.</li>
                <li><strong>3. Context:</strong> Background setting, audience profile, and intent.</li>
                <li><strong>4. Constraints:</strong> Scope boundaries, exclusions, tone of voice.</li>
                <li><strong>5. Output Format:</strong> Tables, JSON schema, or markdown lists.</li>
              </ul>
              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>PROMPT TEMPLATE</span>
                  <button class="copy-prompt-btn" data-copy="Act as a senior computer science instructor. Explain the difference between RAM and SSD to a 12-year-old beginner. Use a kitchen desk vs pantry analogy. Keep the explanation under 200 words and format as a bulleted summary.">Copy Prompt</button>
                </div>
                <div class="prompt-box-content">Act as a senior computer science instructor. Explain the difference between RAM and SSD to a 12-year-old beginner. Use a kitchen desk vs pantry analogy. Keep the explanation under 200 words and format as a bulleted summary.</div>
              </div>
            `,
            ru: `
              <h3>5 составных частей сильного промпта</h3>
              <ul>
                <li><strong>1. Роль (Role):</strong> Кем выступает ИИ (опытный разработчик, маркетолог, преподаватель).</li>
                <li><strong>2. Задача (Task):</strong> Конкретное действие (напиши, проанализируй, составь).</li>
                <li><strong>3. Контекст (Context):</strong> Для кого создается материал и какая вводная информация есть.</li>
                <li><strong>4. Ограничения:</strong> Объем текста, стиль речи, запретные слова.</li>
                <li><strong>5. Формат ответа:</strong> Таблица, список пунктов или код.</li>
              </ul>
              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>ШАБЛОН ПРОМПТА</span>
                  <button class="copy-prompt-btn" data-copy="Вы — опытный преподаватель информатики. Объясните разницу между оперативной памятью и SSD начинающему ученику на аналогии кухонного стола и шкафа. Объем не более 200 слов, оформите в виде маркированного списка.">Копировать</button>
                </div>
                <div class="prompt-box-content">Вы — опытный преподаватель информатики. Объясните разницу между оперативной памятью и SSD начинающему ученику на аналогии кухонного стола и шкафа. Объем не более 200 слов, оформите в виде маркированного списка.</div>
              </div>
            `
          }
        },
        {
          id: "prompt-role",
          title: {
            uz: "Rol belgilash (Role)",
            en: "Assigning Roles",
            ru: "Задание роли модели (Role)"
          },
          summary: {
            uz: "AI ga mutaxassis qiyofasini berish orqali javob sifatini oshirish usullari.",
            en: "Priming domain expertise to steer vocabulary, reasoning depth, and perspective.",
            ru: "Повышение качества ответа за счет задания профессиональной роли и тональности."
          },
          content: {
            uz: `
              <h3>Nega rol belgilash muhim?</h3>
              <p>AI trillionlab ma'lumotlarni biladi. Agar siz unga rol bermasangiz, u oddiy o'rtacha javob beradi. Agar aniq rol bersangiz, u aynan shu soha mutaxassisining lug'ati va fikrlash tarzi bilan javob qaytaradi.</p>
              
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">Rolsiz prompt</div>
                  <p><i>"Menga marketing haqida gapirib ber."</i></p>
                  <p>Natija: Umumiy, darsliklardagi zerikarli ta'riflar to'plami.</p>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">Rolli professional prompt</div>
                  <p><i>"Siz B2B dasturiy ta'minot sotuvida 10 yillik tajribaga ega yetakchi marketing direktorisiz..."</i></p>
                  <p>Natija: Haqiqiy keyslar, strategiyalar va aniq amaliy takliflar.</p>
                </div>
              </div>
            `,
            en: `
              <h3>Why Persona Priming Works</h3>
              <p>Without an explicit persona, models default to an average generic tone. Specifying a role narrows the latent space toward expert vocabulary and methodology.</p>
            `,
            ru: `
              <h3>Зачем задавать роль модели?</h3>
              <p>Роль отсекает лишнее и направляет модель на профессиональный лексикон и практический опыт нужной сферы.</p>
            `
          }
        },
        {
          id: "prompt-task",
          title: {
            uz: "Aniq vazifa qo'yish (Task)",
            en: "Defining the Task",
            ru: "Формулирование задачи (Task)"
          },
          summary: {
            uz: "Noaniq so'rovlardan qochish: harakat fe'llari va o'lchanadigan talablar qo'yish.",
            en: "Action verbs, avoiding ambiguities, and defining measurable objectives.",
            ru: "Использование четких глаголов действия и измеримых критериев выполнения."
          },
          content: {
            uz: `
              <h3>Vazifani aniq belgilash</h3>
              <p>Vazifa — bu promptning yuragi. Har doim aniq harakat fe'lini ishlating:</p>
              <ul>
                <li>❌ <i>"Kompyuter haqida nimadir yoz."</i> (Juda noaniq)</li>
                <li>✅ <i>"Kompyuterning 5 ta asosiy komponentini ro'yxat qilib tuz va har birining vazifasini 1 tadan gapda izohla."</i> (Aniq va o'lchanadigan)</li>
              </ul>
            `,
            en: `
              <h3>Precise Task Articulation</h3>
              <p>Anchor tasks with unambiguous directive verbs: summarize, extract, categorize, compare, or refactor.</p>
            `,
            ru: `
              <h3>Четкая постановка задачи</h3>
              <p>Используйте прямые глаголы действия: «Сравни», «Составь таблицу», «Найди ошибки», «Переведи и адаптируй».</p>
            `
          }
        },
        {
          id: "prompt-context",
          title: {
            uz: "Kontekst taqdim etish (Context)",
            en: "Providing Context",
            ru: "Предоставление контекста (Context)"
          },
          summary: {
            uz: "Vaziyat, auditoriya, fon ma'lumotlari va maqsadni tushuntirish san'ati.",
            en: "Equipping the model with background realities, target audience, and current constraints.",
            ru: "Окружение, целевая аудитория и исходные данные для точной генерации."
          },
          content: {
            uz: `
              <h3>Kontekst — muvaffaqiyat garovi</h3>
              <p>AI sizning xayolingizdagi maqsadni o'z-o'zidan bila olmaydi. Unga quyidagi fon ma'lumotlarini bering:</p>
              <ul>
                <li><strong>Auditoriya kim?</strong> (Bolalar, talabalar, keksa yoshdagilar, professional muhandislar).</li>
                <li><strong>Maqsad nima?</strong> (Imtihonga tayyorlanish, mahsulot sotish, muammoni hal qilish).</li>
                <li><strong>Boshlang'ich holat qanday?</strong> (Qanday ma'lumotlar mavjud, qaysi qismlar qilingan).</li>
              </ul>
            `,
            en: `
              <h3>Supplying Essential Background Context</h3>
              <p>State explicitly who the end audience is, what domain constraints exist, and what the ultimate goal is.</p>
            `,
            ru: `
              <h3>Контекст как ключ к успеху</h3>
              <p>Укажите, для кого создается контент (новички, эксперты, клиенты) и какова реальная цель задачи.</p>
            `
          }
        },
        {
          id: "prompt-requirements",
          title: {
            uz: "Cheklovlar va talablar (Requirements)",
            en: "Constraints & Requirements",
            ru: "Требования и ограничения (Constraints)"
          },
          summary: {
            uz: "Hajm, ohang, man etilgan so'zlar va chegaralarni kiritish.",
            en: "Setting boundaries: length constraints, tonal parameters, and explicit negatives.",
            ru: "Задание границ: лимиты объема, запрещенные слова и желаемый тон общения."
          },
          content: {
            uz: `
              <h3>AI ni to'g'ri chegaralash</h3>
              <p>Sun'iy intellekt ko'pincha keragidan ortiq uzun va umumiy gaplar yozadi. Buning oldini olish uchun aniq cheklovlar qo'yiladi:</p>
              <ul>
                <li><i>"Javob 150 so'zdan oshmasin."</i></li>
                <li><i>"Rasmiy va do'stona tonda yozing."</i></li>
                <li><i>"Texnik jargon so'zlarni ishlatmang."</i></li>
                <li><i>"Faqat taqdim etilgan matnga tayangan holda javob bering, o'zingizdan fakt qo'shmang."</i></li>
              </ul>
            `,
            en: `
              <h3>Constraining Generation Boundaries</h3>
              <p>Prevent verbose hallucinations through word count caps, strict tone guidelines, and negative constraints.</p>
            `,
            ru: `
              <h3>Ограничения и требования</h3>
              <p>Устанавливайте лимиты по объему (до 200 слов), тону (деловой, дружелюбный) и запрещайте домысливать факты.</p>
            `
          }
        },
        {
          id: "prompt-format",
          title: {
            uz: "Chiqish formati (Output format)",
            en: "Output Formatting",
            ru: "Формат вывода данных (Output format)"
          },
          summary: {
            uz: "Jadval, ro'yxat, JSON, Markdown yoki kod ko'rinishida natija olish.",
            en: "Instructing structured returns: tables, markdown checklists, JSON, or code blocks.",
            ru: "Получение ответа в виде таблиц, маркированных списков, JSON или готового кода."
          },
          content: {
            uz: `
              <h3>Javobni kerakli shaklda olish</h3>
              <p>AI matnni qanday ko'rinishda berishi kerakligini oldindan ayting:</p>
              <ul>
                <li><strong>Jadval (Table):</strong> Ustun nomlarini aniq ko'rsating (Masalan: 3 ta ustunli jadval: "Atama", "Vazifasi", "Misol").</li>
                <li><strong>Belgilangan ro'yxat (Bulleted list):</strong> 1, 2, 3 tartibida qisqa punktlar.</li>
                <li><strong>JSON format:</strong> Dasturlarda avtomatik o'qish uchun tuzilgan ma'lumotlar.</li>
              </ul>

              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>JADVAL FORMATI PROMPTI</span>
                  <button class="copy-prompt-btn" data-copy="Kompyuterning CPU, RAM, SSD va Monitor qurilmalarini taqqosla. Javobni Markdown jadvali shaklida ber. Ustunlar: 'Qurilma', 'Asosiy vazifasi', 'Oddiy misol', 'Tezligi'.">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">Kompyuterning CPU, RAM, SSD va Monitor qurilmalarini taqqosla. Javobni Markdown jadvali shaklida ber. Ustunlar: 'Qurilma', 'Asosiy vazifasi', 'Oddiy misol', 'Tezligi'.</div>
              </div>
            `,
            en: `
              <h3>Structuring Output Artifacts</h3>
              <p>Specify output data structures explicitly: Markdown tables, JSON payloads, or numbered steps.</p>
            `,
            ru: `
              <h3>Настройка формата ответа</h3>
              <p>Требуйте ответ в виде таблицы с конкретными колонками, списка шагов или чистого JSON для интеграции.</p>
            `
          }
        },
        {
          id: "prompt-good-bad",
          title: {
            uz: "Yaxshi va yomon promptlar taqqosi",
            en: "Good vs Bad Prompts",
            ru: "Сравнение: Хорошие и плохие промпты"
          },
          summary: {
            uz: "Haqiqiy misollar orqali yuzaki va professional promptlar farqini ko'rish.",
            en: "Side-by-side case comparisons illustrating real-world prompt transformations.",
            ru: "Наглядные примеры улучшения слабых запросов до профессионального уровня."
          },
          content: {
            uz: `
              <h3>Amaliy taqqoslashlar</h3>
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">❌ Yomon prompt</div>
                  <p><i>"Biznes reja yozib ber."</i></p>
                  <p><strong>Kamchiligi:</strong> Qaysi biznes? Byudjet qancha? Auditoriya kim? Natijada umumiy foydasiz shablon chiqadi.</p>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">✅ Kuchli professional prompt</div>
                  <p><i>"Siz kichik biznes bo'yicha maslahatchisiz. Toshkent shahrida yangi ochilayotgan kompyuter savodxonligi o'quv markazi uchun 3 oylik marketing rejasini tuzing. Asosiy mijozlar: 30-50 yoshdagi boshlovchilar. Haftalik aniq qadamlar va byudjetsiz reklama usullarini ro'yxat qilib bering."</i></p>
                  <p><strong>Natijasi:</strong> Darhol amalda qo'llash mumkin bo'lgan aniq strategiya.</p>
                </div>
              </div>
            `,
            en: `
              <h3>Comparative Prompt Case Studies</h3>
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">❌ Weak Prompt</div>
                  <p><i>"Write a business plan."</i></p>
                  <p>Vague, devoid of industry parameters, capital constraints, or geo-context.</p>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">✅ Engineered Prompt</div>
                  <p><i>"Act as a small business strategist. Develop a 90-day launch roadmap for a local computer literacy training workshop targeting adults aged 35-55. Focus on zero-cost organic marketing methods and schedule weekly milestones."</i></p>
                  <p>Actionable, targeted, and immediately applicable.</p>
                </div>
              </div>
            `,
            ru: `
              <h3>Сравнение запросов на практике</h3>
              <div class="comparison-grid">
                <div class="comparison-card bad">
                  <div class="comparison-badge">❌ Слабый промпт</div>
                  <p><i>"Напиши бизнес-план."</i></p>
                  <p>Результат: абстрактная теория ни о чем.</p>
                </div>
                <div class="comparison-card good">
                  <div class="comparison-badge">✅ Профессиональный промпт</div>
                  <p><i>"Вы — консультант по развитию малого бизнеса. Составьте 3-месячный план запуска курсов компьютерной грамотности для взрослых от 35 до 55 лет. Включите бесплатные каналы привлечения клиентов и понедельную разбивку задач."</i></p>
                  <p>Результат: готовое практическое руководство к действию.</p>
                </div>
              </div>
            `
          }
        },
        {
          id: "prompt-image",
          title: {
            uz: "Tasvir yaratish promptlari (Image Prompts)",
            en: "Image Generation Prompts",
            ru: "Промпты для генерации изображений"
          },
          summary: {
            uz: "Midjourney, DALL-E uchun tasvir ko'rsatmalari: yorug'lik, uslub, kamera va kompozitsiya.",
            en: "Directing image generators: lighting schemes, artistic media, camera lenses, and aspect ratios.",
            ru: "Составление промптов для генерации картинок: освещение, стиль, ракурс и композиция."
          },
          content: {
            uz: `
              <h3>Rasm yaratuvchi AI uchun prompt yozish qoidalari</h3>
              <p>Tasvir yaratishda grammatik jumlalar emas, balki aniq sifatlar va vizual tavsiflar muhim rol o'ynaydi:</p>
              <ul>
                <li><strong>Ob'ekt (Subject):</strong> Kim yoki nima tasvirlangan? (masalan: keksa o'qituvchi, futuristik noutbuk).</li>
                <li><strong>Uslub (Style):</strong> Fotorealizm (Photorealistic 8k), 3D render, minimalist vektor, akvarel.</li>
                <li><strong>Yorug'lik (Lighting):</strong> Quyosh botishi (Golden hour), kinematik yorug'lik (Cinematic lighting), neon chiroqlar.</li>
                <li><strong>Kamera va burchak (Camera & Angle):</strong> Close-up portret, 50mm linza, dron ko'rinishi (Aerial view).</li>
              </ul>

              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>RASM PROMPTI MISOLI</span>
                  <button class="copy-prompt-btn" data-copy="A modern minimalist educational classroom with a teacher explaining computer components on a holographic screen, cozy warm ambient lighting, highly detailed, photorealistic 8k, shot on 35mm lens, depth of field --ar 16:9">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">A modern minimalist educational classroom with a teacher explaining computer components on a holographic screen, cozy warm ambient lighting, highly detailed, photorealistic 8k, shot on 35mm lens, depth of field --ar 16:9</div>
              </div>
            `,
            en: `
              <h3>Anatomy of an Image Prompt</h3>
              <p>Visual prompts rely on descriptive aesthetic tokens: subject, media genre, lighting temperature, and camera lenses.</p>
              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>IMAGE PROMPT TEMPLATE</span>
                  <button class="copy-prompt-btn" data-copy="A sleek modern study desk with an ergonomic mechanical keyboard, glowing monitor showing programming code, soft warm desk lamp, rainy window background, cinematic lighting, 8k resolution, photorealistic, 50mm lens --ar 16:9">Copy Prompt</button>
                </div>
                <div class="prompt-box-content">A sleek modern study desk with an ergonomic mechanical keyboard, glowing monitor showing programming code, soft warm desk lamp, rainy window background, cinematic lighting, 8k resolution, photorealistic, 50mm lens --ar 16:9</div>
              </div>
            `,
            ru: `
              <h3>Формула промпта для генерации изображений</h3>
              <p>Описывайте главный объект, художественный стиль, освещение (кинематографичное, закатное) и ракурс камеры.</p>
              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>ПРОМПТ ДЛЯ КАРТИНКИ</span>
                  <button class="copy-prompt-btn" data-copy="A cozy modern educational workspace with a laptop open, clean wooden desk, plant, soft natural morning sunlight through window, photorealistic 8k, clean depth of field --ar 16:9">Копировать</button>
                </div>
                <div class="prompt-box-content">A cozy modern educational workspace with a laptop open, clean wooden desk, plant, soft natural morning sunlight through window, photorealistic 8k, clean depth of field --ar 16:9</div>
              </div>
            `
          }
        },
        {
          id: "prompt-video",
          title: {
            uz: "Video yaratish promptlari (Video Prompts)",
            en: "Video Generation Prompts",
            ru: "Промпты для создания видео"
          },
          summary: {
            uz: "AI video vositalari uchun harakat, kamera dinamikasi va sahna o'tishlarini yozish.",
            en: "Directing generative video: camera motion, subject kinetics, and temporal transitions.",
            ru: "Промпты для видеонейросетей: движение камеры, динамика персонажей и смена ракурсов."
          },
          content: {
            uz: `
              <h3>Video promptlarining o'ziga xosligi</h3>
              <p>Video promptlarida statik rasm emas, balki <strong>vaqt bo'ylab harakat</strong> tavsiflanadi:</p>
              <ul>
                <li><strong>Kamera harakati:</strong> Sekin oldinga yaqinlashish (Slow zoom in), atrofida aylanish (Orbit shot), chapdan o'ngga surilish (Pan left to right).</li>
                <li><strong>Harakat tezligi:</strong> Sekin harakat (Slow motion, 60fps), tabiiy ritm.</li>
                <li><strong>Muhit o'zgarishi:</strong> Tutun ko'tarilishi, shamolda barglarning tebranishi, yorug'lik o'zgarishi.</li>
              </ul>

              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>VIDEO PROMPT MISOLI</span>
                  <button class="copy-prompt-btn" data-copy="Cinematic slow-motion shot: hands typing smoothly on an illuminated mechanical keyboard, camera slowly pans from left to right, shallow depth of field, neon blue and indigo ambient glow, 4k 60fps feel.">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">Cinematic slow-motion shot: hands typing smoothly on an illuminated mechanical keyboard, camera slowly pans from left to right, shallow depth of field, neon blue and indigo ambient glow, 4k 60fps feel.</div>
              </div>
            `,
            en: `
              <h3>Directing Generative Video</h3>
              <p>Video prompting necessitates kinetic descriptors: camera maneuvers (pan, dolly, pedestal, orbit) and continuous environmental motion.</p>
            `,
            ru: `
              <h3>Особенности видеопромптов</h3>
              <p>В видео главное — динамика: траектория камеры (плавный наезд, панорама) и движение самого объекта во времени.</p>
            `
          }
        },
        {
          id: "prompt-website",
          title: {
            uz: "Veb-sayt yaratish promptlari",
            en: "Website & UI Prompts",
            ru: "Промпты для создания сайтов и UI"
          },
          summary: {
            uz: "Zamonaviy saytlar, sahifalar va interfeyslarni AI orqali to'g'ri so'rash usullari.",
            en: "Prompting front-end designs, component hierarchies, responsive layouts, and clean CSS.",
            ru: "Создание интерфейсов сайтов: адаптивная верстка, компоненты и чистый код через промпты."
          },
          content: {
            uz: `
              <h3>AI dan sayt kodini so'rash qoidalari</h3>
              <p>Veb-dasturlashda eng toza natijaga erishish uchun texnologiyalar va struktura oldindan aniqlashtirilishi kerak:</p>
              <ul>
                <li>Texnologiyalar to'plamini aniq ayting: masalan, <i>"Faqat semantik HTML5, CSS va Vanilla JavaScript ishlat"</i>.</li>
                <li>Ranglar palitrasi va mavzuni belgilang: masalan, <i>"Qorong'i va yorug' rejim, indigo va oq ranglar"</i>.</li>
                <li>Moslashuvchanlikni talab qiling: <i>"Mobil telefonlarda to'liq qulay ko'rinsin"</i>.</li>
              </ul>

              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>SAYT PROMPTI MISOLI</span>
                  <button class="copy-prompt-btn" data-copy="Faqat HTML, CSS va Vanilla JavaScript yordamida zamonaviy 'Shaxsiy Portfolio' saytini yarat. Sahifada: Yopishqoq navbar, qisqa tanishtiruv (Hero), 4 ta loyihani ko'rsatuvchi kartochkalar va xabar qoldirish formasi bo'lsin. Zamonaviy toza shriftdan foydalan, qorong'i rejimni qo'llab-quvvatlasin. Barcha kod bitta faylga joylashtirilsin.">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">Faqat HTML, CSS va Vanilla JavaScript yordamida zamonaviy 'Shaxsiy Portfolio' saytini yarat. Sahifada: Yopishqoq navbar, qisqa tanishtiruv (Hero), 4 ta loyihani ko'rsatuvchi kartochkalar va xabar qoldirish formasi bo'lsin. Zamonaviy toza shriftdan foydalan, qorong'i rejimni qo'llab-quvvatlasin. Barcha kod bitta faylga joylashtirilsin.</div>
              </div>
            `,
            en: `
              <h3>Prompting Web Layouts and Interfaces</h3>
              <p>Demand precise tech stacks, CSS variable tokens, accessible semantics, and responsive breakpoints.</p>
            `,
            ru: `
              <h3>Запросы для верстки сайтов</h3>
              <p>Указывайте точный стек (HTML/CSS/JS), цветовую палитру, адаптивность для мобильных и структуру блоков.</p>
            `
          }
        },
        {
          id: "prompt-coding",
          title: {
            uz: "Dasturlash va kod yozish promptlari",
            en: "Coding and Debugging Prompts",
            ru: "Промпты для программирования и отладки"
          },
          summary: {
            uz: "Xatolarni topish (Debug), kodni optimallashtirish va toza arxitektura buyruqlari.",
            en: "Bug isolation, code refactoring, test-suite generation, and architectural design.",
            ru: "Поиск багов, рефакторинг кода, написание тестов и архитектура программ."
          },
          content: {
            uz: `
              <h3>Dasturlashda AI bilan ishlash usullari</h3>
              <p>Dasturlashda eng ko'p foyda beruvchi 3 ta yo'nalish:</p>
              <ul>
                <li><strong>Xatoni tuzatish (Bug fixing):</strong> Xato matnini va kodingizni to'liq joylang va nima kutilganini tushuntiring.</li>
                <li><strong>Refaktoring:</strong> Ishlayotgan kodni yanada tez, toza va tushunarli qilishni so'rang.</li>
                <li><strong>Izohlash va hujjatlashtirish:</strong> Murakkab kod qismlariga satrma-satr izoh yozdiring.</li>
              </ul>

              <div class="prompt-box">
                <div class="prompt-box-header">
                  <span>DEBUGGING PROMPTI</span>
                  <button class="copy-prompt-btn" data-copy="Siz katta TypeScript dasturchisisiz. Quyidagi kodda 'Uncaught TypeError' xatosi yuz beryapti. 1) Xatoning asl sababini tushuntiring. 2) Tuzatilgan to'liq kodni taqdim eting. 3) Kelgusida bunday xatolarning oldini olish uchun qanday qoida qo'llash kerakligini 2 ta gapda yozing. [KODINGIZNI SHU YERGA QO'YING]">Nusxa olish</button>
                </div>
                <div class="prompt-box-content">Siz katta TypeScript dasturchisisiz. Quyidagi kodda 'Uncaught TypeError' xatosi yuz beryapti. 1) Xatoning asl sababini tushuntiring. 2) Tuzatilgan to'liq kodni taqdim eting. 3) Kelgusida bunday xatolarning oldini olish uchun qanday qoida qo'llash kerakligini 2 ta gapda yozing. [KODINGIZNI SHU YERGA QO'YING]</div>
              </div>
            `,
            en: `
              <h3>Coding & Debugging Directives</h3>
              <p>Supply the full stacktrace, snippet, runtime environment, and expected versus actual behavior.</p>
            `,
            ru: `
              <h3>Промпты для написания и исправления кода</h3>
              <p>Прикрепляйте текст ошибки, используемый язык и требуйте: объяснение причины бага, исправленный код и рекомендации.</p>
            `
          }
        },
        {
          id: "prompt-aistudio",
          title: {
            uz: "Google AI Studio promptlari",
            en: "Google AI Studio Prompts",
            ru: "Промпты для Google AI Studio"
          },
          summary: {
            uz: "System instructions (tizimli ko'rsatmalar), Few-shot misollar va harorat (Temperature).",
            en: "System instructions, few-shot conditioning, and temperature hyperparameter tuning.",
            ru: "Системные инструкции (System Instructions), Few-shot примеры и параметр Temperature."
          },
          content: {
            uz: `
              <h3>Google AI Studio imkoniyatlari</h3>
              <p>Google AI Studio — eng kuchli Gemini modellarini bevosita sinash va sozlash uchun mo'ljallangan platformadir:</p>
              <ul>
                <li><strong>System Instructions:</strong> Modelga asosiy fe'l-atvor va doimiy qoidalarni belgilovchi boshlang'ich yo'riqnoma.</li>
                <li><strong>Few-shot prompting:</strong> Modelga topshiriq berishdan oldin 2-3 ta savol va to'g'ri javob namunalarini kiritish orqali uning aniqligini keskin oshirish.</li>
                <li><strong>Harorat (Temperature):</strong> 0 ga yaqin bo'lsa javob juda aniq, mantiqiy va takrorlanuvchan bo'ladi; 1 ga yaqin bo'lsa ko'proq ijodiy va xilma-xil bo'ladi.</li>
              </ul>
            `,
            en: `
              <h3>Maximizing Google AI Studio</h3>
              <p>Utilize System Instructions to establish persistent behavioral anchors, Few-Shot examples for exemplar learning, and Temperature tuning for deterministic outputs.</p>
            `,
            ru: `
              <h3>Работа с Google AI Studio</h3>
              <p>Используйте System Instructions для задания постоянных правил поведения модели, Few-shot примеры для демонстрации идеального формата и настройку Temperature.</p>
            `
          }
        },
        {
          id: "prompt-improve",
          title: {
            uz: "Promptlarni takomillashtirish (Iteratsiya)",
            en: "Iterative Prompt Improvement",
            ru: "Улучшение промптов (Итерации)"
          },
          summary: {
            uz: "Birinchi urinishdanoq to'xtamaslik: bosqichma-bosqich tuzatish va feedback berish.",
            en: "Iterative refinement: conversational follow-ups, clarifying criteria, and continuous polishing.",
            ru: "Итеративная доработка: как шаг за шагом направлять модель к безупречному результату."
          },
          content: {
            uz: `
              <h3>Prompt yozish — bu muloqot va iteratsiya jarayoni</h3>
              <p>Agar AI bergan birinchi javob sizni to'liq qanoatlantirmasa, yangidan boshlash shart emas. Unga aniq tuzatish bering:</p>
              <ul>
                <li><i>"Juda yaxshi, lekin 2-bo'limni yanada soddaroq qilib qayta yoz."</i></li>
                <li><i>"Ushbu javobdan 3 ta eng muhim tavsiyani jadval shakliga keltirib ber."</i></li>
                <li><i>"Matndagi takrorlanuvchi so'zlarni olib tashla va hajmini 30% ga qisqartir."</i></li>
              </ul>
              <div class="lesson-callout tip">
                <div class="lesson-callout-title">🏆 Elyor Teacher maslahati:</div>
                <p>Eng zo'r prompt ustalari hech qachon bitta so'rov bilan cheklanmaydi. AI bilan suhbatlashish — bu o'z fikringizni aniqlashtirish va sayqallash jarayonidir!</p>
              </div>
            `,
            en: `
              <h3>The Art of Iterative Prompt Refinement</h3>
              <p>Never discard initial generations prematurely; steer the model iteratively with concise delta adjustments.</p>
            `,
            ru: `
              <h3>Итеративная шлифовка промптов</h3>
              <p>Не начинайте чат заново при первой шероховатости. Допишите: «Сократи на 30%», «Сделай 2-й пункт конкретнее», «Оформи вывод в таблицу».</p>
            `
          }
        }
      ]
    }
  ],

  // Interactive Quizzes Database
  quizzes: {
    computer: [
      {
        question: {
          uz: "Kompyuterning 'miyasi' deb qaysi qurilmaga aytiladi?",
          en: "Which hardware component is considered the 'brain' of the computer?",
          ru: "Какой компонент называют «мозгом» компьютера?"
        },
        options: [
          {
            text: { uz: "Monitor", en: "Monitor", ru: "Монитор" },
            correct: false
          },
          {
            text: { uz: "CPU (Markaziy protsessor)", en: "CPU (Central Processing Unit)", ru: "CPU (Центральный процессор)" },
            correct: true
          },
          {
            text: { uz: "Klaviatura", en: "Keyboard", ru: "Клавиатура" },
            correct: false
          },
          {
            text: { uz: "Sichqoncha", en: "Mouse", ru: "Мышь" },
            correct: false
          }
        ],
        explanation: {
          uz: "CPU barcha hisoblash va boshqaruv amallarini bajaradi, shuning uchun u kompyuterning miyasi hisoblanadi.",
          en: "The CPU performs all fundamental calculation and operational logic, serving as the central brain.",
          ru: "Процессор (CPU) производит все вычисления и управляет процессами компьютера."
        }
      },
      {
        question: {
          uz: "Kompyuter o'chirilganda qaysi xotiradagi barcha ma'lumotlar to'liq o'chib ketadi?",
          en: "Which memory loses all its contents when the computer powers down?",
          ru: "Какая память полностью очищается при выключении компьютера?"
        },
        options: [
          {
            text: { uz: "SSD drayveri", en: "SSD storage", ru: "SSD накопитель" },
            correct: false
          },
          {
            text: { uz: "RAM (Operativ xotira)", en: "RAM (Random Access Memory)", ru: "Оперативная память (RAM)" },
            correct: true
          },
          {
            text: { uz: "HDD qattiq disk", en: "Hard disk drive", ru: "HDD жесткий диск" },
            correct: false
          },
          {
            text: { uz: "USB fleshka", en: "USB Flash drive", ru: "Флешка USB" },
            correct: false
          }
        ],
        explanation: {
          uz: "RAM vaqtinchalik (uchuvchan) xotira bo'lib, elektr quvvatisiz ma'lumotni saqlab tura olmaydi.",
          en: "RAM is volatile memory and requires continuous power to preserve state.",
          ru: "Оперативная память энергозависима и стирается без постоянного питания."
        }
      },
      {
        question: {
          uz: "Matn yoki fayldan nusxa olish (Copy) uchun qaysi tezkor tugmalar birikmasi bosiladi?",
          en: "Which standard shortcut combination copies selected text or files?",
          ru: "Какая комбинация клавиш копирует выделенный фрагмент или файл?"
        },
        options: [
          {
            text: { uz: "Ctrl + V", en: "Ctrl + V", ru: "Ctrl + V" },
            correct: false
          },
          {
            text: { uz: "Ctrl + Z", en: "Ctrl + Z", ru: "Ctrl + Z" },
            correct: false
          },
          {
            text: { uz: "Ctrl + C", en: "Ctrl + C", ru: "Ctrl + C" },
            correct: true
          },
          {
            text: { uz: "Alt + F4", en: "Alt + F4", ru: "Alt + F4" },
            correct: false
          }
        ],
        explanation: {
          uz: "Ctrl + C nusxa oladi, Ctrl + V esa uni kerakli joyga qo'yadi (Paste).",
          en: "Ctrl + C copies to clipboard, while Ctrl + V pastes it.",
          ru: "Ctrl + C копирует в буфер обмена, а Ctrl + V вставляет."
        }
      },
      {
        question: {
          uz: "Quyidagilardan qaysi biri mustahkam va xavfsiz parol namunasidir?",
          en: "Which of the following represents a strong, secure password?",
          ru: "Какой из паролей является надежным и безопасным?"
        },
        options: [
          {
            text: { uz: "12345678", en: "12345678", ru: "12345678" },
            correct: false
          },
          {
            text: { uz: "parol2024", en: "password2024", ru: "parol2024" },
            correct: false
          },
          {
            text: { uz: "K8#mP!9xL@2w", en: "K8#mP!9xL@2w", ru: "K8#mP!9xL@2w" },
            correct: true
          },
          {
            text: { uz: "ismingiz", en: "yourname", ru: "вашеимя" },
            correct: false
          }
        ],
        explanation: {
          uz: "Kuchli parol katta va kichik harflar, raqamlar va maxsus belgilardan iborat bo'lib, kamida 12 belgidan tashkil topadi.",
          en: "Strong passwords combine upper/lowercase letters, numerals, and punctuation symbols.",
          ru: "Надежный пароль содержит от 12 символов, цифры, заглавные буквы и спецсимволы."
        }
      },
      {
        question: {
          uz: "Qotib qolgan dasturni majburiy yopish uchun qaysi vosita ishlatiladi?",
          en: "Which Windows utility is used to force-close an unresponsive frozen application?",
          ru: "Какая утилита Windows позволяет принудительно закрыть зависшую программу?"
        },
        options: [
          {
            text: { uz: "Task Manager (Vazifalar boshqaruvchisi)", en: "Task Manager", ru: "Диспетчер задач (Task Manager)" },
            correct: true
          },
          {
            text: { uz: "Kalkulyator", en: "Calculator", ru: "Калькулятор" },
            correct: false
          },
          {
            text: { uz: "Bloknot", en: "Notepad", ru: "Блокнот" },
            correct: false
          },
          {
            text: { uz: "Savat (Recycle Bin)", en: "Recycle Bin", ru: "Корзина" },
            correct: false
          }
        ],
        explanation: {
          uz: "Ctrl + Shift + Esc bosilganda Task Manager ochiladi va u orqali qotgan dasturni 'End Task' qilish mumkin.",
          en: "Task Manager allows manual process termination of unresponsive programs.",
          ru: "Диспетчер задач позволяет принудительно завершить зависший процесс."
        }
      }
    ],

    prompt: [
      {
        question: {
          uz: "Prompt nima?",
          en: "What is a prompt?",
          ru: "Что такое промпт?"
        },
        options: [
          {
            text: { uz: "Kompyuterning apparat qismi", en: "A computer hardware chip", ru: "Аппаратная деталь компьютера" },
            correct: false
          },
          {
            text: { uz: "AI ga natija olish uchun beriladigan matnli buyruq yoki ko'rsatma", en: "A textual instruction supplied to an AI to generate results", ru: "Текстовая инструкция для ИИ для получения результата" },
            correct: true
          },
          {
            text: { uz: "Brauzerning yangi varag'i", en: "A new browser tab", ru: "Новая вкладка браузера" },
            correct: false
          },
          {
            text: { uz: "Internet kabeli turi", en: "A type of network cable", ru: "Тип сетевого кабеля" },
            correct: false
          }
        ],
        explanation: {
          uz: "Prompt — sun'iy intellekt modeli bilan muloqot qilish va vazifani tushuntirish vositasidir.",
          en: "A prompt is the human-to-AI instruction interface specifying tasks and requirements.",
          ru: "Промпт — это текстовое задание, передаваемое искусственному интеллекту."
        }
      },
      {
        question: {
          uz: "Professional promptning 5 ta asosiy tarkibiy qismi qaysilar?",
          en: "What are the 5 core pillars of a structured prompt?",
          ru: "Назовите 5 ключевых элементов структуры качественного промпта:"
        },
        options: [
          {
            text: { uz: "Monitor, Klaviatura, Sichqoncha, CPU, RAM", en: "Monitor, Keyboard, Mouse, CPU, RAM", ru: "Монитор, Клавиатура, Мышь, CPU, RAM" },
            correct: false
          },
          {
            text: { uz: "Rol, Vazifa, Kontekst, Cheklovlar, Chiqish formati", en: "Role, Task, Context, Constraints, Output Format", ru: "Роль, Задача, Контекст, Ограничения, Формат" },
            correct: true
          },
          {
            text: { uz: "Salomlashish, Ism, Parol, Login, Xayrlashish", en: "Greeting, Name, Password, Login, Farewell", ru: "Приветствие, Имя, Пароль, Логин, Прощание" },
            correct: false
          },
          {
            text: { uz: "Windows, Chrome, Word, Excel, PowerPoint", en: "Windows, Chrome, Word, Excel, PowerPoint", ru: "Windows, Chrome, Word, Excel, PowerPoint" },
            correct: false
          }
        ],
        explanation: {
          uz: "Ushbu 5 ta ustun modelga mutaxassis sifatida qat'iy va aniq natija berishiga yordam beradi.",
          en: "These 5 components establish clear behavioral scope and structural boundaries.",
          ru: "Эта связка дает модели исчерпывающую информацию для точной генерации."
        }
      },
      {
        question: {
          uz: "Nima uchun promptda AI ga 'Rol' (masalan: 'Siz 10 yillik tajribali mutaxassissiz') berish foydali?",
          en: "Why is specifying a 'Role' valuable in prompt engineering?",
          ru: "Почему полезно задавать ИИ роль эксперта?"
        },
        options: [
          {
            text: { uz: "Model tezroq o'chib qolishi uchun", en: "To make the model shut down faster", ru: "Чтобы модель быстрее выключилась" },
            correct: false
          },
          {
            text: { uz: "Model o'sha soha mutaxassisining lug'ati va chuqur tushunchalaridan foydalanishi uchun", en: "To prime the model to use expert domain vocabulary and nuanced thinking", ru: "Чтобы модель использовала профессиональный лексикон и глубокие знания сферы" },
            correct: true
          },
          {
            text: { uz: "Internet tezligini oshirish uchun", en: "To increase internet bandwidth", ru: "Чтобы увеличить скорость интернета" },
            correct: false
          },
          {
            text: { uz: "Buning hech qanday foydasi yo'q", en: "It provides no measurable value", ru: "В этом нет никакой пользы" },
            correct: false
          }
        ],
        explanation: {
          uz: "Rol belgilanganda model umumiy yuzaki javoblardan qochib, aniq sohaviy tilda javob beradi.",
          en: "Role conditioning primes domain-specific vocabulary and perspective.",
          ru: "Задание роли отсекает шаблонные ответы и фокусирует модель на экспертном уровне."
        }
      },
      {
        question: {
          uz: "Qaysi so'rov yaxshi prompt namunasiga misol bo'la oladi?",
          en: "Which of the following is an example of an effective, well-engineered prompt?",
          ru: "Какой из запросов является примером качественного промпта?"
        },
        options: [
          {
            text: { uz: "Menga nimadir yozib ber.", en: "Write me something.", ru: "Напиши мне что-нибудь." },
            correct: false
          },
          {
            text: { uz: "Kompyuter haqida gapir.", en: "Talk about computers.", ru: "Расскажи про компьютеры." },
            correct: false
          },
          {
            text: { uz: "Siz IT murabbiysisiz. Yangi boshlovchiga CPU va RAM farqini 150 so'zda, oddiy taqqoslash jadvali orqali tushuntiring.", en: "Act as an IT coach. Explain the difference between CPU and RAM to a beginner under 150 words using a clean comparison table.", ru: "Вы IT-наставник. Объясните новичку разницу между CPU и RAM до 150 слов с помощью наглядной таблицы." },
            correct: true
          },
          {
            text: { uz: "Salom AI.", en: "Hello AI.", ru: "Привет ИИ." },
            correct: false
          }
        ],
        explanation: {
          uz: "Unda rol (IT murabbiy), vazifa (tushuntirish), auditoriya (boshlovchi), hajm (150 so'z) va format (jadval) mavjud.",
          en: "It contains role, clear task, target audience, word count constraints, and format specifications.",
          ru: "Здесь четко заданы роль, задача, аудитория, ограничение по объему и формат таблицы."
        }
      },
      {
        question: {
          uz: "AI bergan dastlabki javob to'liq yoqmasa nima qilish tavsiya etiladi?",
          en: "What should you do if an AI model's initial response doesn't fully satisfy your needs?",
          ru: "Что рекомендуется делать, если первый ответ ИИ не совсем вас устроил?"
        },
        options: [
          {
            text: { uz: "Kompyuterni o'chirib qo'yish", en: "Turn off the computer", ru: "Выключить компьютер" },
            correct: false
          },
          {
            text: { uz: "Iteratsiya qilish: aniq tuzatishlar va qisqartirishlar berib muloqotni davom ettirish", en: "Iterate: provide specific delta corrections and continue the conversational refinement", ru: "Итерировать: указать конкретные исправления и продолжить диалог" },
            correct: true
          },
          {
            text: { uz: "Hech narsa qilmaslik", en: "Do nothing", ru: "Ничего не делать" },
            correct: false
          },
          {
            text: { uz: "Barcha fayllarni o'chirish", en: "Delete all local files", ru: "Удалить все файлы" },
            correct: false
          }
        ],
        explanation: {
          uz: "Prompt yozish — bu takomillashtirish jarayoni. Modelga aniq qaysi qismini o'zgartirish kerakligini aytib, mukammal natijaga erishiladi.",
          en: "Prompt engineering is iterative; conversational guidance polishes the output.",
          ru: "Промптинг — итеративный процесс: уточняйте детали, сокращайте и направляйте модель."
        }
      }
    ]
  }
};
