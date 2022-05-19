import React, { useEffect, useState } from 'react';

import { BaseURL } from '../../lib/const';
import Footer from '../layout/Footer';
import Head from 'next/head';
import Header from '../layout/Header';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import type { NextPage } from 'next';
import Resultcards from '../../components/Resultcards';
import Search from '../../components/Search';
import axios from 'axios';
import { getCabins } from '../../lib/api';
import { stringify } from 'query-string';

export async function getStaticProps() {
  const cabinArray = await getCabins(BaseURL + '/cabins');

  return {
    props: { cabins: cabinArray },
  };
}

const Results = ({ cabins }: any) => {
  const [searchValue, setSearchValue] = useState(null);
  const [searchParams, setSearchParams] = useState('');
  const [cabinArray, setCabinArray] = useState(cabins);

  const [filteredCabins, setFilteredCabins] = useState(cabinArray);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get(BaseURL + '/cabins/');
      setCabinArray(data);
    })();
  }, []);

  const cabinArrayLength = cabins.length;

  function handleOnSearch(elm: any) {
    let queryString = stringify(elm);
    getSortedCabins(queryString);
  }

  async function getSortedCabins(params: string) {
    const resultCabins = await getCabins(BaseURL + '/cabins' + '?' + params);
    setFilteredCabins(resultCabins);
  }

  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-2 lg:px-4 xl:px-10'>
        <Search
          cabins={filteredCabins}
          searchValue={searchValue}
          onChange={(val: any) => setSearchValue(val)}
          prompt='Select cabin...'
          handleOnSearch={handleOnSearch}
          cabinArrayLength={cabinArrayLength}
        />
      </main>
      <Footer />
    </>
  );
};

export default Results;
