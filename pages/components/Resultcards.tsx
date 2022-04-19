import React from 'react';

function Resultcards(): any {
  return (
    <div className='flex h-80 mb-6 rounded-lg'>
      <div className='bg-slate-600 w-1/2 rounded-l-lg'>imageplaceholder</div>
      <div className='p-6 bg-slate-100 flex flex-col justify-between rounded-r-lg'>
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
          <div>Button</div>
        </div>
      </div>
    </div>
  );
}

export default Resultcards;
