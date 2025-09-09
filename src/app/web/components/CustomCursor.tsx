import { useState, useEffect, useRef } from 'react';
import '@styles/components/CustomCursor.scss';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const animationFrameId = useRef<number | null>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const moveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Lógica para detectar se o mouse está se movendo
      setIsMoving(true);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      moveTimeout.current = setTimeout(() => setIsMoving(false), 100);
    };

    const onMouseEnter = () => setIsHoveringLink(true);
    const onMouseLeave = () => setIsHoveringLink(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, .hero-cta-button, .form-submit-button, .nav-item, .details-button',
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        const deltaX = mouseX - lastMousePosition.current.x;
        const deltaY = mouseY - lastMousePosition.current.y;
        lastMousePosition.current = { x: mouseX, y: mouseY };

        // Calcula a rotação e a escala para o efeito de "cometa"
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        const scaleY = Math.min(
          1,
          Math.sqrt(deltaX ** 2 + deltaY ** 2) / 30 + 0.8,
        );

        ringRef.current.style.transform = `translate(${ringX - 12}px, ${ringY - 12}px) rotate(${angle}deg) scale(1, ${scaleY})`;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
    };
  }, []);

  const ringClassName = `custom-cursor-ring ${isHoveringLink ? 'hover' : ''} ${isMoving ? 'moving' : ''}`;
  const dotClassName = `custom-cursor-dot ${isHoveringLink ? 'hover' : ''}`;

  return (
    <>
      <div ref={ringRef} className={ringClassName}></div>
      <div ref={dotRef} className={dotClassName}></div>
    </>
  );
}
