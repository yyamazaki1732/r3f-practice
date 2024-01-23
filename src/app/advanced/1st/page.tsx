'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Page2nd() {
  const router = useRouter();
  const height = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetScroll = height.current?.offsetHeight;
      if (window.scrollY >= targetScroll - window.innerHeight) {
        router.push('/advanced/2nd'); // 任意のページに遷移
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return (
    <div ref={height} className='h-[400vh] '>
      <div className='w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center'>
        advanced Page1st
      </div>
    </div>
  );
}
