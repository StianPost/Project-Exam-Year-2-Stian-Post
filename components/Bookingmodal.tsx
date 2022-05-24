import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '@iconify/react';
import { IconObj } from './IconObj';
import Image from 'next/image';
import { cabinInterface } from '../lib/types';
import moment from 'moment';

interface bookingDetails {
  date: string;
  people: number;
  firstName: string;
  lastName: string;
  email: string;
}

function Bookingmodal({
  open,
  onClose,
  cabin,
}: {
  open: boolean;
  onClose: any;
  cabin: cabinInterface;
}) {
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingClosed, setBookingClosed] = useState<boolean>(false);
  const [cardClosed, setCardClosed] = useState<boolean>(true);
  const [bookingInfo, setBookingInfo] = useState();
  const [paymentInfo, setPaymentInfo] = useState();

  if (!open) return null;

  const myLoader = ({ width = 100, quality = 50 }) => {
    return `${cabin.heroImg}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className='modalOverlay'></div>
      <div className='modal'>
        <div className='relative'>
          <h2 className='text-center'>Checkout</h2>
          <div className='flex flex-col w-full sm:flex-row'>
            <div className='w-full sm:pr-1'>
              <Image
                src={cabin.heroImg}
                alt={`image of ${cabin.title}`}
                width={250}
                height={150}
                loader={myLoader}
                layout={'responsive'}
              />
              <h3 className='font-medium'>{cabin.title}</h3>
              <div className='flex text-primary mb-4 text-3xl'>
                {
                  <div className='pr-5 flex items-center pb-3'>
                    <Icon
                      icon='fa-solid:door-closed'
                      className='mr-1 text-3xl'
                    />
                    <p className=''>{cabin.rooms}</p>
                  </div>
                }
                {
                  <div className='pr-5 flex items-center pb-3'>
                    <Icon icon='fa-solid:bed' className='mr-1 text-3xl' />
                    <p className=''>{cabin.beds}</p>
                  </div>
                }
                {cabin.isPets ? (
                  <div className='pr-5 flex items-center pb-3'>
                    <Icon icon='mdi:paw' className='mr-1 text-3xl' />
                    <p>Pets Allowed</p>
                  </div>
                ) : (
                  <div className='pr-5 flex items-end pb-3'>
                    <Icon icon='mdi:paw-off' className='text-3xl mr-1' />
                    <p>No pets</p>
                  </div>
                )}
              </div>
              <div>
                <h3>Amenities</h3>
                <div className='flex flex-wrap text-quinary'>
                  {cabin.isSlalom ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='fa-solid:skiing' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isHiking ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='fa-solid:hiking' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isSkiing ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa-solid:skiing-nordic'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isWateractives ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='map:jet-skiing' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isWinterActivities ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa-solid:snowboarding'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isFire ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='mdi:fireplace' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isElectricity ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='entypo:power-plug'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isPool ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa-solid:swimming-poo'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isToilet ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='fa6-solid:toilet' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa6-solid:toilet-portable'
                        className='text-3xl mr-1'
                      />
                    </div>
                  )}
                  {cabin.isWater ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa-solid:swimming-pool'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isBeach ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa6-solid:umbrella-beach
                    '
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isSnow ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='bi:cloud-snow-fill'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isSea ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon icon='fa6-solid:water' className='text-3xl mr-1' />
                    </div>
                  ) : (
                    ''
                  )}
                  {cabin.isMountain ? (
                    <div className='pr-5 flex items-end pb-3'>
                      <Icon
                        icon='fa-solid:mountain'
                        className='text-3xl mr-1'
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            <div className='w-full sm:pl-1 modal__part'>
              <BookingInfo
                handleBooking={(val: any) => {
                  setBookingInfo(val);
                  setCardClosed(false);
                }}
                closed={() => {
                  setBookingClosed(true);
                }}
                bookingData={bookingInfo}
                open={bookingClosed}
              />
              <CardDetails
                handlePayment={(val: any) => {
                  setPaymentInfo(val);
                  setIsBooked(true);
                }}
                closed={() => {
                  setCardClosed(true);
                }}
                open={cardClosed}
                bookingInfo={bookingInfo}
                cabinInfo={cabin}
                back={() => {
                  setCardClosed(true);
                  setBookingClosed(false);
                }}
              />
              <BookingMessage
                paymentInfo={paymentInfo}
                bookingInfo={bookingInfo}
                open={isBooked}
                cabin={cabin}
              />
              <button className='absolute top-2 right-3' onClick={onClose}>
                <Icon icon='bi:x-lg' className='text-3xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingmodal;

function BookingInfo({
  handleBooking,
  closed,
  open,
  bookingData,
}: {
  handleBooking: any;
  closed: any;
  open: boolean;
  bookingData: any;
}) {
  const [bookingInfo, setBookingInfo] = useState();

  if (open) return null;

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string()
      .min(2, 'Get a longer name!')
      .max(15, 'Your name is too long!')
      .required('You must have a first name'),
    lastName: Yup.string()
      .min(2, 'Get a longer name!')
      .max(15, 'Your name is too long!')
      .required('You must have a last name'),
    people: Yup.number()
      .min(1, 'There must be atleast 1 person!')
      .max(25, 'Waaay too many!')
      .required('Required'),
    dateFrom: Yup.date().required('You must pick a date!'),
    dateTo: Yup.date().required('You must pick a date!'),
  });

  let initialValues = {
    dateFrom: '',
    dateTo: '',
    people: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  if (bookingData) initialValues = bookingData;

  function onSubmit(val: any) {
    handleBooking(val);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values: any) => {
          onSubmit(values);
          closed(true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='flex flex-wrap justify-between sm:flex-row'>
              <div className='w-1/2 pr-1'>
                <label htmlFor='dateFrom' className='block'>
                  From:
                </label>
                <Field
                  id='dateFrom'
                  name='dateFrom'
                  type='date'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.dateFrom && touched.dateFrom ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.dateFrom}
                  </div>
                ) : null}
              </div>
              <div className='w-1/2 pl-1'>
                <label htmlFor='dateTo' className='block'>
                  To:
                </label>
                <Field
                  id='dateTo'
                  name='dateTo'
                  type='date'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.dateTo && touched.dateTo ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.dateTo}
                  </div>
                ) : null}
              </div>
            </div>
            <div className='mt-2'>
              <label htmlFor='people' className='mt-4'>
                People:
              </label>
              <Field
                id='people'
                name='people'
                type='number'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg'
              />
              {errors.people && touched.people ? (
                <div className='text-red-600 font-semibold'>
                  {errors.people}
                </div>
              ) : null}
            </div>
            <div className='flex flex-col md:flex-row mt-2'>
              <div className='md:pr-1'>
                <label htmlFor='firstName'>First name:</label>
                <Field
                  id='firstName'
                  name='firstName'
                  type='firstName'
                  placeholder='Olav'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.firstName && touched.firstName ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className='mt-2 md:mt-0 md:pl-1'>
                <label htmlFor='lastName' className='mt-4'>
                  Last name:
                </label>
                <Field
                  id='lastName'
                  name='lastName'
                  placeholder='Nordmann'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.lastName && touched.lastName ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className='mt-2'>
              <label htmlFor='email'>Email:</label>
              <Field
                id='email'
                name='email'
                type='email'
                placeholder='olav_nordmann@gmail.com'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg'
              />
              {errors.email && touched.email ? (
                <div className='text-red-600 font-semibold'>{errors.email}</div>
              ) : null}
            </div>

            <button className='button button__primary mt-4' type='submit'>
              Payment
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function CardDetails({
  handlePayment,
  closed,
  open,
  bookingInfo,
  cabinInfo,
  back,
}: {
  handlePayment: any;
  closed: any;
  bookingInfo: any;
  open: boolean;
  back: any;
  cabinInfo: any;
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTaxesPrice, setTotalTaxesPrice] = useState(0);
  const SignupSchema = Yup.object().shape({
    paymentType: Yup.string().required('Payment type required'),
    price: Yup.number().required('You must pay a price'),
    cardNumber: Yup.string()
      .min(16, 'Invalid, too few chars')
      .max(16, 'Invalid, too many characters')
      .required('Required'),
    cvc: Yup.number()
      .min(100, 'Incorrect CVC number, too few characters')
      .max(999, 'Incorrect CVC number, too many characters')
      .required('You must have a cvc/cvv number'),
    expDate: Yup.string()
      .trim()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Must be valid MM/YY')
      .required('you need an expiery date'),
  });

  useEffect(() => {
    function calculateStay(val: any) {
      const startDate = moment(val.dateFrom);
      const endDate = moment(val.dateTo);
      const totalDate = endDate.diff(startDate, 'days');

      const calculation = cabinInfo.price * totalDate;
      const wTaxes = calculation * 1.25;

      setTimeout(() => {
        setTotalPrice(calculation);
        setTotalTaxesPrice(wTaxes);
      }, 300);
    }
    if (bookingInfo) calculateStay(bookingInfo);
  }, [bookingInfo, cabinInfo]);

  if (open) return null;

  function onSubmit(val: bookingDetails) {
    handlePayment(val);
  }

  return (
    <>
      <Formik
        initialValues={{
          paymentType: '',
          price: totalPrice,
          cardNumber: '',
          cvc: '',
          expDate: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any): void => {
          onSubmit({ ...values, price: totalTaxesPrice });
          closed(true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='w-full'>
              <div className='flex-col'>
                <div className='flex flex-col border-b border-quinary'>
                  <div className='flex mb-1'>
                    <p className='mr-4 font-light'>Price:</p>
                    <p className='text-quinary'>{totalPrice} Nok</p>
                  </div>
                  <div className='flex mb-2'>
                    <p className='mr-4 font-light'>Taxes:</p>
                    <p className='text-quinary'>
                      {totalTaxesPrice - totalPrice} Nok
                    </p>
                  </div>
                </div>
                <div className='w-full flex border-b my-2 font-semibold border-quinary text-lg'>
                  <p className='mr-4'>Total:</p>
                  <p>{totalTaxesPrice} Nok</p>
                </div>
              </div>
              <label htmlFor='price' className='mt-4'></label>
              <Field
                id='price'
                name='price'
                type='number'
                disabled
                value={totalPrice}
                className='w-full hidden p-2 border-b-2 border-primary '
              />
              {errors.price && touched.price ? (
                <div className='text-red-600 font-semibold'>{errors.price}</div>
              ) : null}
            </div>

            <div className='flex'>
              <div className='pr-1'>
                <label htmlFor='paymentType'>Payment-type:</label>
                <Field
                  as='select'
                  id='paymentType'
                  name='paymentType'
                  type='paymentType'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                >
                  <option value={''}></option>
                  <option value={'Visa'}>Visa</option>
                  <option value={'MasterCard'}>Mastercard</option>
                  <option value={'BitCoin'}>Bitcoin</option>
                  <option value={'Organs'}>Organs</option>
                </Field>
                {errors.paymentType && touched.paymentType ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.paymentType}
                  </div>
                ) : null}
              </div>
            </div>
            <div className='mt-2'>
              <div>
                <label htmlFor='cardNumber'>Card Number:</label>
                <Field
                  id='cardNumber'
                  name='cardNumber'
                  type='text'
                  placeholder='1234 1234 1234 1234'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.cardNumber && touched.cardNumber ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.cardNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div className='flex mt-2'>
              <div className='pr-1'>
                <label htmlFor='cvc'>cvc/cvv:</label>
                <Field
                  id='cvc'
                  name='cvc'
                  placeholder='123'
                  type='number'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.cvc && touched.cvc ? (
                  <div className='text-red-600 font-semibold'>{errors.cvc}</div>
                ) : null}
              </div>
              <div className='pl-1'>
                <label htmlFor='expDate' className='mt-4'>
                  Exp Date:
                </label>
                <Field
                  id='expDate'
                  name='expDate'
                  placeholder='04/10'
                  type='text'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.expDate && touched.expDate ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.expDate}
                  </div>
                ) : null}
              </div>
            </div>
            <button
              className='button button__secondary w-full mt-4'
              type='button'
              onClick={() => {
                back();
              }}
            >
              Back
            </button>
            <button className='button button__primary mt-4' type='submit'>
              Book
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

function BookingMessage({ paymentInfo, bookingInfo, open, cabin }: any) {
  if (!open) return null;
  return (
    <div className='h-full flex flex-col'>
      <h4 className='mb-2'>
        Thank you{' '}
        <span className='font-semibold'>
          {bookingInfo.firstName} {bookingInfo.lastName}
        </span>{' '}
        for booking {cabin.title}
      </h4>
      <p className=''>
        You booked <span className='font-bold'>{cabin.title}</span>
      </p>
      <div className='mt-4'>
        <p>
          <span className='font-semibold'>From: </span>
          {moment(bookingInfo.dateFrom).format('dddd, MMMM Do YYYY')}
        </p>
        <p className='mt-2'>
          <span className='font-semibold'>To: </span>
          {moment(bookingInfo.dateTo).format('dddd, MMMM Do YYYY')}
        </p>
      </div>
      <div className='mt-4 font-semibold'>
        <p>
          <span>Payment type: </span>
          <span className='font-bold'>{paymentInfo.paymentType}</span>
        </p>
        <p className='mt-2 text-xl'>
          <span className='font-semibold'>Total Price: </span>
          <span className='underline font-bold'>{paymentInfo.price} Nok</span>
        </p>
      </div>
    </div>
  );
}
