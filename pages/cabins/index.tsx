import React, { useEffect, useState } from 'react';

import Dropdown from '../../components/Search';
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
  const [searchValue, setSearchValue] = useState(null);

  return (
    <>
      <Head>
        <title>Search Results - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-2 md:px-4 lg:px-10'>
        <Dropdown
          cabins={cabins}
          searchValue={searchValue}
          onChange={(val: any) => setSearchValue(val)}
          prompt='Select cabin...'
        />
      </main>
      <Footer />
    </>
  );
};

export default Results;
