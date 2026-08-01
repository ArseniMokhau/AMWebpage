import './global.css';
import styles from './App.module.css';
import { 
  type Lang, 
  uiStrings, 
  skillsData, 
  experienceData, 
  educationData, 
  projects, 
  filters 
} from './data/portfolioData';

// --- State ---
let currentLang: Lang = 'en';
let activeFilter = 'all';
let activeTab = 'profile';

const app = document.querySelector<HTMLDivElement>('#app');

// --- Render Logic ---
const renderApp = () => {
  if (!app) return;

  app.innerHTML = `
    <div class="${styles.container}">
      
      <!-- LANGUAGE SWITCHER -->
      <div class="${styles.langSwitcher}" data-active="${currentLang}">
        <div class="${styles.langSlider}"></div>
        <button class="${styles.langBtn} ${currentLang === 'en' ? styles.activeLang : ''}" data-lang="en">EN</button>
        <button class="${styles.langBtn} ${currentLang === 'pl' ? styles.activeLang : ''}" data-lang="pl">PL</button>
        <button class="${styles.langBtn} ${currentLang === 'ru' ? styles.activeLang : ''}" data-lang="ru">RU</button>
      </div>

      <header class="${styles.header}">
        <h1 class="${styles.title}">Arseni Mokhau</h1>
        <p class="${styles.subtitle}">${uiStrings.subtitle[currentLang]}</p>
        <div class="${styles.contactInfo}">
          <a href="mailto:arsenimokhau@gmail.com">arsenimokhau@gmail.com</a> 
          &bull; 
          <a href="tel:+48577830956">+48-577-830-956</a>
        </div>
        <div class="${styles.headerSkills}">
          <span>C# & .NET</span> | <span>TypeScript & JavaScript</span> | <span>React</span> | <span>Python</span> | <span>Azure</span>
        </div>
      </header>

      <!-- Tab Navigation -->
      <nav class="${styles.tabNav}">
        <button class="${styles.tabBtn} ${activeTab === 'profile' ? styles.activeTab : ''}" data-target="profile">${uiStrings.tabProfile[currentLang]}</button>
        <button class="${styles.tabBtn} ${activeTab === 'projects' ? styles.activeTab : ''}" data-target="projects">${uiStrings.tabProjects[currentLang]}</button>
      </nav>

      <main>
        <!-- PROFILE TAB CONTENT -->
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

        <!-- PROJECTS TAB CONTENT -->
        <div id="tab-projects" class="${styles.tabContent} ${activeTab === 'projects' ? styles.activeTabContent : ''}">
          <div id="filter-container" class="${styles.filtersContainer}"></div>
          <div id="project-grid" class="${styles.grid}"></div>
        </div>
      </main>
    </div>

    <!-- Modal Container -->
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

const attachGlobalEvents = () => {
  const langBtns = document.querySelectorAll(`.${styles.langBtn}`);
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLang = (e.currentTarget as HTMLButtonElement).getAttribute('data-lang') as Lang;
      renderApp(); 
    });
  });

  const tabBtns = document.querySelectorAll(`.${styles.tabBtn}`);
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeTab = (e.currentTarget as HTMLButtonElement).getAttribute('data-target') || 'profile';
      renderApp(); 
    });
  });
};

const renderFilters = () => {
  const filterContainer = document.getElementById('filter-container');
  if (!filterContainer) return;

  filterContainer.innerHTML = filters.map((filter, index) => `
    <button class="${styles.filterBtn} ${activeFilter === filter.id ? styles.activeFilter : ''}" data-filter-id="${filter.id}">
      ${filter.label(currentLang)}
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
        // Conditionally render the GIF element only if project.gif is defined
        const gifPath = project.gif?.startsWith('/') ? `${import.meta.env.BASE_URL}${project.gif.slice(1)}` : project.gif;
        const gifHTML = project.gif 
          ? `<div class="${styles.modalGifContainer}"><img src="${gifPath}" alt="${project.title[currentLang]} Demo" class="${styles.modalGif}"/></div>` 
          : '';

        const githubBtnHTML = project.link 
          ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="${styles.githubBtn}">
               ${uiStrings.viewGithub[currentLang]}
             </a>` 
          : '';

        modalBody.innerHTML = `
          <h2 class="${styles.modalTitle}">${project.title[currentLang]}</h2>
          <p class="${styles.modalDescription}">${project.longDescription[currentLang]}</p>
          ${gifHTML}
          <div class="${styles.modalTags}">
            ${project.allTags.map(tech => `<span class="${styles.tag}">${tech}</span>`).join('')}
          </div>
          ${githubBtnHTML}
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