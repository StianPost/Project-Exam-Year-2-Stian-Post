import React, { TouchEvent, useEffect, useRef, useState } from 'react';

import { Icon } from '@iconify/react';
import { cardInfo } from '../lib/types';

function Dropdown({ cabins, prompt, searchValue, onChange }: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ['click', 'touchend'].forEach((e) => {
      document.addEventListener(e, toggle);
    });

    return () =>
      ['click', 'touchend'].forEach((e) => {
        document.addEventListener(e, toggle);
      });
  }, []);

  function toggle(e): void {
    setOpen(e && e.target === ref.current);
  }

  function filter(cabins) {
    return cabins.filter(
      (cabin: cardInfo) =>
        cabin.title.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    );
  }

  function displayValue(): string {
    if (query.length > 0) return query;
    if (searchValue) return searchValue.title;
    return '';
  }

  function selectCabin(cabin: cardInfo): void {
    setQuery('');
    onChange(cabin);
    setOpen(false);
  }

  return (
    <div className='dropdown'>
      <div className='control flex'>
        <div className='selected-value'>
          <input
            type='text'
            name='searchBar'
            id='searchBar'
            ref={ref}
            placeholder={searchValue ? searchValue.title : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={toggle}
            onTouchEnd={toggle}
          />
        </div>
        <span>
          <Icon icon={`ant-design:caret-${open ? 'up' : 'down'}-outlined`} />
        </span>
      </div>
      <div className={open ? '' : 'hidden'}>
        {filter(cabins).map((cabin: cardInfo) => {
          return (
            <div
              key={cabin.id}
              onClick={() => {
                selectCabin(cabin);
              }}
              onTouchEnd={() => {
                selectCabin(cabin);
              }}
            >
              {cabin.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
