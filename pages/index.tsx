import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import Homecards from './components/Homecards';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* Add metadata here */}
        <title>Cabin Fever</title>
      </Head>
      <Header />
      <main>
        <div className='heroImg bg-slate-400'>
          <div className='overlay w-full h-full relative'>
            <div className='md:absolute md:bottom-52 md:left-20 flex flex-col pt-32'>
              <h1>Enjoy Norway</h1>
              <div>
                <form className='flex flex-col md:flex-row mt-10  sm:mt-5 max-w-md'>
                  <input
                    className='border border-solid border-black md:mr-2 mt-2 p-2'
                    type='text'
                    placeholder='Destination'
                  />
                  <input
                    className='border border-solid border-black md:mr-2 mt-2 p-2'
                    type='text'
                    placeholder='Location'
                  />
                  <input
                    className='border border-solid border-black mt-2 p-2'
                    type='text'
                    placeholder='Date'
                  />
                  <input
                    className='button__primary md:ml-2'
                    type='submit'
                    value='Search'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mt-9 max-w-5xl text-center m-auto'>
          <h2>Explore Norway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
            etiam purus proin amet neque, lobortis accumsan. Eget libero enim
            vel odio quis. Imperdiet ut in nec sed leo orci enim, pharetra.
            Vitae rutrum enim mattis lacus, semper at in viverra orci. Luctus
            purus volutpat in maecenas ut libero ornare.
          </p>
          <div className='button__primary max-w-xs'>
            <Link href='/Results'>
              <a>Book Cabins</a>
            </Link>
          </div>
        </div>
        <div className='homeCards mt-8 max-w-7xl m-auto flex flex-wrap lg:justify-between justify-center px-2'>
          <Homecards />
          <Homecards />
          <Homecards />
          <Homecards />
        </div>
        <div className='max-w-7xl text-center m-auto my-6'>
          <div>
            <h3 className='font-bold'>Rent Out?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
              etiam purus proin amet neque, lobortis accumsan. Eget libero enim
              vel odio quis. Imperdiet ut in nec sed leo orci enim, pharetra.
              Vitae rutrum enim mattis lacus, semper at in viverra orci. Luctus
              purus volutpat in maecenas ut libero ornare.
            </p>
            <p>
              Vulputate scelerisque eget odio in rhoncus amet. Egestas molestie
              laoreet egestas donec imperdiet mi. Tellus nec gravida consectetur
              sit morbi odio eu amet phasellus. Faucibus tortor vitae ante purus
              in praesent orci imperdiet. Donec neque facilisis egestas eu.
              Tristique eleifend nulla amet sed. Non, consectetur sit a ultrices
              nibh tincidunt congue id nunc.
            </p>
          </div>
          <div className='mt-6'>
            <h4 className='font-bold'>SubHeading</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
              etiam purus proin amet neque, lobortis accumsan. Eget libero enim
              vel odio quis. Imperdiet ut in nec sed leo orci enim, pharetra.
              Vitae rutrum enim mattis lacus, semper at in viverra orci. Luctus
              purus volutpat in maecenas ut libero ornare.
            </p>
            <p>
              Vulputate scelerisque eget odio in rhoncus amet. Egestas molestie
              laoreet egestas donec imperdiet mi. Tellus nec gravida consectetur
              sit morbi odio eu amet phasellus. Faucibus tortor vitae ante purus
              in praesent orci imperdiet. Donec neque facilisis egestas eu.
              Tristique eleifend nulla amet sed. Non, consectetur sit a ultrices
              nibh tincidunt congue id nunc.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
