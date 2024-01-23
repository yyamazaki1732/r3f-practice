'use client';

import dynamic from 'next/dynamic';
import { RenderTexture, PerspectiveCamera } from '@react-three/drei';

export default function Cube() {
  const TextComponent = dynamic(
    () => import('@/app/standard/3rd/components/TextComponent'),
    {
      ssr: false,
    }
  );

  const Dodecahedron = dynamic(
    () => import('@/app/standard/3rd/components/Dodecahedron'),
    {
      ssr: false,
    }
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach='map' anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach='background' args={['orange']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          {/* <Text ref={textRef} fontSize={4} color='#555'>
            hello
          </Text> */}
          {/* <TextComponent /> */}
          <Dodecahedron />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
