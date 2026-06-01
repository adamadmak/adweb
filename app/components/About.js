export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;about&gt;</span>
          <h2 className="section__title">About <span className="gradient-text">Me</span></h2>
          <p className="section__subtitle">Crafting digital solutions that make a difference</p>
        </div>
        <div className="about__grid">
          <div className="about__content animate-on-scroll">
            <div className="about__text">
              <p>I&apos;m a <strong>Full-Stack Software Engineer</strong> and <strong>DevOps specialist</strong> currently based in <strong>Dubai, UAE</strong>, working at <strong>Spartans</strong>. With over 8 years of experience building enterprise-grade applications, my expertise spans from crafting robust backend microservices with <strong>Spring Boot &amp; Java</strong> to building interactive frontends with <strong>Angular, React, and modern JavaScript</strong>.</p>
              <p>I&apos;ve built production websites like <strong>frontieri.com</strong>, <strong>capracom.com</strong>, <strong>vastatalent.com</strong>, and multiple international expo platforms. I&apos;ve developed VAS platforms for <strong>Ethio Telecom</strong> at Alet.io, and published Android apps on <strong>Google Play</strong> including Lewach and Ethio Legend. I also manage CI/CD pipelines with <strong>Jenkins &amp; GitLab CI</strong> and leverage AI-powered coding tools.</p>
            //   <p>I&apos;m the <strong>founder of Afrolal Tech</strong> — a digital innovation company delivering world-class web &amp; mobile solutions, SEO analytics, and AI-powered strategies. I&apos;m passionate about creating technology that solves real-world problems and I&apos;m <strong>available for freelance work</strong> globally.</p>
            // </div>
            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-icon">📍</span>
                <div>
                  <span className="about__info-label">Location</span>
                  <span className="about__info-value">Dubai, UAE</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">💼</span>
                <div>
                  <span className="about__info-label">Experience</span>
                  <span className="about__info-value">8+ Years</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">🎓</span>
                <div>
                  <span className="about__info-label">Specialty</span>
                  <span className="about__info-value">Telecom VAS &amp; Enterprise</span>
                </div>
              </div>
              <div className="about__info-item">
                <span className="about__info-icon">🌍</span>
                <div>
                  <span className="about__info-label">Availability</span>
                  <span className="about__info-value">Open for Freelance</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about__tech-stack animate-on-scroll">
            <h3 className="about__tech-title">My Tech DNA</h3>
            <div className="about__tech-helix">
              <div className="tech-strand" data-label="Backend">
                <span className="tech-tag tech-tag--primary">Java</span>
                <span className="tech-tag tech-tag--primary">Spring Boot</span>
                <span className="tech-tag tech-tag--primary">Microservices</span>
                <span className="tech-tag tech-tag--primary">REST API</span>
                <span className="tech-tag tech-tag--primary">GraphQL</span>
              </div>
              <div className="tech-strand" data-label="Frontend">
                <span className="tech-tag tech-tag--accent">Angular</span>
                <span className="tech-tag tech-tag--accent">React</span>
                <span className="tech-tag tech-tag--accent">TypeScript</span>
                <span className="tech-tag tech-tag--accent">HTML/CSS</span>
                <span className="tech-tag tech-tag--accent">JavaScript</span>
              </div>
              <div className="tech-strand" data-label="DevOps">
                <span className="tech-tag tech-tag--warm">Kubernetes</span>
                <span className="tech-tag tech-tag--warm">Docker</span>
                <span className="tech-tag tech-tag--warm">Jenkins</span>
                <span className="tech-tag tech-tag--warm">GitLab CI</span>
                <span className="tech-tag tech-tag--warm">Linux</span>
              </div>
              <div className="tech-strand" data-label="Database">
                <span className="tech-tag tech-tag--gold">PostgreSQL</span>
                <span className="tech-tag tech-tag--gold">MySQL</span>
                <span className="tech-tag tech-tag--gold">MongoDB</span>
                <span className="tech-tag tech-tag--gold">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
