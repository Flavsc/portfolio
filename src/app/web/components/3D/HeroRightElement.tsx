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
      position={[viewport.width / 4.2, 0, 0]}
      scale={[0.6, 0.6, 0.6]} // Escala um pouco maior para a nova forma
    >
      {/* Geometria alterada para um Nó de Torus (TorusKnot) */}
      <torusKnotGeometry args={[0.4, 0.2, 100, 20]} />
      <meshStandardMaterial
        color="#e2d6fa"
        emissive="#e2d6fa"
        emissiveIntensity={0.7}
        wireframe={true} // A propriedade chave: renderiza apenas as arestas
      />
    </mesh>
  );
}
