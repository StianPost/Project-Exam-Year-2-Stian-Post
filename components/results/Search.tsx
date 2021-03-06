import React, { useEffect, useRef, useState } from 'react';

import DropDownFilter from './DropDownFilter';
import { Icon } from '@iconify/react';
import MoneySlider from './MoneySlider';
import Resultcards from './Resultcards';

import { cabinInterface } from '../../lib/types';

function Search({
  cabins,
  prompt,
  searchValue,
  onChange,
  handleOnSearch,
  cabinArrayLength,
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

  function filterCabins(): cabinInterface[] {
    return cabins.filter(
      (cabin: cabinInterface) =>
        cabin.title.toLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    );
  }

  function displayValue(): string {
    if (query.length > 0) return query;
    if (searchValue) return searchValue.title;
    return '';
  }

  function selectCabin(cabin: cabinInterface): void {
    setQuery(cabin.title);
    onChange(cabin);
    setOpen(false);
  }

  return (
    <>
      <div className='flex flex-col justify-between sm:justify-start md:flex-row'>
        <div className='w-full flex flex-col justify-between'>
          <div className='flex flex-col justify-between w-full sm:flex-row'>
            <div className='flex flex-col justify-between w-full  sm:flex-row'>
              <div className='w-full sm:max-w-xs'>
                <DropDownFilter
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
                  placeholderText={'County'}
                  isMulti={true}
                  handleOnChange={(value: any) => {
                    const locations = value.map((val: any) => {
                      return val.value;
                    });
                    setFilters({ ...filters, county: locations });
                  }}
                />
              </div>
              <div className='w-full flex mt-2 sm:max-w-xs  sm:mt-0 sm:ml-4'>
                <input className='datePicker' type={'date'} />
              </div>
              <div className='w-full mt-2 sm:max-w-xs  sm:mt-0 sm:ml-4'>
                <DropDownFilter
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
                  placeholderText={'Beds'}
                  handleOnChange={(value: any) => {
                    const bedAmmount = value.map((val: any) => {
                      return val.value;
                    });
                    setFilters({ ...filters, beds: bedAmmount });
                  }}
                />
              </div>
              <div className='w-full mt-2 sm:max-w-xs sm:mt-0 sm:ml-4'>
                <DropDownFilter
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
                  placeholderText={'Rooms'}
                  handleOnChange={(value: any) => {
                    const roomAmmount = value.map((val: any) => {
                      return val.value;
                    });
                    setFilters({ ...filters, rooms: roomAmmount });
                  }}
                />
              </div>
            </div>
            <div className='mt-4 flex flex-col flex-wrap items-center s:flex-row s:items-start sm:mt-0'>
              <button
                className='search search__filter !w-48 sm:ml-2'
                onClick={() => {
                  handleOnSearch(filters);
                  setQuery('');
                  onChange(null);
                  displayValue();
                }}>
                Filter
              </button>
              <button
                className='search search__clear mt-2 s:ml-2 s:mt-0 sm:hidden'
                onClick={() => {
                  setQuery('');
                  onChange(null);
                  displayValue();
                }}>
                Clear
              </button>
            </div>
          </div>
          <div className='dropdown mt-4 hover:cursor-pointer'>
            <div className='w-full flex'>
              <div className='w-full relative'>
                <div className='w-full flex relative'>
                  <input
                    type='text'
                    name='searchBar'
                    id='searchBar'
                    autoComplete='off'
                    ref={ref}
                    placeholder={searchValue ? searchValue.title : prompt}
                    value={displayValue()}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      onChange(null);
                    }}
                    onClick={toggle}
                    onTouchEnd={toggle}
                    className='searchBar'
                  />
                  <label className={`searchBar__label`} htmlFor='searchBar'>
                    <Icon
                      icon={`fa-solid:chevron-${open ? 'up' : 'down'}`}
                      className='searchBar__arrow text-xl'
                      onClick={toggle}
                      onTouchEnd={toggle}
                    />
                  </label>
                </div>
                <ul
                  className={`${
                    open ? 'searchBar__dropDown z-20' : 'hidden'
                  } absolute`}>
                  {filterCabins().map((cabin: cabinInterface) => {
                    return (
                      <li
                        key={cabin.id}
                        className=' searchBar__dropDown__li'
                        onClick={() => {
                          selectCabin(cabin);
                        }}
                        onTouchEnd={() => {
                          selectCabin(cabin);
                        }}>
                        {cabin.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button
                className='search search__clear ml-2 hidden sm:block'
                onClick={() => {
                  setQuery('');
                  onChange(null);
                  displayValue();
                }}>
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between mt-2 sm:flex-row md:mt-0 md:ml-2 md:flex-col'></div>
      </div>
      <div className=' max-w-7xl'>
        <h1 className='font-semibold text-primary'>Results</h1>
        <div className='flex justify-between mb-6'>
          <p>
            Showing {filterCabins().length} out of {cabinArrayLength} Cabins
          </p>

          <div className='button button__secondary flex items-center hover:cursor-pointer'>
            Sort
            <Icon
              className='text-primary text-2xl'
              icon='ant-design:caret-down-outlined'
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row '>
          <div className='mb-3 lg:w-80 md:pr-4 md:mb-0 lg:mr-10'>
            <h3>Filter</h3>
            <div className='flex flex-col  md:flex-row lg:flex-col'>
              <div className='w-full md:max-w-xs md:mr-1 lg:mr-0'>
                <DropDownFilter
                  selectOptions={[
                    { value: 'isFire', label: 'Fireplace' },
                    { value: 'isPool', label: 'Pool' },
                    { value: 'isElectricity', label: 'Electricity' },
                    { value: 'isToilet', label: 'Toilet' },
                  ]}
                  filterType={'Amenities'}
                  isMulti={true}
                  handleOnChange={(value: any) => {}}
                />
              </div>
              <div className='w-full mt-2 md:mt-0 md:max-w-xs md:ml-1 md:mr-1 lg:ml-0 lg:mr-0 lg:mt-2'>
                <DropDownFilter
                  selectOptions={[
                    { value: 'isBeach', label: 'Beach' },
                    { value: 'isWater', label: 'Lake' },
                    { value: 'isMountain', label: 'Mountain' },
                    { value: 'isSnow', label: 'Snow' },
                    { value: 'isSea', label: 'Sea' },
                  ]}
                  filterType={'Locations'}
                  isMulti={true}
                  handleOnChange={(value: any) => {}}
                />
              </div>
              <div className='w-full mt-2 md:mt-0 md:max-w-xs md:ml-1 lg:ml-0 lg:mt-2'>
                <DropDownFilter
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
                  handleOnChange={(value: any) => {}}
                />
              </div>
            </div>
            <p className=' mt-4'>Price/day:</p>
            <div className='w-full px-4 md:w-2/3 lg:w-full'>
              <MoneySlider />
            </div>
          </div>
          <div>
            {filterCabins().length > 0 ? (
              filterCabins().map(
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
                  short_description,
                  isFire,
                  isElectricity,
                  isPool,
                  isToilet,
                  isHiking,
                  isSlalom,
                  isSkiing,
                  isWinterActivities,
                  isWateractives,
                  isPets,
                  rooms,
                  beds,
                }: cabinInterface): any => {
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
                      isFire={isFire}
                      isElectricity={isElectricity}
                      isPool={isPool}
                      isToilet={isToilet}
                      isHiking={isHiking}
                      isSlalom={isSlalom}
                      isSkiing={isSkiing}
                      isWinterActivities={isWinterActivities}
                      isWateractives={isWateractives}
                      isPets={isPets}
                      rooms={rooms}
                      beds={beds}
                    />
                  );
                }
              )
            ) : (
              <p className='font-semibold'>No matching results...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
