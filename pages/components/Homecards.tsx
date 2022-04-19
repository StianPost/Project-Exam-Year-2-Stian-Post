import React from 'react';

function Homecards(): any {
  return (
    <div className=' bg-blue-100 max-w-lg rounded-lg mb-6'>
      <div className='bg-blue-300 w-full h-60 rounded-t-lg'></div>
      <div className='p-3'>
        <h4 className='font-bold'>Hytte ute i Naturen</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
          praesent quam aliquet nunc ac dui, egestas non rutrum. Odio pharetra
          id eros, integer habitasse fames commodo aliquam, imperdiet. Sed vitae
          con dimentum ultrices risus aliquam sit mauris.
        </p>
        <div className='flex justify-between mt-2'>
          <div>icons</div>
          <div className='font-bold'>Price</div>
        </div>
        <button className='mt-3 mb-1 bg-slate-700 text-white p-3 sm:p-2 w-full rounded-lg'>
          Placeholder
        </button>
      </div>
    </div>
  );
}

export default Homecards;
