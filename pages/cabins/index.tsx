import React, { useEffect, useState } from 'react';

import { BaseURL } from '../../lib/const';
import Footer from '../../components/layout/Footer';
import Head from 'next/head';
import Header from '../../components/layout/Header';
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
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={`Results page for Cabin fever, here's where you can find all our wonderful cabins`}
        />
      </Head>
      <Header />
      <main className='mainWidth px-2 lg:px-4 xl:px-10'>
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
