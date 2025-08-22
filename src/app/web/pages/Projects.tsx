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
    title: 'Projeto Cygnus',
    description:
      'Uma plataforma interativa de visualização de dados astronómicos, construída com React e Three.js para uma experiência imersiva.',
    imageUrl:
      'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop',
    tags: ['React', 'Three.js', 'API', 'UX/UI'],
    link: '#',
  },
  {
    id: 2,
    title: 'Neon Nexus',
    description:
      'E-commerce de moda urbana com um design arrojado e animações fluidas, focado na performance e na experiência do utilizador.',
    imageUrl:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1974&auto=format&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Framer Motion'],
    link: '#',
  },
  {
    id: 3,
    title: 'Áudio Arkive',
    description:
      'Aplicação web para músicos e produtores, permitindo o upload, partilha e colaboração em projetos musicais na nuvem.',
    imageUrl:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Vue.js', 'Node.js', 'Firebase', 'Web Audio API'],
    link: '#',
  },
  {
    id: 4,
    title: 'Brutal Forms',
    description:
      'Gerador de formulários com uma estética brutalista, focado na simplicidade, acessibilidade e performance.',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    tags: ['SvelteKit', 'CSS', 'HTML'],
    link: '#',
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
