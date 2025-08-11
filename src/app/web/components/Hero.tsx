import { useRef } from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroCanvas from "@components/3D/HeroCanvas";
import HudPanel from "@components/HudPanel";
import "@styles/components/Hero.scss";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!contentRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = contentRef.current.getBoundingClientRect();
        
        // Calcula a posição do rato como uma percentagem dentro do elemento
        const x = ((clientX - left) / width) * 100;
        const y = ((clientY - top) / height) * 100;

        contentRef.current.style.setProperty('--mouse-x', `${x}%`);
        contentRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <section className="hero">
            <div className="hero-grid-background"></div>
            <HeroCanvas />
            <div 
                ref={contentRef}
                className="hero-content" 
                onMouseMove={handleMouseMove}
            >
                <h1 className="hero-title">
                    166studios
                </h1>
            </div>
            
            <div className="hud-panel-wrapper">
              <HudPanel />
            </div>

            <motion.button
                onClick={scrollToContent}
                className="scroll-indicator"
                aria-label="Rolar para o conteúdo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <ChevronDown size={32} />
            </motion.button>
        </section>
    );
}