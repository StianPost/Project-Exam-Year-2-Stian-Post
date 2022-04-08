import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import type { NextPage } from 'next';

const Results: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <div>Results</div>
      <Footer />
    </>
  );
};

export default Results;
