import Footer from '../layout/Footer';
import Head from 'next/head';
import Header from '../layout/Header';
import Link from 'next/link';
import type { NextPage } from 'next';
import Resultcards from '../../components/Resultcards';
import { apiCall } from '../../lib/const';
import { getCabins } from '../../lib/api';

export async function getStaticProps() {
  const cabinArray = await getCabins(apiCall);

  return {
    props: { cabins: cabinArray },
  };
}

const Results = ({ cabins }: any) => {
  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-2 sm:px-10'>
        <div>search bar placeholder</div>
        <h1 className='font-semibold text-primary'>Results</h1>
        <div className='flex justify-between mb-6'>
          <p>Showing xx out of ??</p>

          <div className='button__secondary'>Sort by menu</div>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='mb-3 w-80 md:mb-0'>
            <h3>Filter</h3>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
          </div>
          <div>
            {cabins.map(({ id, title, heroImg, price }: any): any => {
              return (
                <Resultcards
                  key={id}
                  title={title}
                  heroImg={heroImg}
                  id={id}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Results;
