import Link from 'next/link';

export default function Home() {
  const siteMap = [
    {
      path: '/beginner/1st',
      heading: 'Setting up the Canvas',
    },
    {
      path: '/beginner/2nd',
      heading: 'Basic demo',
    },
    {
      path: '/beginner/3rd',
      heading: 'drei/RenderTexture',
    },
    {
      path: '/beginner/4th',
    },
    {
      path: '/beginner/5th',
    },
  ];
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-col gap-y-8'>
        <h1>MENU</h1>
        <ul className='flex flex-col gap-y-4'>
          {siteMap.map(({ path, heading }) => {
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
      </div>
    </main>
  );
}
