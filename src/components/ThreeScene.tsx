
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Simplified animated floating sphere component
const AnimatedSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    const animate = () => {
      if (!meshRef.current) return;
      
      // Simple rotation
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.002;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <Sphere ref={meshRef} args={[scale, 8, 8]} position={position}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.2} 
        metalness={0.8} 
      />
    </Sphere>
  );
};

// Simplified background component
const GridLines = () => {
  return (
    <group>
      {Array.from({ length: 5 }, (_, i) => (
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([-5, i - 2, 0, 5, i - 2, 0])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3d245b" opacity={0.2} transparent />
        </line>
      ))}
      
      {Array.from({ length: 5 }, (_, i) => (
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([i - 2, -5, 0, i - 2, 5, 0])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3d245b" opacity={0.2} transparent />
        </line>
      ))}
    </group>
  );
};

const ThreeScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="!fixed inset-0 -z-10"
      dpr={[0.5, 1]} // Reduced DPR for better performance
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#8B5CF6" />
      
      <GridLines />
      
      <AnimatedSphere position={[-2, 1, -2]} color="#8B5CF6" scale={0.8} />
      <AnimatedSphere position={[2, -1, -1]} color="#0ea5e9" scale={0.6} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.2} 
        autoRotate 
        autoRotateSpeed={0.1} 
      />
    </Canvas>
  );
};

export default ThreeScene;
