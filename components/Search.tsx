import React, { TouchEvent, useEffect, useRef, useState } from 'react';

import FilterDDowns from './FilterDDowns';
import { Icon } from '@iconify/react';
import Resultcards from './Resultcards';
import { cardInfo } from '../lib/types';

function Dropdown({ cabins, prompt, searchValue, onChange }: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    ['click', 'touchend'].forEach((e) => {
      document.addEventListener(e, toggle);
    });

    return () =>
      ['click', 'touchend'].forEach((e) => {
        document.addEventListener(e, toggle);
      });
  }, []);

  function toggle(e: any): void {
    setOpen(e && e.target === ref.current);
  }

  function filterCabins(cabins: any) {
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
    setQuery(cabin.title);
    onChange(cabin);
    setOpen(false);
  }

  return (
    <div>
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
          {filterCabins(cabins).map((cabin: cardInfo) => {
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
      <h1 className='font-semibold text-primary'>Results</h1>
      <div className='flex justify-between mb-6'>
        <p>Showing xx out of ??</p>

        <div className='button__secondary flex items-center'>
          Sort
          <Icon
            className=' text-primary text-2xl'
            icon='ant-design:caret-down-outlined'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='mb-3 md:w-72 md:pr-4 md:mb-0'>
          <h3>Filter</h3>
          <div className='flex  md:flex-col'>
            <div className='pr-4 md:p-0'>
              <FilterDDowns
                selectOptions={[
                  { value: 'isFire', label: 'Fireplace' },
                  { value: 'isPool', label: 'Pool' },
                  { value: 'isElec', label: 'Electricity' },
                  { value: 'isBeach', label: 'Beach' },
                  { value: 'isToilet', label: 'Toilet' },
                ]}
                filterType={'Amenities'}
              />
            </div>
            <div className='pr-4 md:p-0'>
              <FilterDDowns
                selectOptions={[
                  { value: 'isBeach', label: 'Beach' },
                  { value: 'isWater', label: 'Lake' },
                  { value: 'isMountain', label: 'Mountain' },
                  { value: 'isSnow', label: 'Snow' },
                  { value: 'isSea', label: 'Sea' },
                ]}
                filterType={'Locations'}
              />
            </div>
            <div>
              <FilterDDowns
                selectOptions={[
                  { value: 'isSlalom', label: 'Slalom' },
                  { value: 'isSkiing', label: 'Skiing' },
                  { value: 'isVolley', label: 'Volleyball' },
                  { value: 'isWateractives', label: 'Water Activities' },
                  { value: 'isHiking', label: 'Hiking' },
                ]}
                filterType={'Activities'}
              />
            </div>
          </div>
        </div>
        <div>
          {filterCabins(cabins).map(
            ({
              title,
              id,
              description,
              extra_description,
              price,
              adress,
              heroImg,
              map,
              imgArray,
              county,
              people_rooms,
              dates,
              short_description,
            }: cardInfo): any => {
              return (
                <Resultcards
                  key={id}
                  title={title}
                  heroImg={heroImg}
                  id={id}
                  price={price}
                  description={description}
                  extra_description={extra_description}
                  short_description={short_description}
                  adress={adress}
                  map={map}
                  imgArray={imgArray}
                  county={county}
                  people_rooms={people_rooms}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
