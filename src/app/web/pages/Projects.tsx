import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@components/ProjectCard';
import "@styles/components/Projects.scss";

// CORREÇÃO 1: Adicionamos a propriedade 'category' aos seus dados
const placeholderProjects = [
  {
    title: "Project_Orion",
    description: "Plataforma de visualização de dados em tempo real com uma arquitetura modular...",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "WebSocket"],
    link: "#",
    imageSrc: "https://via.placeholder.com/600/347CF7/FFFFFF?Text=Orion_Data",
    category: "FULL-STACK"
  },
  {
    title: "Module_Cerberus",
    description: "Sistema de autenticação centralizado com suporte para OAuth 2.0 e OpenID Connect...",
    techStack: ["Go", "JWT", "PostgreSQL", "gRPC"],
    link: "#",
    imageSrc: "https://via.placeholder.com/600/A964F7/FFFFFF?Text=Cerberus_Auth",
    category: "BACK-END"
  },
  {
    title: "Interface_Helios",
    description: "Design system e biblioteca de componentes reutilizáveis para garantir a consistência...",
    techStack: ["React", "Storybook", "Framer Motion", "SCSS"],
    link: "#",
    imageSrc: "https://via.placeholder.com/600/F7A834/FFFFFF?Text=Helios_UI",
    category: "FRONT-END"
  },
  {
    title: "Nexus_Pipeline",
    description: "Infraestrutura de CI/CD automatizada para a orquestração de builds, testes e deployments...",
    techStack: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
    link: "#",
    imageSrc: "https://via.placeholder.com/600/F7345E/FFFFFF?Text=Nexus_CI/CD",
    category: "BACK-END" // Pode ser 'DEVOPS', se criar essa categoria
  }
];

// Lista de filtros para a navegação
const filters = ["TODOS", "FRONT-END", "BACK-END", "FULL-STACK"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("TODOS");

    // CORREÇÃO 2: Filtramos os projetos com base no estado 'activeFilter'
    // useMemo otimiza a performance, evitando que o filtro seja recalculado a cada renderização
    const filteredProjects = useMemo(() => {
        if (activeFilter === "TODOS") {
            return placeholderProjects;
        }
        return placeholderProjects.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <motion.div 
            className="projects-page-layout"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.2 } }
            }}
        >
            {/* -- Barra Lateral (Painel de Controlo) -- */}
            <motion.aside className="projects-sidebar" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <div className="sidebar-header">
                    <h1 className="sidebar-title">PROJECT_ARCHIVES</h1>
                    <div className="sidebar-divider"></div>
                    <p className="sidebar-subtitle">
                        acesso autorizado ao diretório de implementações. de uma olhada em algum projeto.
                    </p>
                </div>
                <nav className="sidebar-nav">
                    <p>// FILTROS</p>
                    <ul>
                        {filters.map((filter) => (
                            <li 
                                key={filter}
                                className={activeFilter === filter ? "active" : ""}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.aside>

            {/* -- Grelha de Projetos (Conteúdo Principal) -- */}
            <motion.main className="projects-grid-container">
                <AnimatePresence>
                    <motion.div className="projects-grid">
                        {/* CORREÇÃO 3: Mapeamos a lista de projetos JÁ FILTRADA */}
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout // Anima a mudança de posição
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <ProjectCard 
                                    title={project.title}
                                    description={project.description}
                                    techStack={project.techStack}
                                    link={project.link}
                                    imageSrc={project.imageSrc}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.main>
        </motion.div>
    );
}