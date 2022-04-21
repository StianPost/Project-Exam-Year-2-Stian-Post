import React from 'react';

function Resultcards(): any {
  return (
    <div className='flex max-w-6xl w-full flex-col mb-6 rounded-lg md:flex-row md:h-80 '>
      <div className='bg-slate-600 h-60  rounded-t-lg md:w-3/4  md:h-full md:rounded-l-lg md:rounded-none'>
        imageplaceholder
      </div>
      <div className='p-3 bg-secondary flex flex-col justify-between rounded-b-lg w-full md:rounded-r-lg'>
        <h3>Enda en hytte</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
          praesent quam aliquet nunc ac dui, egestas non rutrum. Odio pharetra
          id eros, integer habitasse fames commodo aliquam, imperdiet. Sed vitae
          condimentum ultrices risus aliquam sit mauris. Aenean turpis.
        </p>
        <div className='flex flex-col justify-between sm:flex-row py-0 sm:pt:2'>
          <div className='flex justify-between items-center sm:block py-2 sm:py-0'>
            <div className='flex'>
              <p>icon</p>
              <p>icon</p>
            </div>
            <div className='font-bold text-primary text-2xl'>350 nok/day</div>
          </div>
          <button className='button__primary self-end h-fit sm:max-w-xs md:ml-2'>
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resultcards;
