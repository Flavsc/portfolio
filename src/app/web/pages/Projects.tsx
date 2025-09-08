import { motion, Variants } from 'framer-motion';
import ProjectCard from '@components/ProjectCard';
import NoiseOverlay from '@components/NoiseOverlay';

// Imports do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import '@styles/components/Projects.scss';

const projectData = [
  {
    id: 1,
    title: 'Mazca - Streetwear E-commerce',
    description:
      'E-commerce de moda urbana focado em roupas streetwear, com design moderno e experiência de usuário fluida.',
    imageUrl:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop',
    tags: ['E-commerce', 'Streetwear', 'Next.js', 'TypeScript'],
    link: 'https://www.mazca.com.br',
  },
  {
    id: 2,
    title: 'Music Visualizer Interativo',
    description:
      'Uma experiência web imersiva que transforma música em arte visual. Construído com React, Three.js e a Web Audio API para criar visuais 3D dinâmicos.',
    imageUrl:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'Web Audio API', 'Framer Motion'],
    link: '#', // Lembre-se de colocar o link quando o projeto estiver pronto
  },
  {
    id: 3,
    title: 'Mazca - Streetwear E-commerce',
    description:
      'E-commerce de moda urbana focado em roupas streetwear, com design moderno e experiência de usuário fluida.',
    imageUrl:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop',
    tags: ['E-commerce', 'Streetwear', 'Next.js', 'TypeScript'],
    link: 'https://www.mazca.com.br',
  },
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <NoiseOverlay />
      <section className="projects-section">
        <motion.div
          className="projects-container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="projects-title"
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Projetos
          </motion.h1>

          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={30} // Espaço entre os slides
            slidesPerView={1} // Slides visíveis por defeito
            navigation // Ativa os botões de navegação
            scrollbar={{ draggable: true }} // Ativa a barra de progresso arrastável
            className="projects-carousel"
            breakpoints={{
              // a partir de 768px de largura
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // a partir de 1200px de largura
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {projectData.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </>
  );
}
