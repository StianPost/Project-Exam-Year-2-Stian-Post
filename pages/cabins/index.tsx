import React, { useEffect, useState } from 'react';

import Footer from '../layout/Footer';
import Head from 'next/head';
import Header from '../layout/Header';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Resultcards from '../../components/Resultcards';
import { apiCall } from '../../lib/const';
import { cardInfo } from '../../lib/types';
import { getCabins } from '../../lib/api';

export async function getStaticProps() {
  const cabinArray = await getCabins(apiCall);

  return {
    props: { cabins: cabinArray },
  };
}

const Results = ({ cabins }: any) => {
  const [searchValue, setSearchValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const onSearchClick = (searchTerm): void => {
    setSearchValue(searchTerm);
  };

  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-2 md:px-4 lg:px-10'>
        <div>
          <div>
            <input
              type='text'
              name='searchBar'
              id='searchBar'
              className='border border-solid border-black'
              onChange={(event) => {
                onChange(event);
              }}
              value={searchValue}
            />
            <button>Search</button>
          </div>
          <div className='dropDown'>
            {cabins
              .filter((cabin: cardInfo): boolean | string => {
                const searchTerm = searchValue.toLowerCase().trim();
                const cabinName = cabin.title.toLowerCase();

                return (
                  searchTerm &&
                  cabinName.includes(searchTerm) &&
                  cabinName !== searchTerm
                );
              })
              .slice(0, 10)
              .map(({ id, title }: { id: number; title: string }) => {
                return (
                  <div key={id}>
                    <p
                      onClick={() => {
                        onSearchClick(title);
                      }}
                    >
                      {title}
                    </p>
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
          <div className='mb-3 w-auto md:w-72 md:mb-0'>
            <h3>Filter</h3>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
            <p>Placeholder</p>
          </div>
          <div>
            {cabins.map(
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
      </main>
      <Footer />
    </>
  );
};

export default Results;
