import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Grid, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import '@styles/components/Navbar.scss';
import { ThemeContext } from '@context/ThemeContext';

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

// Variantes de animação para o overlay e a lista
const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const navListVariants: Variants = {
  hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const navItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } },
  exit: { y: 20, opacity: 0, transition: { ease: 'easeIn', duration: 0.2 } },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavLinkClick = () => setIsMobileMenuOpen(false);

  const hudClassName = `hud-frame theme-${theme}`;

  return (
    <>
      <div className={hudClassName}>
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
            <p>UI_VERSION: 3.2.0_HUD</p>
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

      {/* -- NOVO MENU MOBILE (LISTA) -- */}
      <div className={`mobile-menu-wrapper theme-${theme}`}>
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Grid size={24} />}
        </button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.ul className="mobile-nav-list" variants={navListVariants}>
                {navLinks.map((link) => (
                  <motion.li key={link.to} variants={navItemVariants}>
                    <NavLink
                      to={link.to}
                      className="mobile-nav-item"
                      onClick={handleNavLinkClick}
                      end={link.to === '/portfolio/'}
                    >
                      {link.text}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
