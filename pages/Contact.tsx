import ContactForm from '../components/ContactForm';
import Footer from '../components/layout/Footer';
import Head from 'next/head';
import Header from '../components/layout/Header';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact us - Cabin fever</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={`Cabinfeever's contact page, learn about us or contact us here`}
        />
      </Head>
      <Header />
      <main>
        <div className='heroImg loadingBG relative'>
          <div className='heroOverlay text-white flex flex-col pt-32 justify-center items-center'>
            <h1 className=''>Contact us</h1>
          </div>
        </div>
        <div className='flex flex-col-reverse mb-4 items-center md:items-start md:justify-evenly px-2 mt-8 md:flex-row sm:px-10'>
          <div className='md:w-1/2 pr-8'>
            <div className='mb-6'>
              <h2 className='mb-4'>Learn More</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                tortor purus rutrum morbi placerat. Pellentesque donec leo,
                dignissim id. Egestas nam dignissim et urna et. Et, orci ornare
                sollicitudin iaculis nec lacus. Diam eu enim, mauris tortor,
                etiam urna non orci facilisis. Tristique vulputate facilisi
                ullamcorper tellus aliquet semper ut congue suspendisse. Risus
                lacus aliquet ac sed. Pharetra, mauris quis aliquam diam.
                Faucibus dolor sed sit eget. Lobortis at nulla ornare
                scelerisque bibendum. Ornare faucibus eget rhoncus, aliquet.
                Augue aliquet non libero tempor, nullam cras platea dui fames.
                Massa ultricies id consectetur ipsum egestas pellentesque morbi
                feugiat. Pellentesque phasellus arcu purus laoreet at ut in.
                Adipiscing at ipsum sit id
              </p>
            </div>
            <div>
              <h3 className='mb-4'>About us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                tortor purus rutrum morbi placerat. Pellentesque donec leo,
                dignissim id. Egestas nam dignissim et urna et. Et, orci ornare
                sollicitudin iaculis nec lacus. Diam eu enim, mauris tortor,
                etiam urna non orci facilisis. Tristique vulputate facilisi
                ullamcorper tellus aliquet semper ut congue suspendisse. Risus
                lacus aliquet ac sed. Pharetra, mauris quis aliquam diam.
                Faucibus dolor sed sit eget.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 bg-secondary p-4 rounded-lg max-w-xl h-full'>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
