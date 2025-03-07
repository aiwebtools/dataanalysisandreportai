
import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

// Create a much simpler fallback component that doesn't use react-three-fiber
const ThreeScene = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    
    // Only create scene if component is mounted
    if (!mounted) return;
    
    // Create a simple, lightweight Three.js scene
    try {
      // Get the container element
      const container = document.getElementById('scene-container');
      if (!container) return;
      
      // Create renderer with minimal settings
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
      container.appendChild(renderer.domElement);
      
      // Simple scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#0a0a0f');
      scene.fog = new THREE.Fog('#0a0a0f', 15, 30);
      
      // Camera
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);
      
      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientLight);
      
      const pointLight = new THREE.PointLight(0x8B5CF6, 0.3);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);
      
      // Add stars
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        depthWrite: false,
      });
      
      const starsVertices = [];
      for (let i = 0; i < 600; i++) {
        const radius = Math.random() * 30 + 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        starsVertices.push(x, y, z);
      }
      
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
      
      // Simple grid lines
      for (let i = -2; i <= 2; i++) {
        // Horizontal lines
        const hGeometry = new THREE.BufferGeometry();
        const hVertices = new Float32Array([-5, i, 0, 5, i, 0]);
        hGeometry.setAttribute('position', new THREE.BufferAttribute(hVertices, 3));
        const hMaterial = new THREE.LineBasicMaterial({ color: 0x3d245b, opacity: 0.1, transparent: true });
        const hLine = new THREE.Line(hGeometry, hMaterial);
        scene.add(hLine);
        
        // Vertical lines
        const vGeometry = new THREE.BufferGeometry();
        const vVertices = new Float32Array([i, -5, 0, i, 5, 0]);
        vGeometry.setAttribute('position', new THREE.BufferAttribute(vVertices, 3));
        const vMaterial = new THREE.LineBasicMaterial({ color: 0x3d245b, opacity: 0.1, transparent: true });
        const vLine = new THREE.Line(vGeometry, vMaterial);
        scene.add(vLine);
      }
      
      // Add auto rotation
      const autoRotate = () => {
        stars.rotation.y += 0.0005;
      };
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        autoRotate();
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Clean up function
      return () => {
        console.log('Cleaning up Three.js scene');
        window.removeEventListener('resize', handleResize);
        
        // Dispose of resources
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            }
          }
        });
        
        renderer.dispose();
        
        // Remove canvas from DOM
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error('Failed to initialize Three.js scene:', error);
      return () => {}; // Return empty cleanup function if initialization fails
    }
  }, [mounted]);
  
  return (
    <div 
      id="scene-container" 
      className="fixed inset-0 -z-10 bg-gradient-to-br from-cyber-dark via-cyber-black to-black"
      aria-hidden="true"
    ></div>
  );
};

export default ThreeScene;
