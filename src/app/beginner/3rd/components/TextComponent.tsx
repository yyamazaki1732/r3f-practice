'use client';

import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function TextComponent() {
  const textRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <Text ref={textRef} fontSize={4} color='#555'>
      hello
    </Text>
  );
}
