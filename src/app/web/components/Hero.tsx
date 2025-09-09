import { motion, Variants } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import HeroCanvas from './3D/HeroCanvas';
import '@styles/components/Hero.scss';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  return (
    <section className="hero">
      <div className="hero-background-canvas">
        <HeroCanvas />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          166studios
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Explorando a interseção entre a tecnologia e a arte.
        </motion.p>
        <motion.div variants={itemVariants}>
          <NavLink to="/portfolio/projects" className="hero-cta-button">
            Explorar Projetos
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
