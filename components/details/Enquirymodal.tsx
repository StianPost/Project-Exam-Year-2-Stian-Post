import EnquiryForm from './EnquiryForm';
import { Icon } from '@iconify/react';
import React from 'react';
import { cabinInterface } from '../../lib/types';

function Enquirymodal({
  onClose,
  open,
  cabin,
}: {
  onClose: any;
  open: boolean;
  cabin: cabinInterface;
}) {
  if (!open) return null;
  return (
    <>
      <div className='modalOverlay'></div>
      <div className='modal'>
        <div className='relative'>
          <h2 className='text-center'>Questions?</h2>
          <h3 className='text-center'>{cabin.title}</h3>
          <div className='w-full md:pl-1'>
            <EnquiryForm />
          </div>
        </div>
        <button className='absolute top-2 right-3' onClick={onClose}>
          <Icon icon='bi:x-lg' className='text-3xl' />
        </button>
        <button
          className='button button__secondary w-full mt-2'
          onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

export default Enquirymodal;
