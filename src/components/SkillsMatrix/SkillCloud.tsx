'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function SkillCloud() {
  const groupRef = useRef<THREE.Group>(null);
  const skills = [
    'AWS', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes',
    'Python', 'MLOps', 'Azure', 'GCP', 'FastAPI'
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 3;

        return (
          <Text
            key={skill}
            position={[
              radius * Math.cos(theta) * Math.sin(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(phi)
            ]}
            fontSize={0.3}
            color="#64FFDA"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}
