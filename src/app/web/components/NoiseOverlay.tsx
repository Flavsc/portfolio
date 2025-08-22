import { useEffect, useRef } from 'react';
import '@styles/components/NoiseOverlay.scss';

const NoiseOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let animationFrameId: number;

    const noise = () => {
      if (!ctx) return;
      const idata = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.2) {
          // Aumentei a densidade do ruído
          buffer32[i] = 0xffffffff; // Ruído branco
        }
      }
      ctx.putImageData(idata, 0, 0);
    };

    const loop = () => {
      noise();
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="noise-overlay"></canvas>;
};

export default NoiseOverlay;
