import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className='bg-slate-900 flex flex-col text-white p-5 items-center'>
      <div className='flex items-center flex-col justify-between w-full mb-2 md:mb-0 md:flex-row '>
        <div className='flex items-center mb-2 md:mb-0'>
          <Icon icon='bxs:phone' className='text-3xl mr-1' />
          <p>+47 123 45 678</p>
        </div>
        <div className='flex items-center'>
          <Icon icon='fluent:mail-20-filled' className='text-3xl mr-1' />
          <p>Cabinfeever@mail.com</p>
        </div>
      </div>
      <p className='font-thin'>For education use only</p>
      <div className='flex my-2 text-4xl'>
        <Icon icon='fa-brands:instagram' className='hover:cursor-pointer' />
        <Icon icon='fa-brands:facebook' className='mx-4 hover:cursor-pointer' />
        <Icon icon='fa-brands:twitter' className='hover:cursor-pointer' />
      </div>
      <div className='flex'>
        <p className='hover:underline hover:cursor-pointer'>Info</p>
        <p className='mx-2 hover:underline hover:cursor-pointer'>
          Terms of use
        </p>
        <p className='hover:underline hover:cursor-pointer'>About us</p>
      </div>
    </footer>
  );
}

export default Footer;
