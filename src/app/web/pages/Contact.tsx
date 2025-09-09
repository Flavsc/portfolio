import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import '@styles/components/Contact.scss';

const pageVariants: Variants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.8,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada por: ${formData.name}`);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.section
        className="contact-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="contact-grid">
          <motion.div className="contact-info" variants={itemVariants}>
            <h1 className="contact-title">
              Vamos
              <br />
              Criar
            </h1>
            <p className="contact-text">
              Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre
              isso. Preencha o formulário ou envie-nos um e-mail.
            </p>
            <a href="mailto:flavsc.brz@gmail.com" className="contact-email">
              flavsc.brz@gmail.com
            </a>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-button">
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </motion.section>
    </motion.div>
  );
}
