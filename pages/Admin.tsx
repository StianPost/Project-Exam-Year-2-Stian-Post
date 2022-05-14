import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import nookies, { destroyCookie, parseCookies, setCookie } from 'nookies';
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
  // const { email, username } = user;
  console.log(user);
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
          {/* <div>Username: {username}</div>
          <div>Email: {email}</div> */}
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
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Longer title needed')
      .max(25, 'Title is too long')
      .required('You must have a title'),
    description: Yup.string()
      .min(20, 'Need a longer description!')
      .max(1000, 'Desciption is too long')
      .required('You must have a description'),
    short_description: Yup.string()
      .min(20, 'Need a longer description')
      .max(250, 'Description is too long')
      .required('You must have a description'),
    extra_description: Yup.string()
      .min(20, 'Need a longer description')
      .max(550, 'Description is too long')
      .required('You must have a description'),
    rooms: Yup.number()
      .min(1, 'There must be atleast 1 room')
      .max(25, 'WOooh that is allot of rooms')
      .required('Rooms are required'),
    beds: Yup.number()
      .min(1, 'There must be atleast one bed!')
      .max(50, 'That is way too many beds, calm down')
      .required('Required'),
    map: Yup.string()
      .min(2, 'Map link must be longer')
      .required('There must be a map link'),
    heroImg: Yup.string()
      .min(2, 'Hero Img link must be longer')
      .required('There must be a Hero Img link'),
    county: Yup.string().required('The cabin must be in a county'),
    adress: Yup.string()
      .min(2, 'This adress is too short')
      .max(50, 'There is no adress this long')
      .required('The cabin must have an adress'),
  });
  // function onSubmit(val: any) {
  //   console.log(val);
  // }
  if (!open) return null;
  return (
    <div className='modalOverlay'>
      <div className='modal'>
        <h3>You are editing: {cabin.title}</h3>
        <div>
          <Formik
            initialValues={{
              title: cabin.title,
              description: cabin.description,
              heroImg: cabin.heroImg,
              adress: cabin.adress,
              map: cabin.map,
              price: cabin.price,
              extra_description: cabin.extra_description,
              short_description: cabin.short_description,
              county: cabin.county,
              isFeatured: cabin.isFeatured,
              beds: cabin.beds,
              rooms: cabin.rooms,
              isFire: cabin.isFire,
              isPool: cabin.isPool,
              isElectricity: cabin.isElectricity,
              isBeach: cabin.isBeach,
              isToilet: cabin.isToilet,
              isWater: cabin.isWater,
              isSea: cabin.isSea,
              isMountain: cabin.isMountain,
              isSnow: cabin.isSnow,
              isSlalom: cabin.isSlalom,
              isSkiing: cabin.isSkiing,
              isWinterActivities: cabin.isWinterActivities,
              isWaterActivities: cabin.isWaterActivities,
              isHiking: cabin.isHiking,
              isPets: cabin.isPets,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: any) => {
              // same shape as initial values
              // onSubmit(values);
              console.log(values);
              async function editProd(editedCabin: any) {
                console.log(editedCabin);
                try {
                  const response = await axios.put(
                    `http://localhost:1337/cabins/${cabin.id}`,
                    editedCabin
                  );
                  console.log('it worked!', editedCabin);
                } catch (error) {
                  console.log('error', error);
                }
              }
              editProd(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='flex flex-wrap justify-between sm:flex-row'>
                  <div className='w-1/2 pr-1'>
                    <label htmlFor='title' className='block'>
                      Cabin title:
                    </label>
                    <Field
                      id='title'
                      name='title'
                      type='title'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.title && touched.title ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.title}
                      </div>
                    ) : null}
                  </div>
                  <div className='w-1/2 pl-1'>
                    <label htmlFor='price' className='block'>
                      Price pr day:
                    </label>
                    <Field
                      id='price'
                      name='price'
                      type='number'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.price && touched.price ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.price}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className='mt-2'>
                  <label htmlFor='description' className='mt-4'>
                    Description:
                  </label>
                  <Field
                    id='description'
                    name='description'
                    component='textarea'
                    type='number'
                    className='w-full h-60 p-2 border-solid border-primary border-2 rounded-lg'
                  />
                  {errors.description && touched.description ? (
                    <div className='text-red-600 font-semibold'>
                      {errors.description}
                    </div>
                  ) : null}
                </div>
                <div className='mt-2'>
                  <label htmlFor='short_description' className='mt-4'>
                    Short description:
                  </label>
                  <Field
                    id='short_description'
                    name='short_description'
                    component='textarea'
                    type='number'
                    className='w-full h-60 p-2 border-solid border-primary border-2 rounded-lg'
                  />
                  {errors.short_description && touched.short_description ? (
                    <div className='text-red-600 font-semibold'>
                      {errors.short_description}
                    </div>
                  ) : null}
                </div>
                <div className='mt-2'>
                  <label htmlFor='extra_description' className='mt-4'>
                    Extra description:
                  </label>
                  <Field
                    id='extra_description'
                    name='extra_description'
                    component='textarea'
                    type='number'
                    className='w-full h-60 p-2 border-solid border-primary border-2 rounded-lg'
                  />
                  {errors.extra_description && touched.extra_description ? (
                    <div className='text-red-600 font-semibold'>
                      {errors.extra_description}
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col md:flex-row mt-2'>
                  <div className='md:pr-1'>
                    <label htmlFor='beds'>Beds</label>
                    <Field
                      id='beds'
                      name='beds'
                      type='number'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.beds && touched.beds ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.beds}
                      </div>
                    ) : null}
                  </div>
                  <div className='mt-2 md:mt-0 md:pl-1'>
                    <label htmlFor='rooms' className='mt-4'>
                      Rooms:
                    </label>
                    <Field
                      id='rooms'
                      name='rooms'
                      type='number'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.rooms && touched.rooms ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.rooms}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className='flex flex-col md:flex-row mt-2'>
                  <div className='md:pr-1'>
                    <label htmlFor='map'>Map Link:</label>
                    <Field
                      id='map'
                      name='map'
                      type='text'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.map && touched.map ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.map}
                      </div>
                    ) : null}
                  </div>
                  <div className='mt-2 md:mt-0 md:pl-1'>
                    <label htmlFor='heroImg' className='mt-4'>
                      Hero Img Url:
                    </label>
                    <Field
                      id='heroImg'
                      name='heroImg'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.heroImg && touched.heroImg ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.heroImg}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className='flex flex-col md:flex-row mt-2'>
                  <div className='md:pr-1'>
                    <label htmlFor='county'>County:</label>
                    <Field
                      as='select'
                      id='county'
                      name='county'
                      type='text'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    >
                      <option value={cabin.county}>{cabin.county}</option>
                      <option value='Agder'>Agder</option>
                      <option value='Finnmark'>Finnmark</option>
                      <option value='Innlandet'>Innlandet</option>
                      <option value='More og Romsdal'>More og Romsdal</option>
                      <option value='Nordland'>Nordland</option>
                      <option value='Oslo'>Oslo</option>
                      <option value='Rogaland'>Rogaland</option>
                      <option value='Vestfold'>Vestfold</option>
                      <option value='Telemark'>Telemark</option>
                      <option value='Troms'>Troms</option>
                      <option value='Trondelag'>Trondelag</option>
                      <option value='Vestland'>Vestland</option>
                      <option value='Viken'>Viken</option>
                    </Field>
                    {errors.county && touched.county ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.county}
                      </div>
                    ) : null}
                  </div>
                  <div className='mt-2 md:mt-0 md:pl-1'>
                    <label htmlFor='adress' className='mt-4'>
                      Adress:
                    </label>
                    <Field
                      id='adress'
                      name='adress'
                      className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                    />
                    {errors.adress && touched.adress ? (
                      <div className='text-red-600 font-semibold'>
                        {errors.adress}
                      </div>
                    ) : null}
                  </div>
                </div>

                <button className='button button__primary mt-4' type='submit'>
                  Edit Cabin
                </button>
              </Form>
            )}
          </Formik>
        </div>
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
