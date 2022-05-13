import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cardInfo } from '../lib/types';

function Resultcards({
  title,
  id,
  short_description,
  price,
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
  rooms,
  beds,
}: any) {
  const myLoader = ({ width = 200, quality = 100 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };
  console.log(isPets);

  return (
    <div className='flex max-w-6xl w-full flex-col mb-6 rounded-lg md:flex-row '>
      <div className='bg-slate-600  rounded-t-lg md:w-3/4  md:h-full md:rounded-l-lg md:rounded-none relative'>
        <Image
          className='rounded-t-lg md:w-3/4  md:h-full md:rounded-l-lg md:rounded-none'
          loader={myLoader}
          src={heroImg}
          alt={`image of ${heroImg}`}
          height={120}
          width={150}
          layout='responsive'
          unoptimized={false}
          priority
        />
        <div className='absolute top-1 right-1 flex flex-col'>
          {isPets ? (
            <div className='IconBG'>
              <Icon icon='mdi:paw' />
            </div>
          ) : (
            ''
          )}
          {isSlalom ? (
            <div className='IconBG'>
              <Icon icon='fa-solid:skiing' />
            </div>
          ) : (
            ''
          )}
          {isHiking ? (
            <div className='IconBG'>
              <Icon icon='fa-solid:hiking' className='text-3xl' />
            </div>
          ) : (
            ''
          )}
          {isSkiing ? (
            <div className='IconBG'>
              <Icon icon='fa-solid:skiing-nordic' />
            </div>
          ) : (
            ''
          )}
          {isWateractives ? (
            <div className='IconBG'>
              <Icon icon='map:jet-skiing' />
            </div>
          ) : (
            ''
          )}
          {isWinterActivities ? (
            <div className='IconBG'>
              <Icon icon='map:snowmobile' />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='p-3 bg-secondary flex flex-col justify-between rounded-b-lg w-full md:rounded-r-lg'>
        <h3>{title}</h3>
        <p>{short_description}</p>
        <div className='flex flex-col justify-between sm:flex-row py-0 sm:pt:2'>
          <div className='flex justify-between items-center sm:block py-3 sm:py-0'>
            <div className='flex text-primary items-end'>
              <div className='flex items-end'>
                <Icon icon='fa-solid:bed' className='text-4xl mr-1' />
                <p className='font-bold text-1xl'>{beds}</p>
              </div>
              <div className='flex items-end'>
                <Icon
                  icon='fa-solid:door-closed'
                  className='text-4xl  ml-3 mr-1'
                />
                <p className='font-bold text-1xl'>{rooms}</p>
              </div>
            </div>
            <div>
              <p className='font-bold text-primary text-2xl md:mt-2'>
                {price} nok/Day
              </p>
            </div>
          </div>
          <Link href={`/cabins/${id}`}>
            <a className='button button__primary text-center self-end h-fit sm:max-w-xs md:ml-2'>
              View Cabin
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Resultcards;
