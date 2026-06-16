import './global.css';
import styles from './App.module.css';

type Lang = 'en' | 'pl' | 'ru';
type I18nString = Record<Lang, string>;

let currentLang: Lang = 'en';
let activeFilter = 'all';
let activeTab = 'profile';

const uiStrings = {
  profileName: { en: "Arseni Mokhau", pl: "Arseni Mokhau", ru: "Арсений Мохов" },
  subtitle: {
    en: "Software Engineer & Junior Project Manager | Gdańsk, Poland",
    pl: "Inżynier Oprogramowania i Młodszy Kierownik Projektu | Gdańsk, Polska",
    ru: "Инженер-программист и Младший руководитель проектов | Гданьск, Польша"
  },
  tabProfile: { en: "Profile & Experience", pl: "Profil i Doświadczenie", ru: "Профиль и Опыт" },
  tabProjects: { en: "My Projects", pl: "Moje Projekty", ru: "Мои Проекты" },
  aboutMe: { en: "About Me", pl: "O mnie", ru: "Обо мне" },
  aboutDesc: {
  en: "I am an engineering professional bridging the gap between technology and business goals through structured management, effective team collaboration, and workflow automation. My background includes expertise in full-stack web development, software architecture, and optimizing application performance.",
  pl: "Jestem inżynierem łączącym technologię z celami biznesowymi poprzez ustrukturyzowane zarządzanie, efektywną współpracę w zespole i automatyzację przepływu pracy. Moje doświadczenie obejmuje tworzenie aplikacji full-stack, architekturę oprogramowania oraz optymalizację wydajności aplikacji.",
  ru: "Я инженер, сочетающий технические компетенции с бизнес-целями благодаря системному подходу к управлению, эффективной командной работе и автоматизации процессов. Мой опыт охватывает full-stack разработку, проектирование архитектуры ПО и оптимизацию производительности приложений."
  },
  skillsTitle: { en: "Skills & Expertise", pl: "Umiejętności i Ekspertyza", ru: "Навыки и Экспертиза" },
  experienceTitle: { en: "Experience", pl: "Doświadczenie", ru: "Опыт работы" },
  educationTitle: { en: "Education", pl: "Wykształcenie", ru: "Образование" },
  viewGithub: { en: "View on GitHub", pl: "Zobacz na GitHub", ru: "Посмотреть на GitHub" },
  noResults: { en: "No projects found for this skill.", pl: "Nie znaleziono projektów dla tej umiejętności.", ru: "Проекты для этого навыка не найдены." },
  more: { en: "more", pl: "więcej", ru: "еще" },
  filterAll: { en: "Show All", pl: "Pokaż Wszystko", ru: "Показать Все" }
};

// --- Interfaces ---
interface Project {
  id: string;
  title: I18nString;
  shortDescription: I18nString;
  longDescription: I18nString;
  previewTags: string[];
  allTags: string[];
  link: string;
}

interface Experience {
  role: I18nString;
  company: string;
  period: string;
  description: I18nString;
}

interface Education {
  degree: I18nString;
  institution: I18nString;
  description: I18nString;
}

interface SkillGroup {
  category: I18nString;
  items: string[];
}

// --- Data ---
const skillsData: SkillGroup[] = [
  {
    category: { en: "Programming Languages", pl: "Języki Programowania", ru: "Языки программирования" },
    items: ["C#", "C++", "Python", "JavaScript", "TypeScript", "Java"]
  },
  {
    category: { en: "Frameworks & Services", pl: "Frameworki i Usługi", ru: "Фреймворки и Сервисы" },
    items: ["React.js", "ASP.NET", ".NET Core", "Angular", "Flask", "Azure", "Docker", "Firebase", "Unreal Engine 5"]
  },
  {
    category: { en: "Tools & Architecture", pl: "Narzędzia i Architektura", ru: "Инструменты и Архитектура" },
    items: ["Git & GitHub", "CI / CD", "SQLite", "MySQL", "RESTful APIs", "Cloud Computing"]
  },
  {
    category: { en: "Core Competencies", pl: "Kluczowe Kompetencje", ru: "Ключевые компетенции" },
    items: ["Agile & Kanban", "Full-stack Development", "Software Architecture", "API & Database Design", "Technical Documentation", "Mentoring"]
  },
  {
    category: { en: "Spoken Languages", pl: "Języki", ru: "Владение языками" },
    items: ["English", "Polish", "Belarusian", "Russian"]
  }
];

const experienceData: Experience[] = [
  {
    role: { en: "Service & Operations Specialist", pl: "Specjalista ds. Operacyjnych i Obsługi Klienta", ru: "Специалист по операционной деятельности и обслуживанию клиентов" },
    company: "AmRest (KFC)",
    period: "2024 - 2026",
    description: {
      en: "Ensured operational excellence according to corporate procedures in a high-pressure environment. Responsible for maintaining strong collaboration, quick decision-making, and organizational skills.",
      pl: "Zapewnianie doskonałości operacyjnej zgodnie z procedurami korporacyjnymi w dynamicznym środowisku. Odpowiedzialny za efektywną współpracę zespołową, szybkie podejmowanie decyzji oraz organizację.",
      ru: "Обеспечение операционной эффективности в соответствии с корпоративными стандартами в условиях высокой интенсивности. Ответственность за командное взаимодействие, принятие быстрых решений и организационные процессы."
    }
  },
  {
    role: { en: "Intern Content Manager", pl: "Stażysta Content Manager", ru: "Стажер-контент-менеджер" },
    company: "Immogee Sp. z o.o.",
    period: "2024",
    description: {
      en: "Managed digital content for 3U10 Investment Art Gallery while developing scripts to automate data collection and storage, streamlining reporting processes.",
      pl: "Zarządzanie treścią cyfrową dla Galerii Sztuki Inwestycyjnej 3U10 przy jednoczesnym tworzeniu skryptów do automatyzacji zbierania i przechowywania danych.",
      ru: "Управление цифровым контентом для инвестиционной художественной галереи 3U10, а также разработка скриптов для автоматизации сбора и хранения данных, что позволило оптимизировать отчетность."
    }
  },
  {
    role: { en: "Software Developer Intern", pl: "Stażysta Software Developer", ru: "Стажер-разработчик ПО" },
    company: "Silesian University of Technology",
    period: "2024",
    description: {
      en: "Developed the Map-Helper web application, focusing on map integration and performance optimization. Worked in a team to test new technologies and refine user interaction.",
      pl: "Tworzenie aplikacji webowej Map-Helper, koncentrując się na integracji map i optymalizacji wydajności. Praca w zespole nad testowaniem nowych technologii.",
      ru: "Разработка веб-приложения Map-Helper с упором на интеграцию карт и оптимизацию производительности. Работа в команде над тестированием новых технологий и улучшением пользовательского взаимодействия."
    }
  },
  {
    role: { en: "Website Manager Intern", pl: "Stażysta Website Manager", ru: "Стажер по администрированию веб-сайта" },
    company: "Secondary School No. 5",
    period: "2018",
    description: {
      en: "Maintained the school website, ensuring up-to-date content and functionality while collaborating with staff to implement requested features.",
      pl: "Utrzymywanie szkolnej strony internetowej, dbanie o aktualność treści i funkcjonalność przy współpracy z kadrą w celu wdrażania nowych funkcji.",
      ru: "Поддержка школьного веб-сайта, обеспечение актуальности контента и работоспособности, а также взаимодействие с персоналом по внедрению новых функций."
    }
  }
];

const educationData: Education[] = [
  {
    degree: { en: "M.Sc. in Management", pl: "Magister (Mgr), Zarządzanie", ru: "Магистр менеджмента" },
    institution: { en: "Gdańsk University of Technology", pl: "Politechnika Gdańska", ru: "Гданьский технологический университет" },
    description: {
      en: "Developing expertise in project management, business process optimization, and team coordination within modern technological environments.",
      pl: "Rozwijanie kompetencji w zakresie zarządzania projektami, optymalizacji procesów biznesowych oraz koordynacji zespołów w nowoczesnych środowiskach.",
      ru: "Развитие компетенций в области управления проектами, оптимизации бизнес-процессов и координации команд в современной технологической среде."
    }
  },
  {
    degree: { en: "B.Eng. in Computer Science", pl: "Inżynier (Inż.), Informatyka", ru: "Бакалавр информатики (инженер)" },
    institution: { en: "Silesian University of Technology", pl: "Politechnika Śląska", ru: "Силезский технологический университет" },
    description: {
      en: "Strong foundation in software engineering, interactive digital system design, and developing high-performance, user-centric solutions.",
      pl: "Solidne podstawy inżynierii oprogramowania oraz projektowania interaktywnych i zorientowanych na użytkownika systemów.",
      ru: "Фундаментальная подготовка в области программной инженерии, проектирования интерактивных систем и разработки высокопроизводительных решений, ориентированных на пользователя."
    }
  }
];

const projects: Project[] = [
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
    link: "https://github.com/ArseniMokhau/Who-changed-my-mix"
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
    link: "https://github.com/ArseniMokhau/schedule-management-system"
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
    link: "https://github.com/ArseniMokhau/RecipeManager/tree/Full"
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
    link: "https://github.com/ArseniMokhau/Map-Helper"
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

const filters = [
  { id: 'all', label: () => uiStrings.filterAll[currentLang], match: () => true },
  { id: 'csharp', label: () => 'C# & .NET', match: (tags: string[]) => tags.some(t => t.includes('C#') || t.includes('.NET') || t.includes('ASP.NET') || t.includes('WPF')) },
  { id: 'jsc', label: () => 'JavaScript', match: (tags: string[]) => tags.some(t => t.includes('JavaScript') || t.includes('React')) },
  { id: 'react', label: () => 'React & TS', match: (tags: string[]) => tags.some(t => t.includes('React') || t.includes('TypeScript')) },
  { id: 'python', label: () => 'Python', match: (tags: string[]) => tags.some(t => t.includes('Python') || t.includes('Flask')) },
  { id: 'kotlin', label: () => 'Kotlin & Android', match: (tags: string[]) => tags.some(t => t.includes('Kotlin') || t.includes('Android')) },
  { id: 'azure', label: () => 'Azure', match: (tags: string[]) => tags.includes('Azure') }
];

const app = document.querySelector<HTMLDivElement>('#app');

// --- Render Logic ---
const renderApp = () => {
  if (!app) return;

  app.innerHTML = `
    <div class="${styles.container}">
      
      <div class="${styles.langSwitcher}" data-active="${currentLang}">
        <div class="${styles.langSlider}"></div>
        <button class="${styles.langBtn} ${currentLang === 'en' ? styles.activeLang : ''}" data-lang="en">EN</button>
        <button class="${styles.langBtn} ${currentLang === 'pl' ? styles.activeLang : ''}" data-lang="pl">PL</button>
        <button class="${styles.langBtn} ${currentLang === 'ru' ? styles.activeLang : ''}" data-lang="ru">RU</button>
      </div>

      <header class="${styles.header}">
        <h1 class="${styles.title}">${uiStrings.profileName[currentLang]}</h1>
        <p class="${styles.subtitle}">${uiStrings.subtitle[currentLang]}</p>
        <div class="${styles.contactInfo}">
          <a href="mailto:arsenimokhau@gmail.com">arsenimokhau@gmail.com</a> 
          &bull; 
          <a href="tel:+48577830956">+48-577-830-956</a>
        </div>
        <div class="${styles.headerSkills}">
          <span>C# & .NET</span> | <span>JavaScript</span> | <span>React & TypeScript</span> | <span>Python</span> | <span>Azure</span>
        </div>
      </header>

      <nav class="${styles.tabNav}">
        <button class="${styles.tabBtn} ${activeTab === 'profile' ? styles.activeTab : ''}" data-target="profile">${uiStrings.tabProfile[currentLang]}</button>
        <button class="${styles.tabBtn} ${activeTab === 'projects' ? styles.activeTab : ''}" data-target="projects">${uiStrings.tabProjects[currentLang]}</button>
      </nav>

      <main>
        <div id="tab-profile" class="${styles.tabContent} ${activeTab === 'profile' ? styles.activeTabContent : ''}">
          <section class="${styles.section}">
            <h2>${uiStrings.aboutMe[currentLang]}</h2>
            <p>${uiStrings.aboutDesc[currentLang]}</p>
          </section>

          <section class="${styles.section}">
            <h2>${uiStrings.skillsTitle[currentLang]}</h2>
            <div class="${styles.skillsGrid}">
              ${skillsData.map(skillGroup => `
                <div class="${styles.skillCategory}">
                  <h3>${skillGroup.category[currentLang]}</h3>
                  <div class="${styles.techTags}">
                    ${skillGroup.items.map(item => `<span class="${styles.tag}">${item}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <section class="${styles.section}">
            <h2>${uiStrings.experienceTitle[currentLang]}</h2>
            <div class="${styles.timeline}">
              ${experienceData.map(exp => `
                <div class="${styles.timelineItem}">
                  <div class="${styles.timelineHeader}">
                    <h3>${exp.role[currentLang]}</h3>
                    <span class="${styles.period}">${exp.period}</span>
                  </div>
                  <h4 class="${styles.company}">${exp.company}</h4>
                  <p>${exp.description[currentLang]}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <section class="${styles.section}">
            <h2>${uiStrings.educationTitle[currentLang]}</h2>
            <div class="${styles.timeline}">
              ${educationData.map(edu => `
                <div class="${styles.timelineItem}">
                  <div class="${styles.timelineHeader}">
                    <h3>${edu.degree[currentLang]}</h3>
                  </div>
                  <h4 class="${styles.company}">${edu.institution[currentLang]}</h4>
                  <p>${edu.description[currentLang]}</p>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <div id="tab-projects" class="${styles.tabContent} ${activeTab === 'projects' ? styles.activeTabContent : ''}">
          <div id="filter-container" class="${styles.filtersContainer}"></div>
          <div id="project-grid" class="${styles.grid}"></div>
        </div>
      </main>
    </div>

    <div id="project-modal" class="${styles.modalOverlay}">
      <div class="${styles.modalContent}">
        <button id="close-modal" class="${styles.closeButton}">&times;</button>
        <div id="modal-body"></div>
      </div>
    </div>
  `;

  attachGlobalEvents();
  if (activeTab === 'projects') {
    renderFilters();
    renderProjects();
  }
};

// --- View Logic ---
const attachGlobalEvents = () => {
  // Language Switcher
  const langBtns = document.querySelectorAll(`.${styles.langBtn}`);
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLang = (e.currentTarget as HTMLButtonElement).getAttribute('data-lang') as Lang;
      renderApp(); // Complete re-render with new language
    });
  });

  // Tab Logic
  const tabBtns = document.querySelectorAll(`.${styles.tabBtn}`);
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeTab = (e.currentTarget as HTMLButtonElement).getAttribute('data-target') || 'profile';
      renderApp(); // Re-render to show appropriate tab
    });
  });
};

const renderFilters = () => {
  const filterContainer = document.getElementById('filter-container');
  if (!filterContainer) return;

  filterContainer.innerHTML = filters.map((filter, index) => `
    <button class="${styles.filterBtn} ${activeFilter === filter.id ? styles.activeFilter : ''}" data-filter-id="${filter.id}">
      ${filter.label()}
    </button>${index < filters.length - 1 ? `<span class="${styles.separator}">|</span>` : ''}
  `).join('');

  document.querySelectorAll(`.${styles.filterBtn}`).forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeFilter = (e.currentTarget as HTMLButtonElement).getAttribute('data-filter-id') || 'all';
      renderFilters(); 
      renderProjects(); 
    });
  });
};

const renderProjects = () => {
  const gridContainer = document.getElementById('project-grid');
  if (!gridContainer) return;

  const currentFilterLogic = filters.find(f => f.id === activeFilter)?.match || (() => true);
  const filteredProjects = projects.filter(p => currentFilterLogic(p.allTags));

  if (filteredProjects.length === 0) {
    gridContainer.innerHTML = `<p class="${styles.noResults}">${uiStrings.noResults[currentLang]}</p>`;
    return;
  }

  gridContainer.innerHTML = filteredProjects.map(proj => `
    <button class="${styles.card} ${styles.interactiveCard}" data-project-id="${proj.id}">
      <h3 class="${styles.cardTitle}">${proj.title[currentLang]}</h3>
      <p>${proj.shortDescription[currentLang]}</p>
      <div class="${styles.techTags}">
        ${proj.previewTags.map(tech => `<span class="${styles.tag}">${tech}</span>`).join('')}
        ${proj.allTags.length > proj.previewTags.length ? `<span class="${styles.tag} ${styles.tagMore}">+${proj.allTags.length - proj.previewTags.length} ${uiStrings.more[currentLang]}</span>` : ''}
      </div>
    </button>
  `).join('');

  attachModalEvents();
};

const attachModalEvents = () => {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('close-modal');
  const cards = document.querySelectorAll(`.${styles.interactiveCard}`);
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projectId);

      if (project && modalBody && modal) {
        modalBody.innerHTML = `
          <h2 class="${styles.modalTitle}">${project.title[currentLang]}</h2>
          <p class="${styles.modalDescription}">${project.longDescription[currentLang]}</p>
          <div class="${styles.modalTags}">
            ${project.allTags.map(tech => `<span class="${styles.tag}">${tech}</span>`).join('')}
          </div>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="${styles.githubBtn}">
            ${uiStrings.viewGithub[currentLang]}
          </a>
        `;
        
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = 'hidden';
        modal.classList.add(styles.showModal);
      }
    });
  });

  const closeModal = () => {
    if (modal) {
      modal.classList.remove(styles.showModal);
      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }, 300); 
    }
  };

  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal?.classList.contains(styles.showModal)) closeModal(); });
};

// --- Initialize App ---
renderApp();