'use client';

// import { useEffect, useRef } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Page2nd() {
//   const router = useRouter();
//   const height = useRef<HTMLDivElement>(null);

//   return (
//     <div ref={height} className='h-[400vh]'>
//       <div className='w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center'>
//         advanced Page3rd
//       </div>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Page3rd() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const height = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      // const currentScroll =
      //   window.pageYOffset || document.documentElement.scrollTop;

      if (window.scrollY < 0) {
        router.push('/advanced/2nd'); // 任意のページに遷移
      }
      // setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // スクロール位置を更新
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return (
    <div ref={height} className='h-[400vh]'>
      <div className='w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center'>
        advanced Page3rd
      </div>
    </div>
  );
}
