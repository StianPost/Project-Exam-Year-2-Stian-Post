import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import nookies from 'nookies';
import { useRouter } from 'next/router';

export function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab
              className=' border-2 !border-primary border-solid rounded-t-lg text-xl !text-primary !font-bold'
              label='Cabins'
              value='1'
            />
            <Tab label='Enquiries' value='2' />
            <Tab label='Messages' value='3' />
            <Tab label='Bookings' value='4' />
          </TabList>
        </Box>
        <TabPanel value='1'>Cabins</TabPanel>
        <TabPanel value='2'>Enquiries</TabPanel>
        <TabPanel value='3'>Messages</TabPanel>
        <TabPanel value='4'>Bookings</TabPanel>
      </TabContext>
    </Box>
  );
}

const Admin = (props: any) => {
  const [openCabins, setOpenCabins] = useState(true);
  const [openEnquires, setOpenEnquires] = useState(false);
  const [openMessages, setOpenMessages] = useState(false);
  const [openBookings, setOpenBookings] = useState(false);
  const [openAddCabins, setOpenAddCabins] = useState(false);
  // Log Out
  const router = useRouter();
  const {
    user: { email, username },
  } = props;

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      router.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>Admin - Cabin fever</title>
      </Head>
      <Header />
      <main className='px-2 md:px-4 lg:px-10'>
        <h1>Admin</h1>
        <div>
          <div>Username: {username}</div>
          <div>Email: {email}</div>
          <button onClick={logout}>Logout</button>
        </div>
        <div className='flex justify-between'>
          <div>
            <button className='button button__primary'>Add</button>
          </div>
        </div>
        <div></div>
        <LabTabs />
      </main>
      <Footer />
    </>
  );
};

export default Admin;

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};
