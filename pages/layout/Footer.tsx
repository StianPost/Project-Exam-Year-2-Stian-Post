import React from 'react';

function Footer() {
  return (
    <footer className='bg-slate-900 flex flex-col text-white p-5 items-center'>
      <div className='flex justify-between w-full'>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <p>For education use only</p>
      <div className='flex my-2'>
        <p>Icon</p>
        <p className='mx-4'>Icon</p>
        <p>Icon</p>
      </div>
      <div className='flex'>
        <p>Info</p>
        <p className='mx-2'>Terms of use</p>
        <p>About us</p>
      </div>
    </footer>
  );
}

export default Footer;
