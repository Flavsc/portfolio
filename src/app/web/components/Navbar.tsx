import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Grid, X } from 'lucide-react';
import '@styles/components/Navbar.scss';

const navLinks = [
  { to: '/portfolio/', text: 'main' },
  { to: '/portfolio/about', text: 'about' },
  { to: '/portfolio/projects', text: 'projects' },
  { to: '/portfolio/contact', text: 'contact' },
];

const socialLinks = [
  { href: 'https://github.com/Flavsc', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/flavio-carvalho-382b82263/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:flaviocarvalho.brz@gmail.com', icon: Mail, label: 'Email' },
];

export default function Navbar() {
  const [isRadialMenuOpen, setIsRadialMenuOpen] = useState(false);

  useEffect(() => {
    if (isRadialMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isRadialMenuOpen]);

  const toggleRadialMenu = () => {
    setIsRadialMenuOpen(!isRadialMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsRadialMenuOpen(false);
  };

  return (
    <>
      <div className="hud-frame">
        {/* -- Elementos Decorativos de Fundo -- */}
        <div className="hud-decoration top-line"></div>
        <div className="hud-decoration left-line"></div>
        <div className="hud-decoration right-line"></div>
        <div className="hud-decoration bottom-line"></div>
        <div className="hud-decoration corner top-left"></div>
        <div className="hud-decoration corner top-right"></div>
        <div className="hud-decoration corner bottom-left"></div>
        <div className="hud-decoration corner bottom-right"></div>

        {/* -- Módulo Superior Esquerdo: Logo e Status -- */}
        <div className="hud-module-wrapper top-left">
          <div className="module-content">
            <NavLink to="/portfolio/" className="logo">
              166studios
            </NavLink>
            <div className="status">
              <span className="status-light"></span>
              <span>ONLINE</span>
            </div>
          </div>
        </div>

        {/* -- Módulo Superior Direito: Navegação Principal (Desktop) -- */}
        <nav className="hud-module-wrapper top-right">
          <ul className="nav-list-desktop">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="nav-item"
                  // CORREÇÃO APLICADA AQUI:
                  end={link.to === '/portfolio/'}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* -- Módulo Inferior Esquerdo: Informação do Sistema -- */}
        <div className="hud-module-wrapper bottom-left">
          <div className="module-content system-info">
            <p>UI_VERSION: 2.2.0_RADIAL</p>
            <p>RENDER_MODE: R3F_OPTIMIZED</p>
          </div>
        </div>

        {/* -- Módulo Inferior Direito: Links Sociais -- */}
        <div className="hud-module-wrapper bottom-right">
          <div className="module-content">
            <ul className="social-list">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visite meu ${social.label}`}
                  >
                    <social.icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* -- Menu Radial para Mobile -- */}
      <div className="radial-menu-mobile">
        <button
          className="radial-menu-toggle"
          onClick={toggleRadialMenu}
          aria-label="Toggle navigation"
        >
          {isRadialMenuOpen ? <X size={24} /> : <Grid size={24} />}
        </button>
        <div
          className={`radial-menu-container ${isRadialMenuOpen ? 'is-open' : ''}`}
        >
          <nav className="radial-nav">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="radial-nav-item"
                onClick={handleNavLinkClick}
                // CORREÇÃO APLICADA AQUI TAMBÉM:
                end={link.to === '/portfolio/'}
                style={{ '--i': index } as React.CSSProperties}
              >
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
