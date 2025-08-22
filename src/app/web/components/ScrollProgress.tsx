import { motion, useScroll } from 'framer-motion';
import '@styles/components/ScrollProgress.scss';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
