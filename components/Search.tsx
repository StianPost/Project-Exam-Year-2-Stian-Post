import React, { TouchEvent, useEffect, useRef, useState } from 'react';

import FilterDDowns from './FilterDDowns';
import { Icon } from '@iconify/react';
import MinimumDistanceSlider from './testSlider';
import Resultcards from './Resultcards';
import { cardInfo } from '../lib/types';

function Dropdown({
  cabins,
  prompt,
  searchValue,
  onChange,
  handleOnSearch,
}: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);
  const [filters, setFilters] = useState({});

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

  function filterCabins(cabins: cardInfo[]) {
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
      <div className='flex'>
        <div className='w-72'>
          <FilterDDowns
            selectOptions={[
              { value: 'Agder', label: 'Agder' },
              { value: 'Finnmark', label: 'Finnmark' },
              { value: 'Innlandet', label: 'Innlandet' },
              { value: 'More og Romsdal', label: 'Møre og Romsdal' },
              { value: 'Nordland', label: 'Nordland' },
              { value: 'Oslo', label: 'Oslo' },
              { value: 'Rogaland', label: 'Rogaland' },
              { value: 'Vestfold', label: 'Vestfold' },
              { value: 'Telemark', label: 'Telemark' },
              { value: 'Troms', label: 'Troms' },
              { value: 'Trondelag', label: 'Trøndelag' },
              { value: 'Vestland', label: 'Vestland' },
              { value: 'Viken', label: 'Viken' },
            ]}
            isMulti={true}
            handleOnChange={(value: any) => {
              const locations = value.map((val: any) => {
                return val.value;
              });
              setFilters({ ...filters, county: locations });
              console.log('county', locations);
            }}
          />
        </div>
        <div className='ml-4 w-32'>DATE</div>
        <div className='ml-4 w-72'>
          <FilterDDowns
            selectOptions={[
              { value: 1, label: `1 Bed` },
              { value: 2, label: `2 Bed` },
              { value: 3, label: `3 Bed` },
              { value: 4, label: `4 Bed` },
              { value: 5, label: `5 Bed` },
              { value: 6, label: `6 Bed` },
              { value: 7, label: `7 Bed` },
            ]}
            isMulti={true}
            handleOnChange={(value: any) => {
              const bedAmmount = value.map((val: any) => {
                return val.value;
              });
              setFilters({ ...filters, beds: bedAmmount });
            }}
          />
        </div>
        <div className='ml-4 w-72'>
          <FilterDDowns
            selectOptions={[
              { value: 1, label: '1 Room' },
              { value: 2, label: '2 Rooms' },
              { value: 3, label: '3 Rooms' },
              { value: 4, label: '4 Rooms' },
              { value: 5, label: '5 Rooms' },
              { value: 6, label: '6 Rooms' },
              { value: 7, label: '7 Rooms' },
            ]}
            isMulti={true}
            handleOnChange={(value: any) => {
              const roomAmmount = value.map((val: any) => {
                return val.value;
              });
              setFilters({ ...filters, rooms: roomAmmount });
            }}
          />
        </div>
        <div className='flex'>
          <button
            className='button button__primary'
            onClick={() => {
              handleOnSearch(filters);
            }}
          >
            TEST
          </button>
          <button
            className='button button__secondary'
            onClick={() => {
              setQuery(' ');
              displayValue();
            }}
          >
            clear
          </button>
        </div>
      </div>
      <div className='dropdown mt-4 hover:cursor-pointer'>
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
        <ul className={open ? '' : 'hidden'}>
          {filterCabins(cabins).map((cabin: cardInfo) => {
            return (
              <li
                key={cabin.id}
                onClick={() => {
                  selectCabin(cabin);
                }}
                onTouchEnd={() => {
                  selectCabin(cabin);
                }}
              >
                {cabin.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='mt-4'>
        <FilterDDowns
          selectOptions={[
            { value: 'Tronds murder cabin', label: 'Tronds murder cabin' },
            { value: 'Haunted Cabin', label: 'Haunted Cabin' },
            { value: 'testCabin', label: 'testCabin' },
          ]}
          isMulti={false}
          handleOnChange={(val: any) => {
            console.log('value', val.value);
            console.log('denne functionen skal displaye stuff');
          }}
        />
      </div>
      <h1 className='font-semibold text-primary'>Results</h1>
      <div className='flex justify-between mb-6'>
        <p>Showing xx out of ??</p>

        <div className='button button__secondary flex items-center'>
          Sort
          <Icon
            className=' text-primary text-2xl'
            icon='ant-design:caret-down-outlined'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='mb-3 lg:w-72 md:pr-4 md:mb-0'>
          <h3>Filter</h3>
          <div className='flex flex-col  md:flex-row lg:flex-col'>
            <div>
              <FilterDDowns
                selectOptions={[
                  { value: 'isFire', label: 'Fireplace' },
                  { value: 'isPool', label: 'Pool' },
                  { value: 'isElectricity', label: 'Electricity' },
                  { value: 'isToilet', label: 'Toilet' },
                ]}
                filterType={'Amenities'}
                isMulti={true}
                handleOnChange={(value: any) => {
                  const Amenities = value.map((val: any) => {
                    console.log('neAmenitiesnities', val.value);
                    setFilters({ ...filters, [val.value]: true });
                  });
                  console.log('Array', Amenities);
                }}
              />
            </div>
            <div>
              <FilterDDowns
                selectOptions={[
                  { value: 'isBeach', label: 'Beach' },
                  { value: 'isWater', label: 'Lake' },
                  { value: 'isMountain', label: 'Mountain' },
                  { value: 'isSnow', label: 'Snow' },
                  { value: 'isSea', label: 'Sea' },
                ]}
                filterType={'Locations'}
                isMulti={true}
                handleOnChange={(value: any) => {
                  const Locations = value.map(({ val }: any) => {
                    setFilters({ ...filters, [val]: true });
                  });
                }}
              />
            </div>
            <div>
              <FilterDDowns
                selectOptions={[
                  { value: 'isSlalom', label: 'Slalom' },
                  { value: 'isSkiing', label: 'Skiing' },
                  { value: 'isVolley', label: 'Volleyball' },
                  { value: 'isWateractives', label: 'Water Activities' },
                  { value: 'isWinterActivities', label: 'Winter Activities' },
                  { value: 'isHiking', label: 'Hiking' },
                ]}
                filterType={'Activities'}
                isMulti={true}
                handleOnChange={(value: any) => {
                  const Activities = value.map((val: any) => {
                    if (filters) {
                      console.log('value', val.value);
                    }
                    setFilters({ ...filters, [val.value]: true });
                    console.log('filters', filters);
                  });
                  console.log('Array', Activities);
                }}
              />
            </div>
          </div>
          <div className='w-full px-4 mt-4 md:w-2/3 lg:w-full'>
            <MinimumDistanceSlider />
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
