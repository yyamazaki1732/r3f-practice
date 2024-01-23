'use client';

import { Canvas } from '@react-three/fiber';

export default function Page1st() {
  return (
    <div id='canvas-container'>
      <Canvas camera={{ position: [1, 10, -10], fov: 50 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color='blue' position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
