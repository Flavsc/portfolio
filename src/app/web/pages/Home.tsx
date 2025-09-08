import Hero from '@components/Hero.tsx';
import { motion, Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 },
};

const pageTransition = {
  type: 'tween' as const, // CORRIGIDO
  ease: 'anticipate' as const, // CORRIGIDO
  duration: 0.8,
};

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="app"
    >
      <Hero />
    </motion.div>
  );
}
