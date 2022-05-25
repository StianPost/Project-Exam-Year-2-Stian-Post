import React, { useEffect, useState } from 'react';

import { BaseURL } from '../../lib/const';
import Bookingmodal from '../../components/details/Bookingmodal';
import Enquirymodal from '../../components/details/Enquirymodal';
import Footer from '../../components/layout/Footer';
import Head from 'next/head';
import Header from '../../components/layout/Header';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import SwiperComponent from '../../components/details/SwiperComponent';
import axios from 'axios';
import { cabinInterface } from '../../lib/types';
import { getCabins } from '../../lib/api';

export const getStaticPaths = async (params: any) => {
  const cabinArray = await getCabins(BaseURL + '/cabins');

  const paths = cabinArray.map((cabin: cabinInterface) => {
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
  const cabin = await getCabins(BaseURL + '/cabins/' + id);
  return {
    props: { cabin, id },
  };
};

const Cabin = ({ cabin, id }: { cabin: cabinInterface; id: string }) => {
  const [cabinObj, setCabinObj] = useState(cabin);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(BaseURL + '/cabins/' + id);
      setCabinObj(data);
    })();
  }, [id]);

  const myLoader = ({ width = 100, quality = 50 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };
  const destructuredCabin = cabinObj;
  const {
    title,
    description,
    extra_description,
    heroImg,
    isFire,
    isElectricity,
    isPool,
    isToilet,
    isHiking,
    isSlalom,
    isSkiing,
    isWinterActivities,
    isWateractives,
    isPets,
    isWater,
    isBeach,
    isSnow,
    isMountain,
    isSea,
    rooms,
    beds,
    imgArray,
    adress,
    map,
  } = destructuredCabin;

  const [isBooking, setIsBooking] = useState(false);
  const [isEnquiry, setIsEnquiry] = useState(false);

  const mapLoader = ({ width = 100, quality = 50 }) => {
    return `${map}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <Head>
        <title>{title} - Cabin fever</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={`The detail page of ${title}, where you can read all about ${title}, book it or send a message about it`}
        />
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
        <div className='flex flex-col-reverse items-start px-2  md:justify-between md:px-4 lg:px-10 md:flex-row xl:px-20'>
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
        <div className='px-2 mb-10 md:px-4 lg:px-10 xl:px-20'>
          <div className='pb-2'>
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
          <div className='pb-2'>
            <h3>Info and Area</h3>
            <p className='py-1'>{extra_description}</p>
          </div>
          <div className='pb-2'>
            <h3>Amenities</h3>
            <div className='flex flex-wrap py-1 text-quinary'>
              {isPets ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='mdi:paw' className='text-3xl mr-1' />
                  <p>Pets Allowed</p>
                </div>
              ) : (
                <div className='pr-3 flex items-end'>
                  <Icon icon='mdi:paw-off' className='text-3xl mr-1' />
                  <p>No pets</p>
                </div>
              )}
              {isSlalom ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='fa-solid:skiing' className='text-3xl mr-1' />
                  <p>Slalom</p>
                </div>
              ) : (
                ''
              )}
              {isHiking ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='fa-solid:hiking' className='text-3xl mr-1' />
                  <p>Hiking</p>
                </div>
              ) : (
                ''
              )}
              {isSkiing ? (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa-solid:skiing-nordic'
                    className='text-3xl mr-1'
                  />
                  <p>Skiing</p>
                </div>
              ) : (
                ''
              )}
              {isWateractives ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='map:jet-skiing' className='text-3xl mr-1' />
                  <p>Water Activities</p>
                </div>
              ) : (
                ''
              )}
              {isWinterActivities ? (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa-solid:snowboarding'
                    className='text-3xl mr-1'
                  />
                  <p>Winter Activities</p>
                </div>
              ) : (
                ''
              )}
              {isFire ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='mdi:fireplace' className='text-3xl mr-1' />
                  <p>Fireplace</p>
                </div>
              ) : (
                ''
              )}
              {isElectricity ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='entypo:power-plug' className='text-3xl mr-1' />
                  <p>Electricity</p>
                </div>
              ) : (
                ''
              )}
              {isPool ? (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa-solid:swimming-poo'
                    className='text-3xl mr-1'
                  />
                  <p>Pool</p>
                </div>
              ) : (
                ''
              )}
              {isToilet ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='fa6-solid:toilet' className='text-3xl mr-1' />
                  <p>Indoor Toilet</p>
                </div>
              ) : (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa6-solid:toilet-portable'
                    className='text-3xl mr-1'
                  />
                  <p>Outhouse</p>
                </div>
              )}
              {isWater ? (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa-solid:swimming-pool'
                    className='text-3xl mr-1'
                  />
                  <p>Lake</p>
                </div>
              ) : (
                ''
              )}
              {isBeach ? (
                <div className='pr-3 flex items-end'>
                  <Icon
                    icon='fa6-solid:umbrella-beach
                    '
                    className='text-3xl mr-1'
                  />
                  <p>Beach</p>
                </div>
              ) : (
                ''
              )}
              {isSnow ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='bi:cloud-snow-fill' className='text-3xl mr-1' />
                  <p>Snow</p>
                </div>
              ) : (
                ''
              )}
              {isSea ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='fa6-solid:water' className='text-3xl mr-1' />
                  <p>Sea</p>
                </div>
              ) : (
                ''
              )}
              {isMountain ? (
                <div className='pr-3 flex items-end'>
                  <Icon icon='fa-solid:mountain' className='text-3xl mr-1' />
                  <p>Mountain</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div>
            <h3>Location</h3>
            <div
              className='w-full loadingBG mt-2 h-full'
              // style={{
              //   background: `url('${map}')`,
              //   backgroundSize: 'contain',
              //   backgroundRepeat: 'no-repeat',
              //   backgroundPosition: 'center',
              // }}
            >
              <Image
                className='w-full h-full'
                src={map}
                alt='Google map of location'
                layout={'responsive'}
                height={100}
                width={400}
                loader={mapLoader}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cabin;
