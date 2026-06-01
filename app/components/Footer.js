export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="nav__logo-bracket">&lt;</span>DM<span className="nav__logo-bracket">/&gt;</span>
            </a>
            <p className="footer__desc">Full-Stack Software Engineer &amp; DevOps Expert crafting scalable solutions for businesses worldwide.</p>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__links">
            <h4>Services</h4>
            <a href="#services">Backend Development</a>
            <a href="#services">Frontend &amp; UI/UX</a>
            <a href="#services">DevOps &amp; Cloud</a>
            <a href="#services">Telecom VAS</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 Dagnachew Melknew. Built with passion &amp; code.</p>
          <p className="footer__made-with">Made with <span className="footer__heart">❤️</span> in Dubai</p>
        </div>
      </div>
    </footer>
  );
}
