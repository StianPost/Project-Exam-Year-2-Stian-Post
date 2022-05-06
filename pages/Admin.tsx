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
      <main className='px-2 md:px-4 lg:px-10'>
        <h1>Admin</h1>
        <div className='flex justify-between'>
          <div className='flex'>
            <button className='button button__primary'>Cabins</button>
            <button className='button button__secondary'>Enquires</button>
            <button className='button button__secondary'>Messages</button>
            <button className='button button__secondary'>Bookings</button>
          </div>
          <div>
            <button className='button button__primary'>Add</button>
          </div>
        </div>
        <div></div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
