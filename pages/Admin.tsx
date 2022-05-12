import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Footer from './layout/Footer';
import Head from 'next/head';
import Header from './layout/Header';
import { Icon } from '@iconify/react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { apiCall } from '../lib/const';
import axios from 'axios';
import { getCabins } from '../lib/api';
import nookies from 'nookies';
import { useRouter } from 'next/router';

export function LabTabs({ cabinArray }) {
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
        <TabPanel value='1'>
          <table className='table-auto'>
            <thead>
              <tr className='text-left'>
                <th className='w-52 text-left'>#ID</th>
                <th className='w-52'>Name</th>
                <th className='w-52'>Price</th>
                <th className='w-52'>Edit</th>
                <th className='w-52'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cabinArray.map((elm: any) => {
                return (
                  <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.title}</td>
                    <td>{elm.price}</td>
                    <td
                      onClick={() => {
                        console.log(elm.id);
                      }}
                    >
                      <Icon icon='fa-solid:edit' />
                    </td>
                    <td>
                      <Icon icon='fa-solid:trash-alt' />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>
        <TabPanel value='2'>Enquiries</TabPanel>
        <TabPanel value='3'>Messages</TabPanel>
        <TabPanel value='4'>Bookings</TabPanel>
      </TabContext>
    </Box>
  );
}

const Admin = ({ user, cabins }: any): any => {
  // Log Out
  const router = useRouter();
  const { email, username } = user;

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
        <LabTabs cabinArray={cabins} />
      </main>
      <Footer />
    </>
  );
};

export default Admin;

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);
  let user = null;
  let cabins = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      const cabinData = await axios.get(apiCall);
      cabins = cabinData.data;
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
      cabins,
    },
  };
};
