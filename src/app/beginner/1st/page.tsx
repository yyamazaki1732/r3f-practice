'use client';

import { Canvas } from '@react-three/fiber';

export default function Page1st() {
  return (
    <div id='canvas-container'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='blue' position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
