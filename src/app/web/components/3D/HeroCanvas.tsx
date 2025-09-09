import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import Scene from './Scene.tsx';
import HeroRightElement from './HeroRightElement.tsx'; // Importe o novo componente

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <AdaptiveDpr pixelated />
      <Scene />
      <HeroRightElement /> {/* Adicione o novo componente aqui */}
      {/* Iluminação ambiente para que o objeto não fique totalmente escuro */}
      <ambientLight intensity={0.5} />
      {/* Uma luz direcional suave para definir as formas */}
      <directionalLight position={[1, 1, 1]} intensity={0.8} />
    </Canvas>
  );
}
