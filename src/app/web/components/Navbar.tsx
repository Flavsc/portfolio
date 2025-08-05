import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail } from 'lucide-react';
import "@styles/components/Navbar.scss";

// Links da navegação
const navLinks = [
    { to: "/", text: "main" },
    { to: "/about", text: "about" },
    { to: "/projects", text: "projects" },
    { to: "/contact", text: "contact" },
];

export default function Navbar() {
    return (
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
                    <NavLink to="/" className="logo">166studios</NavLink>
                    <div className="status">
                        <span className="status-light"></span>
                        <span>online</span>
                    </div>
                </div>
            </div>

            {/* -- Módulo Superior Direito: Navegação Principal -- */}
            <nav className="hud-module-wrapper top-right">
                <ul className="nav-list">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} className="nav-item">
                                {link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            
            {/* -- Módulo Inferior Esquerdo: Informação do Sistema -- */}
            <div className="hud-module-wrapper bottom-left">
                <div className="module-content system-info">
                   <p>ui_version: 2.1.0</p>
                   <p>render_mode: R3F_OPTIMIZED</p>
                </div>
            </div>
            
            {/* -- Módulo Inferior Direito: Links Sociais -- */}
            <div className="hud-module-wrapper bottom-right">
                <div className="module-content">
                    <ul className="social-list">
                        <li><a href="#"><Github size={16} /></a></li>
                        <li><a href="#"><Linkedin size={16} /></a></li>
                        <li><a href="#"><Mail size={16} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}