export default function Skills() {
  const skillCards = [
    {
      id: 'skill-backend',
      iconClass: 'skill-card__icon--backend',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>,
      title: 'Backend Development',
      desc: 'Building robust, scalable server-side applications and microservices',
      skills: [
        { name: 'Java / Spring Boot', level: 'Expert', width: 95 },
        { name: 'Microservices Architecture', level: 'Expert', width: 90 },
        { name: 'REST APIs & GraphQL', level: 'Advanced', width: 88 },
        { name: 'Node.js', level: 'Advanced', width: 80 },
      ],
    },
    {
      id: 'skill-frontend',
      iconClass: 'skill-card__icon--frontend',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      title: 'Frontend Development',
      desc: 'Creating beautiful, responsive, and interactive user interfaces',
      skills: [
        { name: 'Angular', level: 'Expert', width: 92 },
        { name: 'React / Next.js', level: 'Advanced', width: 85 },
        { name: 'TypeScript / JavaScript', level: 'Expert', width: 90 },
        { name: 'HTML5 / CSS3 / SASS', level: 'Expert', width: 92 },
      ],
    },
    {
      id: 'skill-devops',
      iconClass: 'skill-card__icon--devops',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
      title: 'DevOps & Cloud',
      desc: 'Automating deployments and managing cloud infrastructure at scale',
      skills: [
        { name: 'Kubernetes (K8s)', level: 'Advanced', width: 85 },
        { name: 'Docker', level: 'Expert', width: 92 },
        { name: 'Jenkins CI/CD', level: 'Expert', width: 90 },
        { name: 'GitLab CI & Lens', level: 'Advanced', width: 85 },
      ],
    },
    {
      id: 'skill-ai',
      iconClass: 'skill-card__icon--ai',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 10V2z"/><path d="M12 22a4 4 0 0 1-4-4c0-1.95 1.4-3.58 3.25-3.93L12 14v8z"/><path d="M2 12a4 4 0 0 1 4-4c1.95 0 3.58 1.4 3.93 3.25L10 12H2z"/><path d="M22 12a4 4 0 0 1-4 4c-1.95 0-3.58-1.4-3.93-3.25L14 12h8z"/></svg>,
      title: 'AI & Modern Tooling',
      desc: 'Leveraging AI-powered development tools for maximum productivity',
      skills: [
        { name: 'Google Antigravity', level: 'Advanced', width: 85 },
        { name: 'Trae AI', level: 'Advanced', width: 82 },
        { name: 'GitHub Copilot', level: 'Advanced', width: 88 },
        { name: 'AI-Driven Architecture', level: 'Intermediate', width: 75 },
      ],
    },
    {
      id: 'skill-database',
      iconClass: 'skill-card__icon--database',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
      title: 'Databases & Storage',
      desc: 'Designing efficient data architectures and storage solutions',
      skills: [
        { name: 'PostgreSQL', level: 'Expert', width: 90 },
        { name: 'MySQL / MariaDB', level: 'Expert', width: 90 },
        { name: 'MongoDB', level: 'Advanced', width: 82 },
        { name: 'Redis / Caching', level: 'Advanced', width: 80 },
      ],
    },
    {
      id: 'skill-mobile',
      iconClass: 'skill-card__icon--mobile',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
      title: 'Mobile & Integration',
      desc: 'Building cross-platform mobile apps and system integrations',
      skills: [
        { name: 'Android (Native)', level: 'Advanced', width: 82 },
        { name: 'Flutter', level: 'Intermediate', width: 70 },
        { name: 'USSD / SMS Gateway', level: 'Expert', width: 95 },
        { name: 'Payment Integration', level: 'Advanced', width: 85 },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;skills&gt;</span>
          <h2 className="section__title">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="section__subtitle">Technologies I work with to bring ideas to life</p>
        </div>
        <div className="skills__grid">
          {skillCards.map((card) => (
            <div className="skill-card animate-on-scroll" id={card.id} key={card.id}>
              <div className={`skill-card__icon ${card.iconClass}`}>{card.icon}</div>
              <h3 className="skill-card__title">{card.title}</h3>
              <p className="skill-card__desc">{card.desc}</p>
              <div className="skill-card__items">
                {card.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item__header">
                      <span>{skill.name}</span>
                      <span className="skill-item__level">{skill.level}</span>
                    </div>
                    <div className="skill-bar"><div className="skill-bar__fill" data-width={skill.width}></div></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
