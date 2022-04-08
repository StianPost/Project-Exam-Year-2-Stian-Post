import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact us - Cabin fever</title>
      </Head>
      <Header />
      <div>Contact</div>
      <Footer />
    </>
  );
};

export default Contact;
