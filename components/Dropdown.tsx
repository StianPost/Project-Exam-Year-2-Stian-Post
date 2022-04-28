import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '@iconify/react';
import { cardInfo } from '../lib/types';

function Dropdown({ cabins, prompt, searchValue, onChange }: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', close);
    return () => document.addEventListener('click', close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(cabins) {
    return cabins.filter(
      (cabin: cardInfo) =>
        cabin.title.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    );
  }

  return (
    <div className='dropdown'>
      <div
        className='control flex'
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className='selected-value'>
          <input
            type='text'
            name='searchBar'
            id='searchBar'
            ref={ref}
            placeholder={searchValue ? searchValue.title : prompt}
            value={searchValue.title || query}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={(e) => {
              setOpen((prev) => !prev);
            }}
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
                setQuery('');
                onChange(cabin);
                setOpen(false);
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
