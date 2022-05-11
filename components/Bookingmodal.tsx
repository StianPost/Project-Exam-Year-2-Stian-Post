import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

import { Icon } from '@iconify/react';
import { IconObj } from './IconObj';
import Image from 'next/image';
import moment from 'moment';

interface bookingDetails {
  date: string;
  people: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface bookingDetails {
  date: string;
  people: number;
  firstName: string;
  lastName: string;
  email: string;
}

function Bookingmodal({ open, onClose, cabin }: any) {
  const [booked, setBooked] = useState(false);
  const [payment, setPayment] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingClosed, setBookingClosed] = useState(false);
  const [cardClosed, setCardClosed] = useState(true);
  const [bookingInfo, setBookingInfo] = useState({
    date: null,
    people: 0,
    firstName: '',
    lastName: '',
    email: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({});
  if (!open) return null;

  const myLoader = ({ width = 200, quality = 100 }) => {
    return `${cabin.heroImg}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className='modalOverlay'></div>
      <div className='modal'>
        <h2 className='text-center'>Checkout</h2>
        <div className='flex flex-col w-full sm:flex-row'>
          <div className='w-full md:w-1/2 modal__part sm:pr-1'>
            <div className='w-full'>
              <Image
                src={cabin.heroImg}
                alt={`image of ${cabin.title}`}
                width={250}
                height={150}
                loader={myLoader}
                layout={'responsive'}
              />
            </div>
            <div className=''>
              <h3 className='font-medium'>{cabin.title}</h3>
              <div className='flex text-primary mb-4'>
                <IconObj
                  additionalInfo={' Rooms'}
                  iconString={'fa-solid:door-closed'}
                  object={cabin.rooms}
                />

                {cabin.isPets ? (
                  <IconObj
                    additionalInfo={' Pets allowed'}
                    iconString={'fa-paw'}
                    object={''}
                  />
                ) : (
                  ''
                )}
              </div>
              <div>
                <h3>Amenities</h3>
                <div>
                  {cabin.isFire ? (
                    <IconObj
                      additionalInfo={' Pets allowed'}
                      iconString={'fa-paw'}
                      object={''}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 modal__part sm:pl-1'>
            <BookingInfo
              handleBooking={(val: any) => {
                setBookingInfo(val);
                setCardClosed(false);
              }}
              closed={() => {
                setBookingClosed(true);
              }}
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
            />
            <BookingMessage
              paymentInfo={paymentInfo}
              bookingInfo={bookingInfo}
              open={isBooked}
              cabin={cabin}
            />
            <button className='button button__secondary mt-4' onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookingmodal;

function BookingInfo({ handleBooking, closed, open }) {
  const [bookingInfo, setBookingInfo] = useState({});
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

  function onSubmit(val: any) {
    handleBooking(val);
  }

  if (open) return null;

  return (
    <>
      <Formik
        initialValues={{
          dateFrom: '',
          dateTo: '',
          people: 0,
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any) => {
          // same shape as initial values
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

function CardDetails({ handlePayment, closed, open, bookingInfo, cabinInfo }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    paymentType: Yup.string().required('Payment type required'),
    price: Yup.number().required('You must pay a price'),
    cardNumber: Yup.string()
      .min(16, 'Invalid, too few chars')
      .max(16, 'Invalid, too many characters')
      .required('Required'),
    cvc: Yup.number()
      .min(100, 'Too few characters')
      .max(999, "That's too many characters")
      .required('You must have a cvc/cvv number'),
    expDate: Yup.string()
      .min(6, "that's wrong")
      .max(6, "that's too much wrong")
      .required('you need an expiery date'),
  });
  if (open) return null;

  interface paymentDetails {
    paymentType: string;
    price: number;
    cardNumber: string;
    email: string;
    cvc: number;
    expDate: string;
  }

  function onSubmit(val: bookingDetails) {
    handlePayment(val);
  }
  if (totalPrice === 0) {
    function calculateStay(val) {
      const startDate = moment(val.dateFrom);
      const endDate = moment(val.dateTo);
      const totalDate = endDate.diff(startDate, 'days');

      const calculation = cabinInfo.price * totalDate;
      setTotalPrice(calculation);
    }
    calculateStay(bookingInfo);
  }

  return (
    <>
      <h3 className='text-center'>Contact</h3>
      <Formik
        initialValues={{
          paymentType: '',
          price: 0,
          cardNumber: '',
          email: '',
          cvc: '',
          expDate: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any): void => {
          // same shape as initial values
          onSubmit(values);
          closed(true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
                  <option value={'visa'}>Visa</option>
                  <option value={'masterCard'}>Mastercard</option>
                  <option value={'bitCoin'}>Bitcoin</option>
                  <option value={'organs'}>Organs</option>
                </Field>
                {errors.paymentType && touched.paymentType ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.paymentType}
                  </div>
                ) : null}
              </div>
              <div className='pl-1'>
                <label htmlFor='price' className='mt-4'>
                  Price:
                </label>
                <Field
                  id='price'
                  name='price'
                  type='number'
                  value={totalPrice}
                  disabled
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
              <div>
                <label htmlFor='cardNumber'>Card Number:</label>
                <Field
                  id='cardNumber'
                  name='cardNumber'
                  type='text'
                  placeholder='1234123412341234'
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
            <div className='mt-2'>
              <label htmlFor='email'>Email:</label>
              <Field
                id='email'
                name='email'
                type='email'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg'
              />
              {errors.email && touched.email ? (
                <div className='text-red-600 font-semibold'>{errors.email}</div>
              ) : null}
            </div>
            <button type='button' onClick={() => {}}>
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

function BookingMessage({ paymentInfo, bookingInfo, open, cabin }) {
  if (!open) return <div></div>;
  return (
    <div>
      <h5>
        Thank you {bookingInfo.firstName} for your booking {cabin.title}
      </h5>
    </div>
  );
}
