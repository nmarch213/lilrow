import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

type TechnologyCardProps = {
  name: string;
  description: string;
  route?: string;
};

const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <Head>
        <title>Rowan Tracker</title>
        <meta name='baby tracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center h-screen p-4'>
        <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700'>
          Rowan Tracker
        </h1>
        <div className='grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3'>
          <TechnologyCard
            name='Change Rowan'
            description='Use this when changing the little rascal rowan'
            route='/change'
          />
          <TechnologyCard
            name='Feed Rowan'
            description='This is where we will track feeding lil ro'
            route='/feed'
          />
          <TechnologyCard
            name='Pump'
            description='You got to pump it up'
            route='/pump'
          />
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({ name, description, route }: TechnologyCardProps) => {
  return (
    <Link href={route!}>
      <section className='flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105'>
        <h1 className='text-xl text-gray-700'>{name}</h1>
        <p className='text-sm text-gray-600'>{description}</p>
      </section>
    </Link>
  );
};

export default Home;
