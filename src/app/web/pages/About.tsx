import { motion, Variants } from 'framer-motion';
import NoiseOverlay from '@components/NoiseOverlay';
import Skills from '../components/Skills'; // CORRIGIDO
import '@styles/components/About.scss';

const pageVariants: Variants = {
  initial: { opacity: 0, x: '-100vw' },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: '100vw' },
};

const pageTransition = {
  type: 'tween' as const, // CORRIGIDO
  ease: 'anticipate' as const, // CORRIGIDO
  duration: 0.8,
};

export default function About() {
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
      <NoiseOverlay />
      <motion.section
        className="about-section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="about-grid">
          <motion.div className="about-title-container" variants={itemVariants}>
            <h1 className="about-title">
              SOBRE
              <br />
              MIM
            </h1>
          </motion.div>

          <motion.div className="about-content" variants={itemVariants}>
            <p className="about-text">
              Olá! Sou Flávio, um desenvolvedor criativo apaixonado por
              construir experiências digitais únicas e memoráveis. Minha missão
              é unir design de vanguarda com tecnologia de ponta para criar
              soluções que não só funcionam bem, mas que também contam uma
              história e provocam uma emoção.
            </p>
            <p className="about-text">
              Atuo na interseção entre a arte e o código, explorando novas
              possibilidades e desafiando os limites do que é possível na web.
              Cada projeto é uma tela em branco e uma oportunidade para inovar.
            </p>
            <a href="/portfolio/contact" className="about-cta-button">
              Vamos Conversar
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Skills />
    </motion.div>
  );
}
