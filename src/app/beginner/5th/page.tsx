'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from '@/app/beginner/5th/components/Model';
import Overlay from '@/app/beginner/5th/components/Overlay';
import '@/app/beginner/5th/page5th.css';

export default function Page5th() {
  const overlay = useRef(null);
  const caption = useRef<HTMLElement | null>(null);
  const scroll = useRef(0);
  const eventSourceRef = useRef<HTMLElement | null>();

  useEffect(() => {
    // クライアントサイドでのみ実行されます
    if (eventSourceRef.current) {
      eventSourceRef.current = document.getElementById('root');
    }
  }, []);

  return (
    <>
      <Canvas
        shadows
        eventSource={eventSourceRef.current || undefined}
        eventPrefix='client'
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset='city' />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
      <div id='root'></div>
    </>
  );
}
