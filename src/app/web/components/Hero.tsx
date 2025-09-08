import { motion, Variants } from 'framer-motion';
import HeroCanvas from '@components/3D/HeroCanvas';
import HudPanel from '@components/HudPanel';
import NoiseOverlay from '@components/NoiseOverlay';
import '@styles/components/Hero.scss';

export default function Hero() {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
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
    <section className="hero">
      <div className="hero-background">
        <NoiseOverlay />
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

        <motion.hr className="hero-divider" variants={itemVariants} />

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Creative Development & Digital Experiences
        </motion.p>
      </motion.div>

      <div className="hud-panel-wrapper">
        <HudPanel />
      </div>
    </section>
  );
}
