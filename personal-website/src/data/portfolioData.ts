export type Lang = 'en' | 'pl' | 'ru';
export type I18nString = Record<Lang, string>;

export interface Project {
  id: string;
  title: I18nString;
  shortDescription: I18nString;
  longDescription: I18nString;
  previewTags: string[];
  allTags: string[];
  link: string;
  gif?: string; // Optional property for project GIF preview
}

export interface Experience {
  role: I18nString;
  company: string;
  period: string;
  description: I18nString;
}

export interface Education {
  degree: I18nString;
  institution: I18nString;
  description: I18nString;
}

export interface SkillGroup {
  category: I18nString;
  items: string[];
}

export const uiStrings = {
  subtitle: {
    en: "Software Engineer & Junior Project Manager",
    pl: "Inżynier Oprogramowania i Młodszy Kierownik Projektu",
    ru: "Инженер-программист и Младший руководитель проектов"
  },
  tabProfile: { en: "Profile & Experience", pl: "Profil i Doświadczenie", ru: "Профиль и Опыт" },
  tabProjects: { en: "My Projects", pl: "Moje Projekty", ru: "Мои Проекты" },
  aboutMe: { en: "About Me", pl: "O mnie", ru: "Обо мне" },
  aboutDesc: {
    en: "Software Engineer with a strong foundation in full-stack development, object-oriented programming, and event-driven architectures. Experienced in building scalable Single Page Applications using React and TypeScript, alongside robust backend services in C# and Java.",
    pl: "Inżynier oprogramowania z solidnym doświadczeniem w tworzeniu aplikacji full-stack, programowaniu obiektowym i architekturach opartych na zdarzeniach. Doświadczony w budowaniu skalowalnych aplikacji typu Single Page przy użyciu React i TypeScript oraz solidnych usług backendowych w C# i Java.",
    ru: "Инженер-программист с прочным фундаментом в full-stack разработке, объектно-ориентированном программировании и архитектурах на базе событий. Имеет опыт создания масштабируемых одностраничных приложений (SPA) с использованием React и TypeScript, а также надежных бэкенд-сервисов на C# и Java."
  },
  skillsTitle: { en: "Skills & Expertise", pl: "Umiejętności i Ekspertyza", ru: "Навыки и Экспертиза" },
  experienceTitle: { en: "Experience", pl: "Doświadczenie", ru: "Опыт работы" },
  educationTitle: { en: "Education", pl: "Wykształcenie", ru: "Образование" },
  viewGithub: { en: "View on GitHub", pl: "Zobacz na GitHub", ru: "Посмотреть на GitHub" },
  noResults: { en: "No projects found for this skill.", pl: "Nie znaleziono projektów dla tej umiejętności.", ru: "Проекты для этого навыка не найдены." },
  more: { en: "more", pl: "więcej", ru: "еще" },
  filterAll: { en: "Show All", pl: "Pokaż Wszystko", ru: "Показать Все" }
};

export const skillsData: SkillGroup[] = [
  {
    category: { en: "Programming Languages", pl: "Języki Programowania", ru: "Языки программирования" },
    items: ["C#", "C++", "Java", "JavaScript", "TypeScript", "Python", "PowerShell"]
  },
  {
    category: { en: "Frameworks & Services", pl: "Frameworki i Usługi", ru: "Фреймворки и Сервисы" },
    items: ["React.js", "Angular", "ASP.NET", ".NET Core", "Flask", "Azure", "Kafka", "Kubernetes", "Docker", "Firebase", "Unreal Engine 5"]
  },
  {
    category: { en: "Tools & Architecture", pl: "Narzędzia i Architektura", ru: "Инструменты и Архитектура" },
    items: ["Git & GitHub", "CI / CD", "SQL Server", "Snowflake", "SQLite", "MySQL", "RESTful APIs", "Event-driven Architecture", "OOP", "Cloud Computing"]
  },
  {
    category: { en: "Testing & Quality", pl: "Testowanie i Jakość", ru: "Тестирование и Качество" },
    items: ["Jest", "Cypress", "Jasmine", "Technical Documentation"]
  },
  {
    category: { en: "Core Competencies", pl: "Kluczowe Kompetencje", ru: "Ключевые компетенции" },
    items: ["Agile & Kanban", "Full-stack Development", "Software Architecture", "API & Database Design", "Data Workflow Automation", "Process Optimization & SOP", "Mentoring", "Jira & Confluence"]
  },
  {
    category: { en: "Spoken Languages", pl: "Języki", ru: "Владение языками" },
    items: ["English", "Polish", "Belarusian", "Russian"]
  }
];

export const experienceData: Experience[] = [
  {
    role: { en: "Service & Operations Specialist", pl: "Specjalista ds. Operacyjnych i Obsługi Klienta", ru: "Специалист по операциям и обслуживанию клиентов" },
    company: "AmRest (KFC)",
    period: "2024 - 2026",
    description: {
      en: "Ensuring operational excellence according to corporate procedures in a high-pressure environment. Responsible for effective team collaboration, quick decision-making, and maintaining strong organizational skills.",
      pl: "Zapewnianie doskonałości operacyjnej zgodnie z procedurami korporacyjnymi w dynamicznym środowisku. Odpowiedzialny za efektywną współpracę zespołową, szybkie podejmowanie decyzji oraz utrzymywanie wysokich umiejętności organizacyjnych.",
      ru: "Обеспечение операционного совершенства в соответствии с корпоративными процедурами в условиях высокого давления. Ответственность за эффективное командное взаимодействие, быстрое принятие решений и поддержание сильных организационных навыков."
    }
  },
  {
    role: { en: "Digital Operations Intern", pl: "Digital Operations Intern", ru: "Стажер по цифровым операциям" },
    company: "Immogee Sp. z o.o.",
    period: "2024",
    description: {
      en: "Managed digital content for 3U10 Investment Art Gallery while developing scripts to automate data collection and storage, streamlining reporting processes.",
      pl: "Zarządzanie treścią cyfrową dla Galerii Sztuki Inwestycyjnej 3U10 przy jednoczesnym tworzeniu skryptów do automatyzacji zbierania i przechowywania danych, co usprawniło procesy raportowania.",
      ru: "Управление цифровым контентом для Инвестиционной художественной галереи 3U10 с одновременной разработкой скриптов для автоматизации сбора и хранения данных, что оптимизировало процессы отчетности."
    }
  },
  {
    role: { en: "Intern Software Developer", pl: "Stażysta Software Developer", ru: "Стажер-разработчик ПО" },
    company: "Silesian University of Technology",
    period: "2024",
    description: {
      en: "Developed a specialized web application, focusing on map integration and performance optimization. Worked in a team to test new technologies and refine user interaction.",
      pl: "Tworzenie wyspecjalizowanej aplikacji webowej, koncentrując się na integracji map i optymalizacji wydajności. Praca w zespole nad testowaniem nowych technologii i udoskonalaniem interakcji z użytkownikiem.",
      ru: "Разработка специализированного веб-приложения с упором на интеграцию карт и оптимизацию производительности. Работа в команде над тестированием новых технологий и улучшением взаимодействия с пользователем."
    }
  },
  {
    role: { en: "Intern Website Manager", pl: "Stażysta Website Manager", ru: "Стажер Менеджер Веб-сайта" },
    company: "Secondary School No. 5",
    period: "2018",
    description: {
      en: "Maintained the school website, ensuring up-to-date content and functionality while collaborating with staff to implement requested features.",
      pl: "Utrzymywanie szkolnej strony internetowej, dbanie o aktualność treści i funkcjonalność przy współpracy z kadrą w celu wdrażania nowych funkcji.",
      ru: "Поддержка школьного веб-сайта, обеспечение актуальности контента и функциональности при сотрудничестве с персоналом для внедрения новых функций."
    }
  }
];

export const educationData: Education[] = [
  {
    degree: { en: "M.Sc. in Management", pl: "Magister (Mgr), Zarządzanie", ru: "Магистр менеджмента" },
    institution: { en: "Gdańsk University of Technology", pl: "Politechnika Gdańska", ru: "Гданьский политехнический университет" },
    description: {
      en: "Developing expertise in project management, business process optimization, and team coordination within modern technological environments.",
      pl: "Rozwijanie kompetencji w zakresie zarządzania projektami, optymalizacji procesów biznesowych oraz koordynacji zespołów w nowoczesnych środowiskach.",
      ru: "Развитие компетенций в области управления проектами, оптимизации бизнес-процессов и координации команд в современных технологических средах."
    }
  },
  {
    degree: { en: "B.Eng. in Computer Science", pl: "Inżynier (Inż.), Informatyka", ru: "Бакалавр информатики (Инженер)" },
    institution: { en: "Silesian University of Technology", pl: "Politechnika Śląska", ru: "Силезский политехнический университет" },
    description: {
      en: "Strong foundation in software engineering, interactive digital system design, and developing high-performance, user-centric solutions.",
      pl: "Solidne podstawy inżynierii oprogramowania oraz projektowania interaktywnych i zorientowanych na użytkownika systemów.",
      ru: "Прочный фундамент в области программной инженерии, проектирования интерактивных цифровых систем и разработки высокопроизводительных решений."
    }
  }
];

export const projects: Project[] = [
    {
      id: "mix-auditor",
      title: {
        en: "🚧 [WIP] Who changed my mix? Blockchain + AI",
        pl: "🚧 [WIP] Kto zmienił mój mix? Blockchain + AI",
        ru: "🚧 [WIP] Кто изменил мой микс? Блокчейн + ИИ"
      },
      shortDescription: {
        en: "A dual-module system designed to verify the authenticity of audio files using AI and Blockchain.",
        pl: "Dwumodułowy system zaprojektowany do weryfikacji autentyczności plików dźwiękowych za pomocą AI i Blockchain.",
        ru: "Двухмодульная система для проверки подлинности аудиофайлов с использованием ИИ и блокчейна."
      },
      longDescription: {
        en: "Currently in development as a research project. This distributed system verifies audio authenticity to combat manipulation like deepfakes. It features a Next.js frontend, a Nest.JS API, an asynchronous Redis queue, a Python/PyTorch AI worker for Mel-spectrogram analysis, and a Solidity/Hardhat Blockchain layer for cryptographic hash verification.",
        pl: "Projekt badawczy w fazie rozwoju. Rozproszony system weryfikuje autentyczność dźwięku, zwalczając manipulacje takie jak deepfake. Obejmuje frontend Next.js, API Nest.JS, asynchroniczną kolejkę Redis, moduł AI w Python/PyTorch oraz warstwę Blockchain Solidity.",
        ru: "Исследовательский проект в стадии разработки. Распределенная система проверяет подлинность звука для борьбы с манипуляциями (дипфейками). Включает фронтенд Next.js, API Nest.JS, асинхронную очередь Redis, модуль ИИ на Python/PyTorch и слой блокчейна Solidity."
      },
      previewTags: ["WIP", "PyTorch", "Blockchain", "Next.js"],
      allTags: ["WIP", "React", "TypeScript", "Next.js", "Nest.JS", "PostgreSQL", "Redis", "Python", "PyTorch", "Solidity", "Blockchain", "AI"],
      link: "https://github.com/ArseniMokhau/Who-Changed-My-Mix",
    },
   {
    id: "tracklio",
    title: {
      en: "Tracklio - Real-Time Market & Portfolio Tracker",
      pl: "Tracklio - Śledzenie Rynku i Portfela w Czasie Rzeczywistym",
      ru: "Tracklio - Трекер рынка и портфеля в реальном времени"
    },
    shortDescription: {
      en: "A real-time financial tracking application featuring live data streaming, RxJS, and Spring Boot backend.",
      pl: "Aplikacja finansowa czasu rzeczywistego z przesyłaniem danych na żywo, RxJS i backendem Spring Boot.",
      ru: "Финансовое приложение в реальном времени со стримингом данных, RxJS и бэкендом на Spring Boot."
    },
    longDescription: {
      en: "This project focuses on visual real-time data streaming and interactive financial charts. The frontend is built with React and TypeScript, using Redux to manage portfolio state and RxJS to handle continuous stock price streams. The user interface features interactive candlestick and line charts displaying live price movements and dynamic balance updates. The backend is built with Java and Spring Boot, connected to an Apache Kafka event broker that broadcasts simulated live market updates, stored in SQL Server, containerized with Kubernetes, and targeted for Azure deployment.",
      pl: "Projekt skupia się na wizualnym strumieniowaniu danych w czasie rzeczywistym i interaktywnych wykresach finansowych. Frontend jest zbudowany w React i TypeScript (Redux, RxJS). Backend oparty jest na Java i Spring Boot, zintegrowany z brokerem Apache Kafka i SQL Server, konteneryzowany przy użyciu Kubernetes dla Azure.",
      ru: "Проект сосредоточен на визуальном стриминге данных в реальном времени и интерактивных финансовых графиках. Фронтенд написан на React и TypeScript (Redux, RxJS). Бэкенд построен на Java и Spring Boot, подключен к брокеру Apache Kafka и SQL Server, контейнеризирован с помощью Kubernetes для деплоя на Azure."
    },
    previewTags: ["React", "TypeScript", "Spring Boot", "Kafka"],
    allTags: ["React", "TypeScript", "Redux", "RxJS", "Java", "Spring Boot", "Apache Kafka", "SQL Server", "Kubernetes", "Azure", "Jest", "Cypress"],
    link: "",
    gif: "/gifs/tracklio.gif"
  },
  {
    id: "schedule",
    title: { en: "Interactive Academic Schedule Manager", pl: "Menedżer Harmonogramów Akademickich", ru: "Интерактивный менеджер расписаний" },
    shortDescription: { 
      en: "A full-stack web app enabling real-time academic scheduling and conflict resolution.",
      pl: "Aplikacja full-stack umożliwiająca planowanie zajęć w czasie rzeczywistym z rozwiązywaniem konfliktów.",
      ru: "Full-stack веб-приложение для составления академического расписания в реальном времени с разрешением конфликтов."
    },
    longDescription: { 
      en: "My engineering thesis project. This full-stack web application utilizes React.js and .NET 8 to provide an interactive platform for real-time academic scheduling. It features an intuitive user interface and a custom dynamic conflict resolution engine to optimize resource allocation.",
      pl: "Projekt inżynierski. Ta aplikacja full-stack wykorzystuje React.js i .NET 8 do udostępnienia interaktywnej platformy do planowania akademickiego. Posiada intuicyjny interfejs i autorski silnik do rozwiązywania konfliktów.",
      ru: "Мой дипломный проект. Это full-stack веб-приложение использует React.js и .NET 8 для предоставления интерактивной платформы для составления академического расписания в реальном времени."
    },
    previewTags: ["React.js", ".NET 8", "Full-stack"],
    allTags: ["React.js", ".NET 8", "C#", "Full-stack", "Algorithm Design", "Thesis Project"],
    link: "https://github.com/ArseniMokhau/schedule-management-system",
    gif: "/gifs/sms.gif"
  },
  {
    id: "recipe",
    title: { en: "Recipe Manager", pl: "Menedżer Przepisów", ru: "Менеджер рецептов" },
    shortDescription: {
      en: "A cross-platform mobile application for managing and organizing recipes.",
      pl: "Wieloplatformowa aplikacja mobilna do zarządzania i organizowania przepisów.",
      ru: "Кросс-платформенное мобильное приложение для управления рецептами."
    },
    longDescription: {
      en: "A mobile application written in React Native, designed to help users efficiently manage, organize, and access their personal recipes. Built with cross-platform compatibility in mind to ensure a seamless experience across both Android and iOS devices.",
      pl: "Aplikacja mobilna napisana w React Native, pomagająca użytkownikom efektywnie zarządzać osobistymi przepisami. Zbudowana z myślą o kompatybilności wieloplatformowej (Android i iOS).",
      ru: "Мобильное приложение, написанное на React Native, помогающее пользователям эффективно управлять своими личными рецептами. Создано с учетом кроссплатформенной совместимости (Android и iOS)."
    },
    previewTags: ["React Native", "Mobile Dev"],
    allTags: ["React Native", "JavaScript", "Mobile Development", "iOS", "Android", "UI/UX"],
    link: "https://github.com/ArseniMokhau/RecipeManager/tree/Full",
    gif: "/gifs/recipemanager.gif"
  },
  {
    id: "maphelper",
    title: { en: "Map-Helper Navigation Tool", pl: "Narzędzie Nawigacyjne Map-Helper", ru: "Навигационный инструмент Map-Helper" },
    shortDescription: {
      en: "A web solution integrating the Google Maps API for campus routing via QR codes.",
      pl: "Rozwiązanie webowe integrujące Google Maps API do wyznaczania tras za pomocą kodów QR.",
      ru: "Веб-решение, интегрирующее Google Maps API для маршрутизации по кампусу с помощью QR-кодов."
    },
    longDescription: {
      en: "Developed as a web-based utility to assist with navigation. By integrating the Google Maps API, this React.js application generates optimized routes across campus locations and dynamically creates QR codes, allowing users to easily transfer the routing data to their mobile devices.",
      pl: "Narzędzie webowe pomagające w nawigacji. Poprzez integrację Google Maps API, aplikacja w React.js generuje zoptymalizowane trasy po kampusie i dynamicznie tworzy kody QR.",
      ru: "Веб-утилита для помощи в навигации. Интегрируя API Google Maps, это приложение на React.js генерирует оптимизированные маршруты по кампусу и динамически создает QR-коды."
    },
    previewTags: ["React.js", "Google Maps API"],
    allTags: ["React.js", "Google Maps API", "Web Development", "Performance Optimization", "QR Integration"],
    link: "https://github.com/ArseniMokhau/Map-Helper",
    gif: "/images/maphelper.png"
  },
  {
    id: "mos6502",
    title: { en: "MOS 6502 Processor Emulator", pl: "Emulator Procesora MOS 6502", ru: "Эмулятор процессора MOS 6502" },
    shortDescription: {
      en: "A cross-platform emulation system combining a C# backend with a Kotlin Android frontend.",
      pl: "System emulacji krzyżowej łączący backend C# z frontendem Kotlin na Androida.",
      ru: "Кросс-платформенная система эмуляции, объединяющая бэкенд на C# с фронтендом на Kotlin (Android)."
    },
    longDescription: {
      en: "A comprehensive cross-platform emulation system designed to simulate the classic MOS 6502 architecture. It features a robust C# ASP.NET backend paired with a native Kotlin Android frontend, allowing for accurate execution and monitoring of legacy instructions in a modern environment.",
      pl: "Kompleksowy system emulacji zaprojektowany do symulacji klasycznej architektury MOS 6502. Posiada solidny backend C# ASP.NET w połączeniu z natywnym frontendem Android (Kotlin).",
      ru: "Комплексная кросс-платформенная система эмуляции, предназначенная для имитации классической архитектуры MOS 6502. Имеет надежный бэкенд C# ASP.NET в паре с нативным фронтендом Android на Kotlin."
    },
    previewTags: ["C#", "Kotlin", "Emulator"],
    allTags: ["C#", "ASP.NET", "Kotlin", "Android", "Cross-platform", "System Architecture"],
    link: "https://github.com/ArseniMokhau/RetroKomputer"
  },
  {
    id: "safety",
    title: { en: "Safety Alert Application", pl: "Aplikacja Alarmowa Safety Alert", ru: "Приложение безопасности" },
    shortDescription: {
      en: "An Android security app utilizing device sensors to detect emergency situations.",
      pl: "Aplikacja zabezpieczająca na Androida wykorzystująca czujniki do wykrywania sytuacji awaryjnych.",
      ru: "Android-приложение безопасности, использующее датчики устройства для выявления экстренных ситуаций."
    },
    longDescription: {
      en: "An Android safety application developed in Kotlin. It leverages various native Android services, such as geolocation, the accelerometer, push notifications, and messaging, to actively detect and respond to emergency situations.",
      pl: "Aplikacja bezpieczeństwa na Androida napisana w Kotlin. Wykorzystuje natywne usługi, takie jak geolokalizacja, akcelerometr, powiadomienia push i SMS, aby aktywnie reagować na nagłe wypadki.",
      ru: "Android-приложение безопасности, разработанное на Kotlin. Оно использует различные нативные службы (геолокация, акселерометр, push-уведомления и SMS) для активного реагирования на экстренные ситуации."
    },
    previewTags: ["Kotlin", "Android", "Sensors"],
    allTags: ["Kotlin", "Android", "Geolocation", "Mobile Dev", "Security"],
    link: "https://github.com/Hererra/Project_Android_2024/tree/final-code"
  },
  {
    id: "assignment",
    title: { en: "Student Assignment Manager", pl: "Menedżer Zadań Studenckich", ru: "Менеджер студенческих заданий" },
    shortDescription: {
      en: "A complex web app managing course creation and secure file storage.",
      pl: "Złożona aplikacja webowa zarządzająca tworzeniem kursów i bezpiecznym przechowywaniem plików.",
      ru: "Комплексное веб-приложение для управления созданием курсов и безопасного хранения файлов."
    },
    longDescription: {
      en: "An academic tracking platform designed to organize coursework and monitor deadlines. It combines a C# ASP.NET backend with a React frontend, leveraging an SQLite database to handle course creation, user roles, and secure file uploads and retrieval.",
      pl: "Akademicka platforma zaprojektowana do organizowania zajęć i monitorowania terminów. Łączy backend C# ASP.NET z frontendem React, wykorzystując bazę SQLite do zarządzania kursami.",
      ru: "Академическая платформа для отслеживания успеваемости, организации курсовой работы и мониторинга сроков. Объединяет бэкенд C# ASP.NET с фронтендом React и базой данных SQLite."
    },
    previewTags: ["C#", "React", "SQLite"],
    allTags: ["C#", "ASP.NET", "React", "JavaScript", "SQLite", "Database Design"],
    link: "https://github.com/ArseniMokhau/StudentAssignmentManager"
  },
  {
    id: "translator",
    title: { en: "Translator Azure", pl: "Tłumacz Azure", ru: "Переводчик Azure" },
    shortDescription: {
      en: "A translation app utilizing Azure's Document Intelligence and Translator services.",
      pl: "Aplikacja do tłumaczeń wykorzystująca usługi Azure Document Intelligence i Translator.",
      ru: "Приложение для перевода, использующее сервисы Azure Document Intelligence и Translator."
    },
    longDescription: {
      en: "This application features a Python backend with Flask and a TypeScript frontend. It integrates Azure's Document Intelligence and Translator services to facilitate accurate text translation from various sources, including files, images, and plain text inputs.",
      pl: "Aplikacja składa się z backendu Python (Flask) oraz frontendu TypeScript. Integruje usługi Azure, aby ułatwić precyzyjne tłumaczenie tekstu z plików, obrazów i zwykłego tekstu.",
      ru: "Это приложение включает бэкенд на Python (Flask) и фронтенд на TypeScript. Оно интегрирует сервисы Azure для точного перевода текста из различных источников (файлы, изображения, текст)."
    },
    previewTags: ["Python", "TypeScript", "Azure"],
    allTags: ["Python", "Flask", "TypeScript", "Azure", "API Integration"],
    link: "https://github.com/m60mor/TranslatorAzure"
  },
  {
    id: "metaheuristic",
    title: { en: "Metaheuristic Algorithm Evaluation", pl: "Ocena Algorytmów Metaheurystycznych", ru: "Оценка метаэвристических алгоритмов" },
    shortDescription: {
      en: "A full-stack application for evaluating metaheuristic algorithms.",
      pl: "Aplikacja full-stack do oceny algorytmów metaheurystycznych.",
      ru: "Full-stack приложение для оценки метаэвристических алгоритмов."
    },
    longDescription: {
      en: "Developed collaboratively by a group of students, this project provides a platform for evaluating complex metaheuristic algorithms. It comprises a JavaScript frontend and a robust C# ASP.NET backend.",
      pl: "Stworzony we współpracy ze studentami projekt zapewnia platformę do ewaluacji złożonych algorytmów metaheurystycznych. Składa się z frontendu JavaScript i backendu C# ASP.NET.",
      ru: "Этот проект, разработанный группой студентов, предоставляет платформу для оценки сложных метаэвристических алгоритмов. Состоит из фронтенда на JavaScript и бэкенда на C# ASP.NET."
    },
    previewTags: ["JavaScript", "C#", "ASP.NET"],
    allTags: ["JavaScript", "C#", "ASP.NET", "Algorithm Evaluation", "Team Project"],
    link: "https://github.com/VgHost-26/system-ai"
  },
  {
    id: "quiz",
    title: { en: "Quiz Solver", pl: "Rozwiązywacz Quizów", ru: "Приложение для решения тестов" },
    shortDescription: {
      en: "A C# test solver application built using WPF and the MVVM pattern.",
      pl: "Aplikacja C# do rozwiązywania testów zbudowana w WPF z wykorzystaniem wzorca MVVM.",
      ru: "Приложение для решения тестов на C#, созданное с использованием WPF и паттерна MVVM."
    },
    longDescription: {
      en: "This desktop application is built using WPF and follows the MVVM architectural pattern. It provides a responsive user interface for solving tests and utilizes a SQL database for the efficient management of questions and test results.",
      pl: "Aplikacja desktopowa zbudowana z użyciem WPF, podążająca za wzorcem MVVM. Zapewnia responsywny interfejs do rozwiązywania testów i wykorzystuje bazę SQL do zarządzania pytaniami.",
      ru: "Настольное приложение создано с использованием WPF и следует архитектурному паттерну MVVM. Оно предоставляет адаптивный интерфейс для решения тестов и использует SQL-базу."
    },
    previewTags: ["C#", "WPF", "SQL"],
    allTags: ["C#", "WPF", "MVVM", "SQL", "Desktop App"],
    link: "https://github.com/ArseniMokhau/Solver" 
  },
  {
    id: "scheduler",
    title: { en: "Task Scheduler", pl: "Harmonogram Zadań", ru: "Планировщик задач" },
    shortDescription: {
      en: "An automated scheduling utility focused on process optimization.",
      pl: "Zautomatyzowane narzędzie do harmonogramowania skoncentrowane na optymalizacji procesów.",
      ru: "Автоматизированная утилита планирования, ориентированная на оптимизацию процессов."
    },
    longDescription: {
      en: "An automated scheduling tool created to streamline workflows and track availability. It focuses heavily on process optimization, workflow modeling, and the efficient execution of routine operational tasks.",
      pl: "Zautomatyzowane narzędzie harmonogramowania stworzone w celu usprawnienia przepływów pracy. Koncentruje się na optymalizacji procesów, modelowaniu i wykonywaniu zadań operacyjnych.",
      ru: "Автоматизированный инструмент планирования, созданный для оптимизации рабочих процессов. Основное внимание уделяется оптимизации, моделированию процессов и эффективному выполнению задач."
    },
    previewTags: ["C++", "Automation"],
    allTags: ["C++", "Automation", "Workflow Modeling", "Process Optimization"],
    link: "https://github.com/ArseniMokhau/Task-Scheduler"
  }
];

export const filters = [
  { id: 'all', label: (lang: Lang) => uiStrings.filterAll[lang], match: () => true },
  { id: 'csharp', label: () => 'C# & .NET', match: (tags: string[]) => tags.some(t => t.includes('C#') || t.includes('.NET') || t.includes('ASP.NET') || t.includes('WPF')) },
    { id: 'tsc', label: () => 'TypeScript', match: (tags: string[]) => tags.includes('TypeScript') },
  { id: 'jsc', label: () => 'JavaScript', match: (tags: string[]) => tags.some(t => t.includes('JavaScript') || t.includes('React')) },
  { id: 'react', label: () => 'React', match: (tags: string[]) => tags.some(t => t.includes('React'))},
  { id: 'python', label: () => 'Python', match: (tags: string[]) => tags.some(t => t.includes('Python') || t.includes('Flask')) },
  { id: 'kotlin', label: () => 'Kotlin & Android', match: (tags: string[]) => tags.some(t => t.includes('Kotlin') || t.includes('Android')) },
  { id: 'azure', label: () => 'Azure', match: (tags: string[]) => tags.includes('Azure') }
];