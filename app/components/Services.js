export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;services&gt;</span>
          <h2 className="section__title">What I <span className="gradient-text">Offer</span></h2>
          <p className="section__subtitle">End-to-end solutions for your digital needs</p>
        </div>
        <div className="services__grid">
          <div className="service-card animate-on-scroll">
            <div className="service-card__number">01</div>
            <div className="service-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>
            </div>
            <h3 className="service-card__title">Backend Development</h3>
            <p className="service-card__desc">Scalable microservices, REST/GraphQL APIs, database design, and server-side architecture using Java Spring Boot.</p>
          </div>
          <div className="service-card animate-on-scroll">
            <div className="service-card__number">02</div>
            <div className="service-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 className="service-card__title">Frontend &amp; UI/UX</h3>
            <p className="service-card__desc">Modern, responsive web applications with Angular, React, or Next.js. Pixel-perfect implementations with smooth animations.</p>
          </div>
          <div className="service-card animate-on-scroll">
            <div className="service-card__number">03</div>
            <div className="service-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            </div>
            <h3 className="service-card__title">DevOps &amp; Deployment</h3>
            <p className="service-card__desc">End-to-end CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure automation.</p>
          </div>
          <div className="service-card animate-on-scroll">
            <div className="service-card__number">04</div>
            <div className="service-card__icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 className="service-card__title">Telecom VAS Solutions</h3>
            <p className="service-card__desc">USSD applications, SMS gateways, subscription platforms, and mobile content delivery systems for telecom operators.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
