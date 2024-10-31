'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
// import inSphere from 'maath/random/dist/maath-random.esm';
import { inSphere } from 'maath/random';


// Add this type
type PointsRef = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial>;

export default function NeuralNetwork() {
  const ref = useRef<PointsRef>(null);
  const sphere = inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
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
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
