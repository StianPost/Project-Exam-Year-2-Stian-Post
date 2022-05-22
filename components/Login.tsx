import { Icon } from '@iconify/react';
import LoginComponent from './LoginComponent';
import React from 'react';
import { useState } from 'react';

function Login({ toggleLogin }: any) {
  return (
    <button className='hover:font-bold' onClick={toggleLogin}>
      Login
    </button>
  );
}

export default Login;

export function LoginModal({ toggleModal }: any) {
  return (
    <div className='modalOverlay'>
      <div className='modal relative'>
        <h2 className='text-center mt-2'>Admin</h2>
        <div>
          <LoginComponent />
        </div>
        <button
          className='absolute top-2 right-3 hover:cursor-pointer'
          onClick={() => toggleModal()}
        >
          <Icon icon='bi:x-lg' className='text-3xl' />
        </button>
      </div>
    </div>
  );
}
