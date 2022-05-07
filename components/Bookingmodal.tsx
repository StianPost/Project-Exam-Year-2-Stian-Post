import React from 'react';

function Bookingmodal({ open, onClose, cabin }: any) {
  if (!open) return null;

  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <h3>Checkout</h3>
        <div className='flex'>
          <div>
            <h4>{cabin.title}</h4>
          </div>
          <div>
            <button className='button button__primary' onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingmodal;
