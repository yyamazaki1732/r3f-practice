import Link from 'next/link';

export default function Home() {
  const siteMap = [
    {
      path: '/beginner/1st',
    },
    {
      path: '/beginner/2nd',
    },
    {
      path: '/beginner/3rd',
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
          {siteMap.map(({ path }) => {
            return (
              <li key={path}>
                <Link href={path}>{path}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
