import { motion, Variants } from 'framer-motion';
import ProjectCard from '@components/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Project } from '../../types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import '@styles/components/Projects.scss';

const projectData: Project[] = [
  {
    id: 1,
    title: 'Mazca Clothing - Streetwear E-commerce',
    description:
      'Plataforma completa de e-commerce para uma marca de streetwear, focada em performance e experiência de usuário.',
    imageUrl:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2069&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Java'],
    liveUrl: 'https://www.mazca.com.br',
    repoUrl: 'https://github.com/Flavsc/mazca-clothing',
    caseStudy: {
      problem:
        'O cliente precisava de uma plataforma de vendas online robusta, com autenticação segura, gerenciamento de produtos e um checkout eficiente.',
      solution:
        'Desenvolvi um e-commerce full-stack com Next.js para o frontend e backend, utilizando Prisma como ORM para um banco de dados PostgreSQL e Auth.js para autenticação social e por credenciais.',
    },
  },
  {
    id: 2,
    title: 'MOUSIK - Visualizer Interativo e Synth',
    description:
      'Uma experiência web imersiva que transforma música em arte visual 3D em tempo real.',
    imageUrl:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'Web Audio API', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
    caseStudy: {
      problem:
        'Criar uma aplicação web performática que pudesse analisar dados de áudio em tempo real e renderizar uma cena 3D complexa sem perda de frames.',
      solution:
        'Utilizei a Web Audio API para capturar e analisar a frequência do áudio, e o Three.js para manipular a geometria de partículas em uma cena 3D, criando um visualizador reativo e fluido.',
    },
  },
  {
    id: 3,
    title: 'Portfolio 166Studios',
    description:
      'O site que você está vendo agora. Um playground para experimentação com tecnologias de ponta.',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'SCSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Flavsc/166studios',
    caseStudy: {
      problem:
        'Desenvolver um portfólio que não apenas listasse projetos, mas que também demonstrasse minhas habilidades em design, animação e desenvolvimento 3D.',
      solution:
        'Criei uma Single Page Application com uma forte identidade visual, utilizando Three.js para a cena 3D do hero, Framer Motion para animações e uma arquitetura de componentes escalável.',
    },
  },
];

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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
            spaceBetween={30}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            className="projects-carousel"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2.5,
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
    </motion.div>
  );
}
