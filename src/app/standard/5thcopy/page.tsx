'use client';

import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from '@/app/standard/5th/components/Model';
import Overlay from '@/app/standard/5th/components/Overlay';
import '@/app/standard/5th/page5th.css';

export default function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Canvas
        shadows
        eventSource={document.getElementById('root')}
        eventPrefix='client'
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset='city' />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  );
}
