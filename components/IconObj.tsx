import { Icon } from '@iconify/react';
import React from 'react';

export function IconObj({ object, iconString, additionalInfo }) {
  return (
    <div className='flex items-end mr-2'>
      <Icon icon={iconString} className='text-4xl mr-1' />
      <p className='font-medium'>
        {object ? object : ''}
        {additionalInfo}
      </p>
    </div>
  );
}

export function IconWrapper() {
  return {};
}
