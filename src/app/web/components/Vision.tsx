import { motion } from 'framer-motion';
import { Eye, Code, Zap } from 'lucide-react';
import '@styles/components/Vision.scss';

export default function Vision() {
  return (
    <section className="vision">
      <div className="container vision-grid">
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card-header">
            <Eye size={24} />
            <h3>Visão Criativa</h3>
          </div>
          <p>
            Desenvolver interfaces que não apenas funcionem, mas que contem uma
            história e provoquem emoções.
          </p>
        </motion.div>
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="card-header">
            <Code size={24} />
            <h3>Código como Arte</h3>
          </div>
          <p>
            Tratar o desenvolvimento como um ofício, escrevendo um código limpo,
            eficiente e escalável que seja tão belo quanto o design.
          </p>
        </motion.div>
        <motion.div
          className="vision-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card-header">
            <Zap size={24} />
            <h3>Impacto e Performance</h3>
          </div>
          <p>
            Criar experiências digitais rápidas, acessíveis e otimizadas que
            cativem os usuários e alcancem resultados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
