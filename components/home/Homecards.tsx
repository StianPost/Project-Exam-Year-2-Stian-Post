import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { cabinInterface } from '../../lib/types';

function Homecards({
  title,
  id,
  short_description,
  price,
  heroImg,
  isHiking,
  isSlalom,
  isSkiing,
  isWinterActivities,
  isWateractives,
  isPets,
  rooms,
  beds,
}: cabinInterface) {
  const myLoader = ({ width = 100, quality = 50 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className='bg-secondary max-w-lg rounded-lg mb-6'>
      <div className='loadingBG w-full h-72 rounded-t-lg relative'>
        <Image
          className='rounded-t-lg md:w-3/4  md:h-full'
          loader={myLoader}
          src={heroImg}
          alt={`image of ${heroImg}`}
          layout='fill'
          unoptimized={false}
          priority
        />
        <div className='absolute top-1 right-1 flex flex-col'>
          {isPets ? (
            <div className='IconBG'>
              <Icon icon='mdi:paw' />
            </div>
          ) : (
            <div className='IconBG'>
              <Icon icon='mdi:paw-off' />
            </div>
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
      <div className='p-3 featuredCardInfo flex flex-col justify-between'>
        <div>
          <h4 className='font-bold'>{title}</h4>
          <p>{short_description}</p>
        </div>
        <div className=''>
          <div className='flex h-full flex-col justify-between mt-2 xs:flex-row'>
            <div className='flex text-primary items-end'>
              <div className='flex items-end'>
                <Icon icon='fa-solid:bed' className='text-4xl mr-1' />
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
            <p className='font-bold text-primary text-2xl mt-2 xs:mt-0'>
              {price} nok/day
            </p>
          </div>
          <Link href={`/cabins/${id}`}>
            <a>
              <button className='button button__primary mt-2'>Book</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homecards;
