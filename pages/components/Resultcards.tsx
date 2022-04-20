import React from 'react';

function Resultcards(): any {
  return (
    <div className='flex max-w-6xl w-full flex-col mb-6 rounded-lg md:flex-row md:h-80 '>
      <div className='bg-slate-600 h-60  rounded-t-lg md:w-3/4  md:h-full md:rounded-l-lg md:rounded-none'>
        imageplaceholder
      </div>
      <div className='p-6 bg-secondary flex flex-col justify-between rounded-b-lg w-full md:rounded-r-lg'>
        <h3>Enda en hytte</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
          praesent quam aliquet nunc ac dui, egestas non rutrum. Odio pharetra
          id eros, integer habitasse fames commodo aliquam, imperdiet. Sed vitae
          condimentum ultrices risus aliquam sit mauris. Aenean turpis.
        </p>
        <div className='flex justify-between'>
          <div className='flex'>
            <p>icon</p>
            <p>icon</p>
          </div>
          <button className='button__primary max-w-xs'>Button</button>
        </div>
      </div>
    </div>
  );
}

export default Resultcards;
