import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, RootState } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

export default function Scene() {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() =>
    // A contagem original (25000) parece alta, mas o tamanho (0.01) compensa.
    // Vamos usar um valor mais equilibrado como no original: 5000.
    random.inSphere(new Float32Array(5000), { radius: 1.5 }),
  );

  useFrame((state: RootState, delta: number) => {
    if (ref.current) {
      // Rotação base sutil
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Lógica para seguir o mouse
      const targetRotationX = state.mouse.y * 0.5;
      const targetRotationY = state.mouse.x * 0.5;

      // Suaviza o movimento para o alvo (efeito 'lerp')
      ref.current.rotation.x +=
        (targetRotationX - ref.current.rotation.x) * 0.02;
      ref.current.rotation.y +=
        (targetRotationY - ref.current.rotation.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e2d6fa" // Cor original
          size={0.006} // Tamanho original um pouco maior para visibilidade
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
