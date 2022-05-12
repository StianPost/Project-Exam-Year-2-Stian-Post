import ContactForm from './ContactForm';
import { Icon } from '@iconify/react';
import React from 'react';

function Enquirymodal({ onClose, open }) {
  if (!open) return null;
  return (
    <>
      <div className='modalOverlay'></div>
      <div className='modal'>
        <div className='relative'>
          <ContactForm />
          <button className='absolute top-2 right-3' onClick={onClose}>
            <Icon icon='bi:x-lg' className='text-3xl' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Enquirymodal;
