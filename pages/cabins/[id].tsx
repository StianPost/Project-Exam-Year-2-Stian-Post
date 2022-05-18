import React, { useState } from 'react';

import Bookingmodal from '../../components/Bookingmodal';
import Enquirymodal from '../../components/Enquirymodal';
import Footer from '../layout/Footer';
import Head from 'next/head';
import Header from '../layout/Header';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import Slider from '../../components/Slider';
import SwiperComponent from '../../components/SwiperComponent';
import { apiCall } from '../../lib/const';
import { getCabins } from '../../lib/api';

export const getStaticPaths = async (params: any) => {
  const cabinArray = await getCabins(apiCall);

  const paths = cabinArray.map((cabin: any) => {
    return {
      params: { id: cabin.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const cabin = await getCabins(apiCall + '/' + id);
  return {
    props: { cabin },
  };
};

const Cabin = ({ cabin }: any) => {
  const myLoader = ({ width = 200, quality = 100 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };
  const destructuredCabin = cabin;
  const {
    title,
    id,
    description,
    extra_description,
    price,
    adress,
    heroImg,
    map,
    imgArray,
    county,
    rooms,
    beds,
    dates,
  } = destructuredCabin;

  type imgArrObj = {
    id: number;
    imgUrl: string;
    alt?: string;
  };

  const [isBooking, setIsBooking] = useState(false);
  const [isEnquiry, setIsEnquiry] = useState(false);

  return (
    <>
      <Head>
        <title>{title} || Cabin fever</title>
      </Head>
      <Header />
      <Bookingmodal
        open={isBooking}
        onClose={() => {
          setIsBooking(false);
        }}
        cabin={cabin}
      />
      <Enquirymodal
        open={isEnquiry}
        onClose={() => {
          setIsEnquiry(false);
        }}
        cabin={cabin}
      />

      <main>
        <SwiperComponent heroImg={heroImg} imgArray={imgArray} />
        <div className='flex flex-col-reverse items-start px-2  md:justify-between md:px-4 lg:px-10 md:flex-row'>
          <div>
            <h1>{title}</h1>
            <h3>{adress}</h3>
          </div>
          <div className='flex pt-8'>
            <button
              className='button button__primary h-fit whitespace-nowrap'
              onClick={() => {
                setIsBooking(true);
              }}
            >
              Book Cabin
            </button>
            <button
              className='button button__secondary h-fit ml-4'
              onClick={() => {
                setIsEnquiry(true);
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className='px-2 md:px-4 lg:px-10 mb-10'>
          <div>
            <div className='flex flex-col md:flex-row md:items-center'>
              <h2>Description</h2>
              <div className='flex text-primary items-end'>
                <div className='flex items-end'>
                  <Icon icon='fa-solid:bed' className='text-4xl  ml-4 mr-1' />
                  <p className='font-bold text-2xl'>{beds}</p>
                </div>
                <div className='flex items-end'>
                  <Icon
                    icon='fa-solid:door-closed'
                    className='text-4xl  ml-3 mr-1'
                  />
                  <p className='font-bold text-2xl'>{rooms}</p>
                </div>
              </div>
            </div>
            <p>{description}</p>
          </div>
          <div>
            <h3>Info and Area</h3>
            <p>{extra_description}</p>
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

export default Cabin;

// export async function getStaticPaths() {
//   const cabinArray = await getCabins();

//   const paths = cabinArray.map((cabin: any) => {
//     return {
//       params: {
//         id: cabin.id,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
