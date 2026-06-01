import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge animate-on-scroll">
            <span className="hero__badge-dot"></span>
            Available for Freelance Projects
          </div>
          <h1 className="hero__title animate-on-scroll">
            Hi, I&apos;m <span className="gradient-text">Dagnachew</span>
            <span className="hero__title-line">Full-Stack Engineer</span>
            <span className="hero__title-line hero__title-line--typed">
              <span className="typed-text" id="typed-text"></span>
              <span className="typed-cursor">|</span>
            </span>
          </h1>
          <p className="hero__desc animate-on-scroll">
            Currently at <strong>Spartans, Dubai</strong> — I architect scalable backend systems with <strong>Spring Boot</strong>, craft stunning frontends with <strong>Angular &amp; React</strong>, and orchestrate deployments using <strong>Kubernetes &amp; Docker</strong>. Founder of <strong>Afrolal Tech</strong> and experienced in telecom VAS platforms.
          </p>
          <div className="hero__actions animate-on-scroll">
            <a href="#projects" className="btn btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Let&apos;s Talk
            </a>
          </div>
          <div className="hero__stats animate-on-scroll">
            <div className="hero__stat">
              <span className="hero__stat-number" data-count="8">0</span><span className="hero__stat-plus">+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number" data-count="30">0</span><span className="hero__stat-plus">+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number" data-count="15">0</span><span className="hero__stat-plus">+</span>
              <span className="hero__stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
        <div className="hero__visual animate-on-scroll">
          <div className="hero__image-wrapper">
            <div className="hero__image-glow"></div>
            <Image src="/headshot.png" alt="Dagnachew Melknew - Full-Stack Software Engineer" className="hero__image" width={400} height={400} priority />
            <div className="hero__image-ring"></div>
          </div>
          <div className="hero__float-card hero__float-card--1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <span>Spring Boot</span>
          </div>
          <div className="hero__float-card hero__float-card--2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <span>DevOps</span>
          </div>
          <div className="hero__float-card hero__float-card--3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFD93D" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            <span>Full-Stack</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
