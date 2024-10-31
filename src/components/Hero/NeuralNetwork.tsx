'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random';

type PointsRef = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;


interface NeuralNetworkProps {
  opacity?: number;
}

export default function NeuralNetwork({ opacity = 1 }: NeuralNetworkProps) {
  const ref = useRef<THREE.Mesh>(null);

// export default function NeuralNetwork() {
//   const ref = useRef<PointsRef>(null);
  const particleCount = 7000;
  
  const sphere = useMemo(() => {
    return inSphere(new Float32Array(particleCount * 3), { radius: 1.5 }) as Float32Array;
  }, []);

  const connections = useMemo(() => {
    const lines = new Float32Array(particleCount * 6);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const i6 = i * 6;
      lines[i6] = sphere[i3];
      lines[i6 + 1] = sphere[i3 + 1];
      lines[i6 + 2] = sphere[i3 + 2];
      lines[i6 + 3] = sphere[i3] + (Math.random() - 0.5) * 0.2;
      lines[i6 + 4] = sphere[i3 + 1] + (Math.random() - 0.5) * 0.2;
      lines[i6 + 5] = sphere[i3 + 2] + (Math.random() - 0.5) * 0.2;
    }
    return lines;
  }, [sphere]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      ref.current.rotation.z -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#64FFDA"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount * 2}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          attach="material"
          color="#64FFDA"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
