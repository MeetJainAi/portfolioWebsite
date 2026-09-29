"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Component, useEffect, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { pointerRef, scrollRef } from "./signals";

function Limb({ side }: { side: 1 | -1 }) {
  const pivot = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!pivot.current) return;
    const wave = Math.sin(state.clock.elapsedTime * 0.9 + side) * 0.06;
    const scrollLift = scrollRef.current * 0.45 * side;
    pivot.current.rotation.z = THREE.MathUtils.damp(
      pivot.current.rotation.z,
      0.35 * side + wave + scrollLift,
      3,
      delta
    );
  });

  return (
    <group ref={pivot} position={[0.5 * side, 0.58, 0]}>
      <mesh position={[0.08 * side, -0.38, 0]} castShadow>
        <capsuleGeometry args={[0.085, 0.62, 6, 16]} />
        <meshStandardMaterial color="#2a2633" metalness={0.62} roughness={0.28} />
      </mesh>
    </group>
  );
}

function Agent() {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.MeshStandardMaterial>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useFrame((state, delta) => {
    if (!root.current || !head.current) return;
    const t = reduce.current ? 0 : state.clock.elapsedTime;
    const scroll = scrollRef.current;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, -0.25 + scroll * 1.05, 2.4, delta);
    root.current.position.y = -0.7 + (reduce.current ? 0 : Math.sin(t * 1.15) * 0.045);
    const lookY = (pointerRef.x - 0.5) * 0.7;
    const lookX = (pointerRef.y - 0.5) * 0.35;
    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, lookY, 4, delta);
    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, lookX, 4, delta);
    if (ring.current && !reduce.current) {
      ring.current.rotation.z = t * 0.28;
      ring.current.rotation.x = 1.05 + scroll * 0.55;
      ring.current.scale.setScalar(1 + scroll * 0.18);
    }
    if (core.current && !reduce.current) {
      core.current.emissiveIntensity = 1.1 + Math.sin(t * 2.4) * 0.45;
    }
  });

  return (
    <group ref={root} position={[0, -0.7, 0]}>
      <mesh ref={ring} rotation={[1.15, 0.15, 0]}>
        <torusGeometry args={[1.05, 0.011, 12, 96]} />
        <meshStandardMaterial color="#ffb25a" emissive="#ffb25a" emissiveIntensity={0.85} roughness={0.3} />
      </mesh>
      <mesh rotation={[1.25, 0.5, 0.4]}>
        <torusGeometry args={[0.78, 0.006, 8, 80]} />
        <meshStandardMaterial color="#5ee0b5" emissive="#5ee0b5" emissiveIntensity={0.55} />
      </mesh>

      <group ref={head} position={[0, 1.12, 0]}>
        <mesh>
          <sphereGeometry args={[0.48, 48, 48]} />
          <meshStandardMaterial color="#241f2c" metalness={0.72} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.05, 0.38]}>
          <sphereGeometry args={[0.13, 24, 24]} />
          <meshStandardMaterial color="#ffb25a" emissive="#ff9a3c" emissiveIntensity={1.8} />
        </mesh>
        <mesh position={[0, -0.1, 0.42]} rotation={[0.15, 0, 0]}>
          <boxGeometry args={[0.42, 0.05, 0.04]} />
          <meshStandardMaterial color="#5ee0b5" emissive="#5ee0b5" emissiveIntensity={0.55} />
        </mesh>
      </group>

      <mesh position={[0, 0.32, 0]}>
        <capsuleGeometry args={[0.38, 0.46, 8, 24]} />
        <meshStandardMaterial color="#1c1824" metalness={0.58} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0.4, 0.34]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial ref={core} color="#5ee0b5" emissive="#5ee0b5" emissiveIntensity={1.2} />
      </mesh>

      <Limb side={-1} />
      <Limb side={1} />

      <mesh position={[-0.16, -0.42, 0.04]}>
        <capsuleGeometry args={[0.1, 0.48, 4, 12]} />
        <meshStandardMaterial color="#2a2633" metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0.16, -0.42, 0.04]}>
        <capsuleGeometry args={[0.1, 0.48, 4, 12]} />
        <meshStandardMaterial color="#2a2633" metalness={0.5} roughness={0.35} />
      </mesh>
    </group>
  );
}

class Guard extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Fallback() {
  return (
    <div className="grid h-full place-items-center">
      <div className="relative h-64 w-40">
        <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-full bg-[#241f2c] shadow-[0_0_30px_#ffb25a]" />
        <div className="absolute left-1/2 top-20 h-36 w-24 -translate-x-1/2 rounded-[40px] bg-[#1c1824]" />
        <div className="absolute left-1/2 top-[7.5rem] h-4 w-4 -translate-x-1/2 rounded-full bg-[#5ee0b5]" />
      </div>
    </div>
  );
}

export default function AgentCanvas() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointerRef.x = event.clientX / window.innerWidth;
      pointerRef.y = event.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Guard fallback={<Fallback />}>
      <Canvas
        camera={{ position: [0.15, 0.2, 5.4], fov: 32 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[3.2, 4, 2.4]} intensity={1.8} color="#fff1dc" />
        <pointLight position={[-2.2, 1.2, 1.6]} intensity={12} color="#5ee0b5" distance={8} />
        <pointLight position={[1.8, 0.4, 1.8]} intensity={10} color="#ffb25a" distance={7} />
        <Agent />
      </Canvas>
    </Guard>
  );
}
