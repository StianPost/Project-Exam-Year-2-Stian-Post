import EnquiryForm from './EnquiryForm';
import { Icon } from '@iconify/react';
import React from 'react';
import { cabinInterface } from '../lib/types';

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
          <div className='flex flex-col justify-between w-full md:flex-row'>
            <div className='w-full'>
              <h3>CabinINFO</h3>
              <p>Goes here</p>
            </div>
            <div className='w-full'>
              <EnquiryForm cabin={cabin} />
            </div>
          </div>
          <button className='absolute top-2 right-3' onClick={onClose}>
            <Icon icon='bi:x-lg' className='text-3xl' />
          </button>
        </div>
      </div>
    </>
  );
}

export default Enquirymodal;
