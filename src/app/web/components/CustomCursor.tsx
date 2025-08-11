import { useState, useEffect, useRef } from 'react';
import '@styles/components/CustomCursor.scss';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        // Posição do rato "real"
        let mouseX = 0;
        let mouseY = 0;
        // Posição do anel (que segue com atraso)
        let ringX = 0;
        let ringY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseEnter = () => setIsHoveringLink(true);
        const onMouseLeave = () => setIsHoveringLink(false);

        // Adiciona listeners a todos os elementos interativos
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });
        window.addEventListener('mousemove', onMouseMove);

        // Animação a cada frame para performance máxima
        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
            if (ringRef.current) {
                // Interpolação linear (lerp) para o efeito de arrasto suave
                ringX += (mouseX - ringX) * 0.2;
                ringY += (mouseY - ringY) * 0.2;
                ringRef.current.style.transform = `translate(${ringX - 12}px, ${ringY - 12}px)`;
            }
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className={`custom-cursor-ring ${isHoveringLink ? 'hover' : ''}`}></div>
            <div ref={dotRef} className="custom-cursor-dot"></div>
        </>
    );
}