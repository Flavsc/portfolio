import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import "@styles/components/Contact.scss";

// Variantes de animação
const moduleVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', scale: 0.9 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);
    // CORREÇÃO: E-mail atualizado
    const userEmail = "flaviocarvalho.brz@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(userEmail);
        toast.success("Endereço de e-mail copiado!");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <div className="contact-page-container">
            <motion.div
                className="contact-module"
                variants={moduleVariants}
                initial="hidden"
                animate="visible"
            >
                {/* -- Decorações Gráficas -- */}
                <div className="module-decoration corner top-left"></div>
                <div className="module-decoration corner top-right"></div>
                <div className="module-decoration corner bottom-left"></div>
                <div className="module-decoration corner bottom-right"></div>
                <div className="module-decoration scanline"></div>

                {/* -- Cabeçalho -- */}
                <motion.header className="module-header" variants={itemVariants}>
                    <h1 className="module-title">ESTABELECER_CONEXÃO</h1>
                    <p className="module-subtitle">A interface está pronta para receber a sua transmissão.</p>
                </motion.header>

                {/* -- Formulário (Ação Principal) -- */}
                <motion.div className="module-main-content" variants={itemVariants}>
                    <form className="contact-form">
                        <div className="form-field">
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="name">Seu Nome / Organização</label>
                        </div>
                        <div className="form-field">
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="email">Seu Endereço de E-mail</label>
                        </div>
                        <div className="form-field">
                            <textarea id="message" name="message" rows={5} required></textarea>
                            <label htmlFor="message">Sua Mensagem</label>
                        </div>
                        <button type="submit" className="submit-button">
                            <span>Enviar</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </motion.div>

                {/* -- Ações Secundárias e Links -- */}
                <motion.footer className="module-footer" variants={itemVariants}>
                    <p className="footer-title">// CANAIS_ALTERNATIVOS</p>
                    <div className="alternative-channels">
                        <button className="channel-action" onClick={handleCopyEmail}>
                            {emailCopied ? <Check size={16} className="success-icon" /> : <Copy size={16} />}
                            <span>Copiar E-mail</span>
                        </button>
                        {/* CORREÇÃO: Links atualizados */}
                        <a href="https://github.com/Flavsc" target="_blank" rel="noopener noreferrer" className="channel-action">
                            <Github size={16} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/flavio-carvalho-382b82263/" target="_blank" rel="noopener noreferrer" className="channel-action">
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </motion.footer>
            </motion.div>
        </div>
    );
}