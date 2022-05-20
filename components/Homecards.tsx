import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

function Homecards({
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
  const myLoader = ({ width = 100, quality = 50 }) => {
    return `${heroImg}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className=' bg-secondary max-w-lg rounded-lg mb-6'>
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
      <div className='p-3'>
        <h4 className='font-bold'>{title}</h4>
        <p>{short_description}</p>
        <div className='flex justify-between mt-2'>
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
          <div className='font-bold text-primary text-2xl'>{price} nok/day</div>
        </div>
        <Link href={`/cabins/${id}`}>
          <a>
            <button className='button button__primary mt-2'>Book</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Homecards;
