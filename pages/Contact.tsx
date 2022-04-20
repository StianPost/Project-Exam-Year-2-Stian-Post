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
      <main>
        <div className='heroImg bg-pink-400 flex items-center justify-center'>
          <h1 className='text-white'>Contact us</h1>
        </div>
        <div className='flex flex-col-reverse mb-4 items-center md:items-start md:justify-between px-10 mt-8 md:flex-row'>
          <div className='md:w-1/2 pr-8'>
            <div>
              <h2>Learn More</h2>
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
              <h3>About us</h3>
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
          <div className='w-full md:w-1/2 bg-secondary p-3 rounded-lg max-w-xl h-full'>
            <h3 className='text-center'>Contact</h3>
            <form action='' className='flex flex-col'>
              <div>
                <label className='block' htmlFor=''>
                  Email*:
                </label>
                <input
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div>
                <label className='block mt-2' htmlFor=''>
                  Subject*:
                </label>
                <input
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  type='text'
                  name=''
                  id=''
                />
              </div>
              <div>
                <label className='block mt-2' htmlFor=''>
                  Message*:
                </label>
                <textarea
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  name=''
                  id=''
                  cols={5}
                  rows={10}
                ></textarea>
              </div>
              <input
                className='button__primary max-w-xs self-center'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
