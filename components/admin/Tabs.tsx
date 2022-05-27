import {
  cabinInterface,
  enquiryInterface,
  messageInterface,
} from '../../lib/types';

import { BaseURL } from '../../lib/const';
import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Tabs({
  cabinArray,
  contactArray,
  enquiryArray,
  openModal,
  openEnquiry,
  openMessage,
  JWT,
}: {
  cabinArray: cabinInterface[];
  contactArray: messageInterface[];
  enquiryArray: enquiryInterface[];
  openModal: any;
  openEnquiry: any;
  openMessage: any;
  JWT: string;
}): any {
  const [value, setValue] = useState('1');
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Cabins' value='1' />
            <Tab label='Enquiries' value='2' />
            <Tab label='Messages' value='3' />
            <Tab label='Bookings' value='4' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <table className='table-fixed'>
            <thead>
              <tr className='text-left'>
                <th className='w-28'>#ID</th>
                <th className='w-56'>IMG</th>
                <th className='w-64'>Name</th>
                <th className='w-64'>Bed Number</th>
                <th className='w-64'>Room Number</th>
                <th className='w-52'>Price</th>
                <th className='w-52'>Edit</th>
                <th className='w-52'>Delete</th>
              </tr>
            </thead>
            <tbody className='text-xl'>
              {cabinArray.map((elm: cabinInterface) => {
                const myLoader = ({ width = 100, quality = 50 }) => {
                  return `${elm.heroImg}?w=${width}&q=${quality || 75}`;
                };
                return (
                  <tr className='border-b-2' key={elm.id}>
                    <td className='pt-4'>{elm.id}</td>
                    <td className='py-2 pr-2'>
                      <Image
                        className='rounded-lg'
                        src={elm.heroImg}
                        alt={`image of ${elm.title}`}
                        height={20}
                        width={30}
                        layout={'responsive'}
                        loader={myLoader}
                      />
                    </td>
                    <td className='pt-4'>{elm.title}</td>
                    <td className='pt-4'>{elm.beds}</td>
                    <td className='pt-4'>{elm.rooms}</td>
                    <td className='pt-4'>Nok {elm.price}</td>
                    <td className='pt-4'>
                      <Icon
                        className='hover:text-purple-700 hover:cursor-pointer'
                        icon='fa-solid:edit'
                        onClick={() => {
                          openModal(elm);
                        }}
                      />
                    </td>
                    <td className='pt-4'>
                      <Icon
                        icon='fa-solid:trash-alt'
                        className='hover:text-red-600 hover:cursor-pointer'
                        onClick={() => {
                          let deleteProd = confirm(
                            `are you sure you want to delete this Message?`
                          );

                          if (deleteProd) {
                            async function deleteThing() {
                              let { data } = await axios.delete(
                                `${BaseURL}/messages/${elm.id}`,
                                {
                                  headers: {
                                    Authorization: `Bearer ${JWT}`,
                                  },
                                }
                              );
                              router.replace(router.asPath);
                            }
                            deleteThing();
                          }
                        }}
                      />
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
            <tbody className='text-xl'>
              {enquiryArray.map((elm: enquiryInterface) => {
                return (
                  <tr className='border-b-2' key={elm.id}>
                    <td className='py-2'>{elm.id}</td>
                    <td>{elm.firstName}</td>
                    <td>{elm.lastName}</td>
                    <td>{elm.subject}</td>
                    <td>{elm.phoneNumber ? elm.phoneNumber : ''}</td>
                    <td>
                      <Icon
                        icon='fa-solid:eye'
                        className='hover:text-purple-700 hover:cursor-pointer'
                        onClick={() => {
                          openEnquiry(elm);
                        }}
                      />
                    </td>
                    <td>
                      <Icon
                        icon='fa-solid:trash-alt'
                        className='hover:text-red-600 hover:cursor-pointer'
                        onClick={() => {
                          let deleteProd = confirm(
                            `are you sure you want to delete this Enquiry?`
                          );
                          if (deleteProd) {
                            async function deleteThing() {
                              let { data } = await axios.delete(
                                `${BaseURL}/enquiries/${elm.id}`,
                                {
                                  headers: {
                                    Authorization: `Bearer ${JWT}`,
                                  },
                                }
                              );
                              router.replace(router.asPath);
                            }
                            deleteThing();
                          }
                        }}
                      />
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
                <th className='w-96'>Email</th>
                <th className='w-52'>Subject</th>
                <th className='w-52'>Read</th>
                <th className='w-52'>Delete</th>
              </tr>
            </thead>
            <tbody className='text-xl'>
              {contactArray.map((elm: messageInterface) => {
                return (
                  <tr className='border-b-2' key={elm.id}>
                    <td className='py-2'>{elm.id}</td>
                    <td>{elm.email}</td>
                    <td>{elm.subject}</td>
                    <td>
                      <Icon
                        icon='fa-solid:eye'
                        className='hover:text-purple-700 hover:cursor-pointer'
                        onClick={() => {
                          openMessage(elm);
                        }}
                      />
                    </td>
                    <td>
                      <Icon
                        icon='fa-solid:trash-alt'
                        className='hover:text-red-600 hover:cursor-pointer'
                        onClick={() => {
                          let deleteProd = confirm(
                            `are you sure you want to delete this Message?`
                          );
                          if (deleteProd) {
                            async function deleteThing() {
                              let { data } = await axios.delete(
                                `${BaseURL}/contact-messages/${elm.id}`,
                                {
                                  headers: {
                                    Authorization: `Bearer ${JWT}`,
                                  },
                                }
                              );
                              router.replace(router.asPath);
                            }
                            deleteThing();
                          }
                        }}
                      />
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

export default Tabs;
