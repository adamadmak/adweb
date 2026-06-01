export default function Projects() {
  const projects = [
    {
      id: 'project-afrolal',
      featured: true,
      badge: 'Founder',
      title: 'Afrolal Tech Platform',
      desc: 'My own digital innovation company delivering world-class web & mobile development, SEO analytics, and AI-powered strategies for businesses across Ethiopia and Africa.',
      tags: ['React', 'Spring Boot', 'SEO', 'AI'],
      link: 'https://afrolaltech.app.aletcloud.com/',
      linkLabel: 'Visit Afrolal Tech',
      icon: '\ud83d\ude80',
      placeholder: 'Afrolal Tech',
      placeholderClass: 'project-card__placeholder--alet',
    },
    {
      id: 'project-lewach',
      featured: true,
      badge: 'Google Play',
      title: 'Lewach App',
      desc: 'A classifieds and marketplace Android application published on Google Play. Connects buyers and sellers with a modern mobile-first experience.',
      tags: ['Android', 'Java', 'Firebase', 'REST API'],
      link: 'https://play.google.com/store/apps/details?id=com.afrolal.app.lewach',
      linkLabel: 'View Lewach on Google Play',
      icon: '\ud83d\udcf1',
      placeholder: 'Lewach App',
      placeholderClass: 'project-card__placeholder--games',
    },
    {
      id: 'project-chewata',
      featured: false,
      title: 'Ethio Legend \u2014 Chewata',
      desc: 'Ethiopian logo and quiz game app on Google Play. Features engaging trivia about Ethiopian culture, history, and landmarks with beautiful UI and gamification.',
      tags: ['Android', 'Java', 'SQLite', 'Game Logic'],
      link: 'https://play.google.com/store/apps/details?id=com.afrolal.chewataa',
      linkLabel: 'View Ethio Legend on Google Play',
      icon: '\ud83c\udfc6',
      placeholder: 'Ethio Legend',
      placeholderClass: 'project-card__placeholder--teletop',
    },
    {
      id: 'project-boomplay',
      featured: false,
      title: 'Boomplay VAS Integration',
      desc: 'Music streaming subscription service integrated with Ethio Telecom VAS. Handles millions of subscriber transactions with real-time billing and content delivery.',
      tags: ['Spring Boot', 'VAS API', 'PostgreSQL', 'Jenkins'],
      enterprise: true,
      icon: '\ud83c\udfb5',
      placeholder: 'Boomplay VAS',
      placeholderClass: 'project-card__placeholder--boomplay',
    },
    {
      id: 'project-onevas',
      featured: false,
      title: 'ONE VAS Platform',
      desc: 'Unified Value Added Services platform for Ethio Telecom. Manages USSD menus, SMS campaigns, subscription lifecycles, and telco billing integrations across multiple services.',
      tags: ['Spring Boot', 'USSD', 'SMS', 'Microservices'],
      enterprise: true,
      icon: '\ud83d\udce1',
      placeholder: 'ONE VAS',
      placeholderClass: 'project-card__placeholder--onevas',
    },
    {
      id: 'project-websites',
      featured: false,
      title: 'Corporate & Expo Websites',
      desc: 'Built production websites including frontieri.com, capracom.com, vastatalent.com, compositeexpo.com, globalwasteexpo.com, gulfsteelexpo.com, and storagetankandrefinery.com.',
      tags: ['WordPress', 'React', 'SEO', 'Responsive'],
      link: 'https://frontieri.com',
      linkLabel: 'Visit Frontieri',
      icon: '\ud83c\udf10',
      placeholder: 'Web Projects',
      placeholderClass: 'project-card__placeholder--cloud',
    },
    {
      id: 'project-aradagames',
      featured: false,
      title: 'Arada Games Platform',
      desc: 'Mobile gaming platform with backend services for user management, leaderboards, real-time multiplayer support, and telecom billing integration.',
      tags: ['Spring Boot', 'WebSocket', 'Redis', 'Android'],
      enterprise: true,
      icon: '\ud83c\udfae',
      placeholder: 'Arada Games',
      placeholderClass: 'project-card__placeholder--games',
    },
    {
      id: 'project-teletop',
      featured: false,
      title: 'Teletop Service',
      desc: 'Telecom top-up and airtime management service with automated processing, subscription handling, and real-time transaction monitoring.',
      tags: ['Spring Boot', 'REST API', 'PostgreSQL', 'Docker'],
      enterprise: true,
      icon: '\ud83d\udcf1',
      placeholder: 'Teletop',
      placeholderClass: 'project-card__placeholder--teletop',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;projects&gt;</span>
          <h2 className="section__title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section__subtitle">Web apps, mobile apps, VAS platforms, and enterprise solutions</p>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <div className={`project-card${project.featured ? ' project-card--featured' : ''} animate-on-scroll`} id={project.id} key={project.id}>
              <div className="project-card__image">
                <div className="project-card__overlay">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label={project.linkLabel}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  ) : (
                    <span className="project-card__private">{project.enterprise ? 'Enterprise' : 'Private'}</span>
                  )}
                </div>
                <div className={`project-card__placeholder ${project.placeholderClass}`}>
                  <span className="project-card__placeholder-icon">{project.icon}</span>
                  <span>{project.placeholder}</span>
                </div>
              </div>
              <div className="project-card__body">
                {project.badge && <div className="project-card__badge">{project.badge}</div>}
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
