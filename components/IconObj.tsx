import { Icon } from '@iconify/react';
import React from 'react';

export function IconObj({ object, iconString, additionalInfo }: any) {
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
