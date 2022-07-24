import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

type DiaperButtonProps = {
  count: number;
  setCount: () => void;
  selected: boolean;
};

type ChangerOptionProps = {
  who: 'rival' | 'tyr' | 'both';
};

const Change: NextPage = () => {
  const [changer, setChanger] = useState<string>('rival');
  const [pooped, setPooped] = useState<boolean>(false);
  const [peed, setPeed] = useState<boolean>(false);
  const [diapersUsed, setDiapersUsed] = useState<number>(1);

  const handleChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChanger(e.target.value);
  };

  const handlePooped = () => {
    setPooped(!pooped);
  };

  const handlePeed = () => {
    setPeed(!peed);
  };

  const handleDiapersUsed = (value: number) => {
    setDiapersUsed(value);
  };

  return (
    <>
      <Head>
        <title>Change lil ro</title>
        <meta name='baby tracker' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-center h-screen p-4'>
        <h1 className='text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700'>
          Change lil ro
        </h1>

        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <section className='mb-4'>
            <h2>Who is a good parent?</h2>
            <hr />
            <div>
              <input
                id='rival'
                className='hidden peer'
                type='radio'
                value='rival'
                checked={changer === 'rival'}
                onChange={handleChanger}
              />
              <ChangerOption who='rival' />
            </div>
            <div>
              <input
                id='tyr'
                className='hidden peer'
                type='radio'
                value='tyr'
                checked={changer === 'tyr'}
                onChange={handleChanger}
              />
              <ChangerOption who='tyr' />
            </div>
            <div>
              <input
                id='both'
                className='hidden peer'
                type='radio'
                value='both'
                checked={changer === 'both'}
                onChange={handleChanger}
              />
              <ChangerOption who='both' />
            </div>
          </section>
          <section className='mb-4'>
            <h2>Did he 💩?</h2>
            <input
              type='checkbox'
              onChange={handlePooped}
              checked={pooped}></input>
          </section>
          <section className='mb-4'>
            <h2>Did he 💦?</h2>
            <input type='checkbox' onChange={handlePeed} checked={peed}></input>
          </section>
          <section className='mb-4'>
            <h2>How Many Diapers 🧷?</h2>
            <DiaperButton
              count={1}
              setCount={() => handleDiapersUsed(1)}
              selected={diapersUsed == 1 ? true : false}
            />
            <DiaperButton
              count={2}
              setCount={() => handleDiapersUsed(2)}
              selected={diapersUsed == 2 ? true : false}
            />
            <DiaperButton
              count={3}
              setCount={() => handleDiapersUsed(3)}
              selected={diapersUsed == 3 ? true : false}
            />
            {diapersUsed}
          </section>
        </form>
      </main>
    </>
  );
};
const DiaperButton = ({ count, setCount, selected }: DiaperButtonProps) => {
  return (
    <div
      onClick={setCount}
      className={` text-indigo-600 bg-transparent ${
        selected ? 'bg-indigo-600 text-white' : ''
      }mr-5 inline-block p-5  border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white active:text-indigo-500 focus:outline-none focus:ring`}>
      {selected} {count}
    </div>
  );
};

const ChangerOption = ({ who }: ChangerOptionProps) => {
  return (
    <label
      className='flex items-center justify-between  p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500'
      htmlFor={who}>
      <span> {who} </span>
    </label>
  );
};

export default Change;
