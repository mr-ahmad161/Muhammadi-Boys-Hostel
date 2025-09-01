import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import styled from 'styled-components';

const FloatingElementsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const FloatingSphere = ({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[0.1, 16, 16]} position={position}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const FloatingCube = ({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed + 1) * 0.3;
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.z = time * 0.2;
  });

  return (
    <Box ref={meshRef} args={[0.1, 0.1, 0.1]} position={position}>
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.4}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </Box>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Floating spheres */}
      <FloatingSphere position={[2, 2, -5]} color="#ff6b6b" speed={0.8} />
      <FloatingSphere position={[-3, 3, -3]} color="#4ecdc4" speed={1.2} />
      <FloatingSphere position={[4, 1, -4]} color="#45b7d1" speed={0.6} />
      <FloatingSphere position={[-2, 4, -6]} color="#96ceb4" speed={1.0} />
      <FloatingSphere position={[3, 5, -2]} color="#feca57" speed={0.9} />
      
      {/* Floating cubes */}
      <FloatingCube position={[1, 3, -4]} color="#ff9ff3" speed={1.1} />
      <FloatingCube position={[-4, 2, -5]} color="#54a0ff" speed={0.7} />
      <FloatingCube position={[5, 4, -3]} color="#5f27cd" speed={1.3} />
      <FloatingCube position={[-1, 1, -7]} color="#00d2d3" speed={0.8} />
      <FloatingCube position={[2, 6, -1]} color="#ff9f43" speed={1.0} />
    </>
  );
};

const FloatingElements = () => {
  return (
    <FloatingElementsContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </FloatingElementsContainer>
  );
};

export default FloatingElements;
