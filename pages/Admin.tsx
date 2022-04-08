import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import type { NextPage } from 'next';

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin - Cabin fever</title>
      </Head>
      <Header />
      <div>Admin</div>
      <Footer />
    </>
  );
};

export default Admin;
