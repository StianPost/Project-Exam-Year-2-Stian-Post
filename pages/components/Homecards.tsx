import { Icon } from '@iconify/react';

function Homecards(): any {
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
        <h4 className='font-bold'>Hytte ute i Naturen</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
          praesent quam aliquet nunc ac dui, egestas non rutrum. Odio pharetra
          id eros, integer habitasse fames commodo aliquam, imperdiet. Sed vitae
          con dimentum ultrices risus aliquam sit mauris.
        </p>
        <div className='flex justify-between mt-2'>
          <div>icons</div>
          <div className='font-bold text-primary text-2xl'>Price</div>
        </div>
        <button className='button__primary'>Book</button>
      </div>
    </div>
  );
}

export default Homecards;
