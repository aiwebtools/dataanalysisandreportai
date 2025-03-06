
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating sphere component
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
    <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
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

// Animated box component
const AnimatedBox = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Rotating motion
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Box ref={meshRef} args={[scale, scale, scale]} position={position}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.7} 
        emissive={color} 
        emissiveIntensity={0.3}
      />
    </Box>
  );
};

// Animated torus component
const AnimatedTorus = ({ position, color, scale = 1, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Rotating motion
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3 * speed;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.4 * speed;
    }
  });

  return (
    <Torus 
      ref={meshRef} 
      args={[scale * 1.5, scale * 0.5, 16, 32]} 
      position={position}
    >
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.8} 
        emissive={color} 
        emissiveIntensity={0.5}
      />
    </Torus>
  );
};

// Grid lines background
const GridLines = () => {
  return (
    <group>
      {/* Horizontal lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([-15, i - 10, 0, 15, i - 10, 0])}
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
      
      {/* Vertical lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([i - 10, -15, 0, i - 10, 15, 0])}
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
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      className="!fixed inset-0 -z-10"
      dpr={[1, 2]} // Adjust based on performance needs
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      
      <GridLines />
      
      {/* Main objects */}
      <AnimatedSphere 
        position={[-3, 1, -2]} 
        color="#8B5CF6" 
        scale={1.2} 
        speed={0.8} 
      />
      <AnimatedBox 
        position={[3, -1, -1]} 
        color="#0ea5e9" 
        scale={1} 
        speed={1.2} 
      />
      <AnimatedTorus 
        position={[0, 2, -3]} 
        color="#ec4899" 
        scale={0.8} 
        speed={1} 
      />

      {/* Additional background objects */}
      <AnimatedSphere position={[5, 3, -5]} color="#10b981" scale={0.6} speed={0.5} />
      <AnimatedBox position={[-5, -2, -6]} color="#fde047" scale={0.7} speed={0.6} />
      <AnimatedSphere position={[-4, 4, -7]} color="#0ea5e9" scale={0.5} speed={0.7} />
      
      {/* Controls - limiting to prevent extreme rotations */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        rotateSpeed={0.5} 
        autoRotate 
        autoRotateSpeed={0.5} 
        minPolarAngle={Math.PI / 3} 
        maxPolarAngle={Math.PI / 1.5} 
      />
    </Canvas>
  );
};

export default ThreeScene;
