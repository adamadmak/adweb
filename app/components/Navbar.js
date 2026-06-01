export default function Navbar() {
  return (
    <>
      <nav className="nav" id="navbar">
        <div className="nav__container">
          <a href="#hero" className="nav__logo">
            <span className="nav__logo-bracket">&lt;</span>DM<span className="nav__logo-bracket">/&gt;</span>
          </a>
          <ul className="nav__links" id="nav-links">
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#skills" className="nav__link">Skills</a></li>
            <li><a href="#experience" className="nav__link">Experience</a></li>
            <li><a href="#projects" className="nav__link">Projects</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
          <a href="#contact" className="nav__cta">Hire Me</a>
          <button className="nav__toggle" id="nav-toggle" aria-label="Toggle navigation menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu">
        <ul className="mobile-menu__links">
          <li><a href="#about" className="mobile-menu__link">About</a></li>
          <li><a href="#skills" className="mobile-menu__link">Skills</a></li>
          <li><a href="#experience" className="mobile-menu__link">Experience</a></li>
          <li><a href="#projects" className="mobile-menu__link">Projects</a></li>
          <li><a href="#contact" className="mobile-menu__link">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
