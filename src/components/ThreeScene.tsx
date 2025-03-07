
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Simplified Stars component with better performance
const Stars = ({ count = 1000 }) => {
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Generate stars in a sphere around the camera
      const radius = Math.random() * 40 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  const starsRef = useRef(null);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      // Simpler rotation to avoid performance issues
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  );
};

// Simplified AnimatedSphere with error handling
const AnimatedSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef(null);
  
  useFrame(() => {
    if (meshRef.current) {
      // Simple rotation with lower values to avoid performance issues
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

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

// Simplified GridLines with better performance
const GridLines = () => {
  const gridRef = useRef(null);
  
  return (
    <group ref={gridRef}>
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
          <lineBasicMaterial color="#3d245b" opacity={0.1} transparent />
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
          <lineBasicMaterial color="#3d245b" opacity={0.1} transparent />
        </line>
      ))}
    </group>
  );
};

const ThreeScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Safely mount the component
    setMounted(true);
    
    // Cleanup function
    return () => {
      setMounted(false);
    };
  }, []);

  // Don't render anything if not mounted to avoid hydration issues
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-cyber-dark via-cyber-black to-black">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        dpr={[0.4, 0.8]} // Lower DPR for even better performance
        gl={{ 
          antialias: false,
          powerPreference: 'low-power', 
          failIfMajorPerformanceCaveat: true 
        }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={["#0a0a0f", 15, 30]} />
        
        {/* Reduced star count for better performance */}
        <Stars count={800} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#8B5CF6" />
        
        <GridLines />
        
        {/* Only two animated spheres for better performance */}
        <AnimatedSphere position={[-2, 1, -2]} color="#8B5CF6" scale={0.5} />
        <AnimatedSphere position={[2, -1, -1]} color="#0ea5e9" scale={0.3} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.1} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
