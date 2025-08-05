import { Canvas } from '@react-three/fiber';
import { Environment, PerformanceMonitor } from '@react-three/drei';
import Scene from './Scene';
import { Suspense, useState } from 'react';

export default function HeroCanvas() {
  const [dpr, setDpr] = useState(1.5);
  return (
    <div className="hero-canvas-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={dpr}>
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
        <ambientLight intensity={0.2} />
        <pointLight color="#305033" position={[-10, -10, -10]} intensity={10} />
        <pointLight color="white" position={[10, 10, 10]} intensity={15} />
        <Suspense fallback={null}>
            <Scene />
            <Environment files="/studio_small_03_1k.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
}