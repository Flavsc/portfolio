import { motion, Variants } from 'framer-motion'; // Importe o tipo Variants
import NoiseOverlay from '@components/NoiseOverlay';
import '@styles/components/About.scss';

export default function About() {
  const containerVariants: Variants = {
    // Adicione a tipagem aqui
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
    // E adicione a tipagem aqui
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
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
              NÓS
            </h1>
          </motion.div>

          <motion.div className="about-content" variants={itemVariants}>
            <p className="about-text">
              A 166STŪDIOS é um estúdio de desenvolvimento criativo focado em
              criar experiências digitais únicas e memoráveis. A nossa paixão é
              unir design de vanguarda com tecnologia de ponta para construir
              soluções que não só funcionam bem, mas que também contam uma
              história.
            </p>
            <p className="about-text">
              Trabalhamos na interseção entre a arte e o código, explorando
              novas possibilidades e desafiando os limites do que é possível na
              web. Cada projeto é uma oportunidade para inovar.
            </p>
            <a href="contact" className="about-cta-button">
              Vamos Conversar
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
