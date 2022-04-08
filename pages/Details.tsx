import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import type { NextPage } from 'next';

const Details: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cabin title</title>
      </Head>
      <Header />
      <div>Details</div>
      <Footer />
    </>
  );
};

export default Details;
