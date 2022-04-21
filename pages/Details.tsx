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
      <main>
        <div className='px-10'>
          <div className='heroImg bg-blue-500'>
            image and slider placeholder
          </div>
        </div>
        <div className='flex justify-between px-10'>
          <div>
            <h1>Cabin Name</h1>
            <h3>Location...</h3>
          </div>
          <div className='flex'>
            <div className='button__primary h-fit'>Book Now</div>
            <div className='button__secondary h-fit ml-4'>Contact</div>
          </div>
        </div>
        <div className='px-10 mb-10'>
          <div>
            <div className='flex'>
              <h2>Description</h2>
              <p>Icon</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              scelerisque est potenti nullam. A pretium cras quam purus elit, in
              porta id aliquam. Massa arcu, vitae, consequat adipiscing
              venenatis ut. Et odio eleifend lacus accumsan, risus amet tortor,
              magna faucibus. Sit odio in sed enim nunc pharetra dui, vulputate
              suspendisse. Ut leo scelerisque quisque aliquet nisi, etiam vel
              odio sed. Enim mauris orci vitae morbi metus. Viverra non
              vulputate pellentesque tincidunt. Aenean porta sit nibh tempus.
              Semper euismod hendrerit maecenas fermentum amet vel libero
              habitant nunc. Proin platea bibendum malesuada cursus nulla
              accumsan et tellus. Viverra fermentum dictum vitae gravida.
              Viverra turpis ac pharetra neque, tempus pretium proin. Ac enim
              amet odio nunc malesuada gravida. Sit morbi arcu, congue auctor
              adipiscing aliquam praesent. Imperdiet lorem pellentesque
              hendrerit quis neque. Enim gravida facilisis sit vulputate sapien
              accumsan dictumst. In leo a, faucibus justo, ultricies amet arcu
              euismod. Cursus auctor nulla vitae turpis imperdiet nibh senectus
              ornare dolor. Sit ipsum sit sed gravida aenean dui nisi. Magna sed
              egestas gravida adipiscing leo. Ut ac nibh vel lobortis libero
              risus risus arcu ac. Quam nibh justo vel id mauris. Neque risus
              euismod cras.
            </p>
          </div>
          <div>
            <h3>Info and Area</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              rhoncus facilisis vel ultrices urna. Fringilla viverra turpis
              commodo, vitae consequat nibh. Ipsum libero nunc porttitor id eu,
              pellentesque. Blandit aenean tempus, in odio gravida. Ullamcorper
              tempor facilisis pretium, dui amet tortor viverra praesent.
              Porttitor duis aliquet egestas lectus nullam massa pharetra
              blandit nunc. Cursus urna auctor congue elit elit faucibus id
              purus. Libero ac sit tortor, malesuada tellus nibh. Etiam sem
              turpis aliquam ut venenatis cras. Blandit tristique sed eu
              condimentum in sed. Tincidunt ac, nibh mi feugiat condimentum
              sapien. Amet turpis semper vestibulum nec. Massa dictum gravida
              faucibus dui, id adipiscing. Posuere pulvinar felis suspendisse
              diam diam interdum. Ornare sollicitudin nunc, tempor mi quisque
              duis quis. Turpis cursus nunc convallis eget malesuada lorem.
              Senectus velit neque, nunc faucibus pellentesque augue amet.
              Egestas.
            </p>
          </div>
          <div>
            <h3>Amenities</h3>
            <div className='flex flex-wrap'>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
              <p>ICON</p>
            </div>
          </div>
          <div>
            <h3>Location</h3>
            <div className='h-96 w-full bg-red-800'></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Details;
