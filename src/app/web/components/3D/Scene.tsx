import { useRef, useMemo } from 'react';
import { useFrame, RootState } from '@react-three/fiber';
import * as THREE from 'three';

// Componente da Cena 3D - Versão "Digital Stream"
export default function Scene() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Usamos useMemo para criar a geometria apenas uma vez
  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    // Armazenamos dados extras para cada partícula para animações complexas
    const randoms = new Float32Array(count); 

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      randoms[i] = Math.random();
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    
    return geometry;
  }, []);

  // Animação a cada frame
  useFrame((state: RootState, delta: number) => {
    if (!pointsRef.current) return;
    
    // Animação de fluxo contínuo
    pointsRef.current.rotation.x += delta * 0.02;
    pointsRef.current.rotation.y += delta * 0.03;

    const { pointer } = state;
    const targetQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(pointer.y * 0.3, pointer.x * 0.3, 0)
    );
    pointsRef.current.quaternion.slerp(targetQuaternion, 0.1);
  });

  return (
    <>
      <points ref={pointsRef}>
        <primitive object={particles} attach="geometry" />
        <pointsMaterial
          size={0.02}
          color="#f1f8f8ff"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}