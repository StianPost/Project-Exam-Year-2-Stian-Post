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

export function Tabs({
  cabinArray,
  contactArray,
  enquiryArray,
  openModal,
  onClose,
  id,
}: any): any {
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
                <th className='w-32'>#ID</th>
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
                    <td>
                      <Icon
                        className='hover:cursor-pointer'
                        icon='fa-solid:edit'
                        onClick={() => {
                          openModal(elm);
                        }}
                      />
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
        <TabPanel value='2'>
          <table className='table-auto'>
            <thead>
              <tr className='text-left'>
                <th className='w-32'>#ID</th>
                <th className='w-52'>First Name:</th>
                <th className='w-52'>Last Name:</th>
                <th className='w-52'>Subject:</th>
                <th className='w-52'>Number:</th>
                <th className='w-52'>Read</th>
                <th className='w-52'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {enquiryArray.map((elm: any) => {
                return (
                  <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.firstName}</td>
                    <td>{elm.lastName}</td>
                    <td>{elm.subject}</td>
                    <td>{elm.phoneNumber ? elm.phoneNumber : ''}</td>
                    <td>
                      <Icon icon='fa-solid:eye' />
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
        <TabPanel value='3'>
          <table className='table-auto'>
            <thead>
              <tr className='text-left'>
                <th className='w-32'>#ID</th>
                <th className='w-52'>Email</th>
                <th className='w-52'>Subject</th>
                <th className='w-52'>Read</th>
                <th className='w-52'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contactArray.map((elm: any) => {
                return (
                  <tr key={elm.id}>
                    <td>{elm.id}</td>
                    <td>{elm.email}</td>
                    <td>{elm.subject}</td>
                    <td>
                      <Icon
                        icon='fa-solid:eye'
                        onClick={() => {
                          console.log(elm.id);
                        }}
                      />
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
        <TabPanel value='4'>Bookings</TabPanel>
      </TabContext>
    </Box>
  );
}

const Admin = ({
  user,
  cabins,
  enquiries,
  messages,
  Open,
  OnClose,
}: any): any => {
  const [modal, setModal] = useState(false);
  const [cabin, setCabin] = useState();
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
      <AdminModal
        open={modal}
        closeModal={() => {
          setModal(false);
        }}
        cabin={cabin}
      />
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
        <Tabs
          cabinArray={cabins}
          enquiryArray={enquiries}
          contactArray={messages}
          openModal={(val) => {
            setModal(true);
            setCabin(val);
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Admin;

export const AdminModal = ({ open, closeModal, cabin }) => {
  if (!open) return null;
  return (
    <div className='modalOverlay'>
      <div className='modal'>
        <h3>You are editing: {cabin.title}</h3>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);
  let user = null;
  let cabins = null;
  let messages = null;
  let enquiries = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      const cabinData = await axios.get(apiCall);
      const contactData = await axios.get(
        'http://localhost:1337/contact-messages'
      );
      const enquiryData = await axios.get('http://localhost:1337/enquiries/');
      cabins = cabinData.data;
      user = data;
      enquiries = enquiryData.data;
      messages = contactData.data;
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
      enquiries,
      messages,
    },
  };
};
