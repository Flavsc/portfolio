import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "@styles/components/ProjectCard.scss";

// Tipos para as propriedades do cartão
type ProjectCardProps = {
title: string;
description: string;
techStack: string[];
link: string;
imageSrc?: string; // Nova propriedade para a imagem (opcional)
};

// Variantes para a animação de "hover"
const cardVariants: Variants = {
initial: { y: 0 },
hover: { y: -5, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", transition: { duration: 0.2, ease: "easeOut" } },
};

export default function ProjectCard({ title, description, techStack, link, imageSrc }: ProjectCardProps) {
return (
<motion.a
href={link}
target="_blank"
rel="noopener noreferrer"
className="project-card modern"
variants={cardVariants}
initial="initial"
whileHover="hover"
>
{imageSrc && (
<div className="card-image-container">
<img src={imageSrc} alt={title} className="card-image" />
</div>
)}
<div className="card-content">
<div className="card-header">
<h3 className="card-title">{title}</h3>
<ArrowUpRight className="card-icon" size={20} />
</div>
<p className="card-description">{description}</p>
<div className="card-footer">
<ul className="tech-stack-list">
{techStack.map((tech) => (
<li key={tech} className="tech-item">{tech}</li>
))}
</ul>
</div>
</div>
</motion.a>
);
}