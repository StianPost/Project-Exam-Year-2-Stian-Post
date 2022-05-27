import { BaseURL } from '../lib/const';
import { CabinModal } from '../components/admin/CabinModal';
import { EnquiryModal } from '../components/admin/EnquiryModal';
import Footer from '../components/layout/Footer';
import Head from 'next/head';
import Header from '../components/layout/Header';
import { MessageModal } from '../components/admin/MessageModal';
import Tabs from '../components/admin/Tabs';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Admin = ({
  user,
  cabins,
  enquiries,
  messages,
  JWT,
}: {
  user: any;
  cabins: any;
  enquiries: any;
  messages: any;
  JWT: string;
}): any => {
  const [cabinModal, setCabinModal] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [cabin, setCabin] = useState(null);
  const [message, setMessage] = useState();
  const [enquiry, setEnquiry] = useState();

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
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content={`Cabinfeever's Admin page, admin only, there's nothing for you to see here`}
        />
      </Head>
      <Header />
      <CabinModal
        open={cabinModal}
        closeModal={() => {
          setCabinModal(false);
          setCabin(null);
        }}
        JWT={JWT}
        cabin={cabin}
      />
      <MessageModal
        open={messageModal}
        closeModal={() => {
          setMessageModal(false);
        }}
        message={message}
      />
      <EnquiryModal
        open={enquiryModal}
        closeModal={() => {
          setEnquiryModal(false);
        }}
        enquiry={enquiry}
      />
      <main className='px-2 md:px-4 lg:px-10'>
        <div className='flex justify-between items-center'>
          <div className='mb-4'>
            <h1>Admin</h1>
            <button className='button button__secondary h-fit' onClick={logout}>
              Log Out
            </button>
          </div>

          <div>
            <button
              className='button button__primary'
              onClick={() => {
                setCabinModal(true);
              }}
            >
              Add New Cabin
            </button>
          </div>
        </div>

        <Tabs
          cabinArray={cabins}
          enquiryArray={enquiries}
          contactArray={messages}
          openModal={(val: any) => {
            setCabinModal(true);
            setCabin(val);
          }}
          openEnquiry={(val: any) => {
            setEnquiryModal(true);
            setEnquiry(val);
          }}
          openMessage={(val: any) => {
            setMessageModal(true);
            setMessage(val);
          }}
          JWT={JWT}
        />
      </main>
      <Footer />
    </>
  );
};

export default Admin;

export const getServerSideProps = async (ctx: any) => {
  let user = null;

  const JWT = parseCookies(ctx).jwt;

  if (JWT) {
    try {
      const loginData = await axios.get(BaseURL + '/users/me', {
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
      });
      user = loginData.data;
    } catch (e) {}
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  const cabinData = await axios.get(BaseURL + '/cabins');
  const contactData = await axios.get(BaseURL + '/contact-messages');
  const enquiryData = await axios.get(BaseURL + '/enquiries/');

  return {
    props: {
      user,
      cabins: cabinData.data,
      enquiries: enquiryData.data,
      messages: contactData.data,
      JWT,
    },
  };
};
