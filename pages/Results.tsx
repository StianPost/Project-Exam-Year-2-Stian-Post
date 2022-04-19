import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import type { NextPage } from 'next';
import Resultcards from './components/Resultcards';

const Results: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-6'>
        <div>search bar placeholder</div>
        <h1>Results</h1>
        <div className='flex justify-between mb-6'>
          <p>Showing xx out of ??</p>

          <div>Sort by menu</div>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='pr-10 mb-3 md:mb-0'>
            <h3>Filter</h3>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
          </div>
          <div>
            <Resultcards />
            <Resultcards />
            <Resultcards />
            <Resultcards />
            <Resultcards />
            <Resultcards />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Results;
