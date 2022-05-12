import EnquiryForm from './EnquiryForm';
import { Icon } from '@iconify/react';
import React from 'react';

function Enquirymodal({ onClose, open }) {
  if (!open) return null;
  return (
    <>
      <div className='modalOverlay'></div>
      <div className='modal'>
        <div className='flex relative'>
          <div>
            <h2>CabinINFO</h2>
            <p>Goes here</p>
          </div>
          <EnquiryForm />
          <button className='absolute top-2 right-3' onClick={onClose}>
            <Icon icon='bi:x-lg' className='text-3xl' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Enquirymodal;
