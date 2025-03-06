
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Simplified animated floating sphere component
const AnimatedSphere = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Bobbing up and down motion
      meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.2;
      // Slight rotation
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.2 * speed;
    }
  });

  return (
    <Sphere ref={meshRef} args={[scale, 16, 16]} position={position}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.2} 
        metalness={0.8} 
        emissive={color} 
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
};

// Simplified grid lines background
const GridLines = () => {
  return (
    <group>
      {/* Horizontal lines - reduced count */}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([-10, i - 5, 0, 10, i - 5, 0])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#3d245b" 
            opacity={0.2} 
            transparent 
            linewidth={1} 
          />
        </line>
      ))}
      
      {/* Vertical lines - reduced count */}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([i - 5, -10, 0, i - 5, 10, 0])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#3d245b" 
            opacity={0.2} 
            transparent 
            linewidth={1} 
          />
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
      camera={{ position: [0, 0, 10], fov: 50 }}
      className="!fixed inset-0 -z-10"
      dpr={[1, 1.5]} // Reduced DPR for better performance
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      
      <GridLines />
      
      {/* Reduced number of elements */}
      <AnimatedSphere 
        position={[-3, 1, -2]} 
        color="#8B5CF6" 
        scale={1.2} 
        speed={0.8} 
      />
      <AnimatedSphere 
        position={[3, -1, -1]} 
        color="#0ea5e9" 
        scale={1} 
        speed={1.2} 
      />
      
      {/* Controls - limiting to prevent extreme rotations */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.5} 
        autoRotate 
        autoRotateSpeed={0.3} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5} 
      />
    </Canvas>
  );
};

export default ThreeScene;
