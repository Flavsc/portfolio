import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function HeroRightElement() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { viewport } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      // Rotação mais lenta e deliberada para o cubo
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[viewport.width / 3, 0, 0]}
      scale={[0.4, 0.4, 0.4]} // Escala ajustada para o novo tamanho da geometria
    >
      {/* Geometria alterada para um cubo */}
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#e2d6fa"
        emissive="#e2d6fa"
        emissiveIntensity={0.5} // Aumentado o brilho para o wireframe
        wireframe={true} // A propriedade chave: renderiza apenas as arestas
      />
    </mesh>
  );
}
