export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__tag">&lt;contact&gt;</span>
          <h2 className="section__title">Let&apos;s Build <span className="gradient-text">Together</span></h2>
          <p className="section__subtitle">Have a project in mind? Let&apos;s make it happen.</p>
        </div>
        <div className="contact__grid">
          <div className="contact__info animate-on-scroll">
            <h3 className="contact__info-title">Get in Touch</h3>
            <p className="contact__info-desc">I&apos;m always interested in hearing about new projects and opportunities. Whether you need a full-stack application, DevOps setup, or telecom VAS solution — I&apos;m here to help.</p>
            <div className="contact__details">
              <a href="mailto:dagnachew@alet.io" className="contact__detail" id="contact-email">
                <div className="contact__detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Email</span>
                  <span className="contact__detail-value">dagnachew@alet.io</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/dagnachew-melknew-898a8813b/" target="_blank" rel="noopener noreferrer" className="contact__detail" id="contact-linkedin">
                <div className="contact__detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">LinkedIn</span>
                  <span className="contact__detail-value">Dagnachew Melknew</span>
                </div>
              </a>
              <div className="contact__detail" id="contact-location">
                <div className="contact__detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div className="contact__social">
              <a href="https://www.linkedin.com/in/dagnachew-melknew-898a8813b/" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://afrolaltech.app.aletcloud.com/" target="_blank" rel="noopener noreferrer" className="contact__social-link" aria-label="Website">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            </div>
          </div>
          <div className="contact__form-wrapper animate-on-scroll">
            <form className="contact__form" id="contact-form" action="https://formspree.io/f/placeholder" method="POST">
              <div className="form-group">
                <input type="text" id="form-name" name="name" required placeholder=" " />
                <label htmlFor="form-name">Your Name</label>
                <div className="form-group__line"></div>
              </div>
              <div className="form-group">
                <input type="email" id="form-email" name="email" required placeholder=" " />
                <label htmlFor="form-email">Your Email</label>
                <div className="form-group__line"></div>
              </div>
              <div className="form-group">
                <input type="text" id="form-subject" name="subject" required placeholder=" " />
                <label htmlFor="form-subject">Subject</label>
                <div className="form-group__line"></div>
              </div>
              <div className="form-group">
                <textarea id="form-message" name="message" rows="5" required placeholder=" "></textarea>
                <label htmlFor="form-message">Your Message</label>
                <div className="form-group__line"></div>
              </div>
              <button type="submit" className="btn btn--primary btn--full" id="form-submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
