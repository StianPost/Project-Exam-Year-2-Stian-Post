import LoginComponent from './LoginComponent';
import React from 'react';
import { useState } from 'react';

function Login() {
  const [toggleModal, setToggleModal] = useState(false);

  function LoginModal() {
    return (
      <div className='modalOverlay'>
        <div className='modal relative'>
          <h2 className='text-center mt-2'>Admin</h2>
          <div>
            <LoginComponent />
          </div>
          <button
            className='absolute top-2 right-3 hover:cursor-pointer'
            onClick={() => {
              setToggleModal(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          setToggleModal(true);
        }}
      >
        Login
      </button>
      {toggleModal ? <LoginModal /> : ''}
    </div>
  );
}

export default Login;
