// portfolio/src/app/web/pages/Contact.tsx

import { useState, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Copy, Check, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios'; // Importe o axios
import '@styles/components/Contact.scss';

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
  const userEmail = 'flaviocarvalho.brz@gmail.com';

  // Estados para controlar o formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  // Atualiza o estado conforme o usuário digita
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envia os dados para o back-end ao submeter o formulário
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const toastId = toast.loading('Enviando mensagem...');

    try {
      // Acessa a URL de forma segura e flexível
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      if (!backendUrl) {
        // Medida de segurança caso a variável não seja encontrada
        throw new Error('A URL do backend não foi configurada.');
      }

      // Monta a URL completa do endpoint
      const endpoint = `${backendUrl}/send-email`;

      await axios.post(endpoint, formData);

      toast.success('Mensagem enviada com sucesso!', { id: toastId });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem.', { id: toastId });
      console.error('Erro no envio:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    toast.success('Endereço de e-mail copiado!');
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
          <h1 className="module-title">contato</h1>
          <p className="module-subtitle">mande uma mensagem.</p>
        </motion.header>

        {/* -- Formulário (Ação Principal) -- */}
        <motion.div className="module-main-content" variants={itemVariants}>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-field">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="name">seu Nome / organização</label>
            </div>
            <div className="form-field">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="email">seu e-mail</label>
            </div>
            <div className="form-field">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <label htmlFor="message">sua mensagem</label>
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={isSending}
            >
              <span>{isSending ? 'enviando...' : 'enviar'}</span>
              <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>

        {/* -- Ações Secundárias e Links -- */}
        <motion.footer className="module-footer" variants={itemVariants}>
          <p className="footer-title">// CANAIS_ALTERNATIVOS</p>
          <div className="alternative-channels">
            <button className="channel-action" onClick={handleCopyEmail}>
              {emailCopied ? (
                <Check size={16} className="success-icon" />
              ) : (
                <Copy size={16} />
              )}
              <span>Copiar E-mail</span>
            </button>
            <a
              href="https://github.com/Flavsc"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-action"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/flavio-carvalho-382b82263/"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-action"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
