import Link from 'next/link';

export default function Home() {
  const standardSiteMap = [
    {
      path: '/standard/1st',
      heading: 'Setting up the Canvas',
    },
    {
      path: '/standard/2nd',
      heading: 'Basic demo',
    },
    {
      path: '/standard/3rd',
      heading: 'drei/RenderTexture',
    },
    {
      path: '/standard/4th',
      heading: 'Environment blur and transitions',
    },
    {
      path: '/standard/5th',
      heading: 'Camera Scroll',
    },
    {
      path: '/standard/5thcopy',
      heading: 'Camera Scroll',
    },
    {
      path: '/standard/6th',
      heading: 'Scrollcontrols + GLTF',
    },
    {
      path: '/standard/7th',
      heading: 'Shadermaterials',
    },
  ];
  const advancedSiteMap = [
    {
      path: '/advanced/1st',
      heading: 'scroll page transition',
    },
  ];
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-y-8'>
        <h1>MENU</h1>
        <ul className='flex gap-x-20'>
          <li className='flex flex-col gap-y-4'>
            <h2 className='text-2xl font-bold'>Standard</h2>
            <ul className='flex flex-col gap-y-4'>
              {standardSiteMap.map(({ path, heading }) => {
                return (
                  <li key={path}>
                    <Link href={path}>
                      {heading && <span className='text-xl'>{heading}</span>}
                      <span className='block text-gray-500'>{path}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className='flex flex-col gap-y-4'>
            <h2 className='text-2xl font-bold'>Advanced</h2>
            <ul className='flex flex-col gap-y-4'>
              {advancedSiteMap.map(({ path, heading }) => {
                return (
                  <li key={path}>
                    <Link href={path}>
                      {heading && <span className='text-xl'>{heading}</span>}
                      <span className='block text-gray-500'>{path}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}
