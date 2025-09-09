import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '@styles/components/About.scss';
import Skills from '@components/Skills';
import Vision from '@components/Vision';
import { useEffect, useContext } from 'react'; // 1. Importar useContext
import { ThemeContext } from '@context/ThemeContext'; // 2. Importar o ThemeContext

const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
  out: { opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
};

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // 3. Usar o ThemeContext para controlar o tema global
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Define o tema global como 'light', o que fará a Navbar mudar de cor
    setTheme('light');
    // Mantemos a classe no body para os estilos específicos da página
    document.body.classList.add('theme-light');

    // Função de limpeza que é executada quando o usuário sai da página
    return () => {
      // Reverte o tema global para 'dark'
      setTheme('dark');
      document.body.classList.remove('theme-light');
    };
  }, [setTheme]); // Adicionar setTheme como dependência do useEffect

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="about-page-container"
    >
      <section ref={ref} className="about-section">
        <div className="about-grid">
          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            O MANIFESTO
          </motion.h1>
          <div className="about-content">
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Na 166studios, o código é a matéria-prima para a criação de
              realidades digitais que desafiam o convencional. Cada projeto é
              uma oportunidade de fundir lógica e design de vanguarda para
              construir o inesperado.
            </motion.p>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Acreditamos em um digital com identidade, que pulsa com textura e
              atitude. Se você busca uma presença online que não pede licença
              para existir, vamos construir algo memorável juntos.
            </motion.p>
            <motion.a
              href="/portfolio/contact"
              className="about-cta-button"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Vamos Colaborar
            </motion.a>
          </div>
        </div>
      </section>
      <Vision />
      <Skills />
    </motion.div>
  );
}
