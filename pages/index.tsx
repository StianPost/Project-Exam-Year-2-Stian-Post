import { BaseURL } from '../lib/const';
import FeaturedCards from '../components/home/FeaturedCards';
import Footer from '../components/layout/Footer';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Link from 'next/link';
import { getCabins } from '../lib/api';

export async function getStaticProps() {
  const cabinArray = await getCabins(BaseURL + '/cabins');

  return {
    props: { cabins: cabinArray },
  };
}

const Home = () => {
  return (
    <>
      <Head>
        {/* Add metadata here */}
        <title>Cabin Fever</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={`Cabinfeever's homepage, where you can book your dream cabin, visit today!`}
        />
      </Head>
      <Header />
      <main>
        <div className='heroImg loadingBG relative'>
          <div className='heroOverlay text-white flex flex-col sm:pt-32 justify-center items-center'>
            <h1>Visit Norway Today!</h1>
            <p className='max-w-4xl mb-4 font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
              etiam purus proin amet neque, lobortis accumsan. Eget libero enim
              vel odio quis. Imperdiet ut in nec sed leo orci enim, pharetra.
              Vitae rutrum enim mattis lacus, semper at in viverra orci. Luctus
              purus volutpat in maecenas ut libero ornare.
            </p>
            <Link href='/cabins'>
              <a>
                <button className='button button__primary !w-48'>Visit!</button>
              </a>
            </Link>
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
          <div className='mt-4 w-48'>
            <Link href='/cabins'>
              <a>
                <button className='button button__primary !w-48'>
                  Book Cabins
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className='homeCards mt-8 max-w-7xl m-auto flex flex-wrap lg:justify-between justify-center px-2'>
          <FeaturedCards />
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
