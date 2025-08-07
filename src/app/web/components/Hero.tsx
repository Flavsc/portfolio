import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroCanvas from "@components/3D/HeroCanvas";
import HudPanel from "@components/HudPanel";
import "@styles/components/Hero.scss";

export default function Hero() {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section className="hero">
            <div className="hero-grid-background"></div>
            <HeroCanvas />
            <div className="hero-content">
                <h1 className="hero-title" data-text="166studios">
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