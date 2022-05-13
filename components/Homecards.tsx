import { Icon } from '@iconify/react';
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
  return (
    <div className=' bg-secondary max-w-lg rounded-lg mb-6'>
      <div className='bg-blue-300 w-full h-60 rounded-t-lg flex flex-col items-end p-3'>
        <div className='flex items-center justify-center h-12 w-12 mb-2 rounded-full bg-gray-900 text-white'>
          <Icon className='text-2xl' icon='fa-solid:skiing' />
        </div>
        <div className='flex items-center justify-center h-12 w-12 mb-2 rounded-full bg-gray-900 text-white'>
          <Icon className='text-2xl' icon='map:waterskiing' />
        </div>
        <div className='flex items-center justify-center h-12 w-12 mb-2 rounded-full bg-gray-900 text-white'>
          <Icon className='text-2xl' icon='map:jet-skiing' />
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
