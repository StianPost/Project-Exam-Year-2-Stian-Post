import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

function Bookingmodal({ open, onClose, cabin }: any) {
  const [booked, setBooked] = useState(false);
  const [payment, setPayment] = useState(false);
  const [bookingClosed, setBookingClosed] = useState(false);
  const [cardClosed, setCardClosed] = useState(true);
  const [bookingInfo, setBookingInfo] = useState({
    date: null,
    people: 0,
    firstName: '',
    lastName: '',
    email: '',
  });
  console.log(bookingClosed);
  if (!open) return null;

  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <h3 className='text-center'>Checkout</h3>
        <div className='flex'>
          <div>
            <h4>{cabin.title}</h4>
            {bookingInfo ? bookingInfo.date : ''}
          </div>
          <div>
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
              handleBooking={(val: any) => {
                setBookingInfo(val);
              }}
              closed={() => {
                setCardClosed(true);
              }}
              open={cardClosed}
            />
            <button className='button button__primary' onClick={onClose}>
              Close
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
    date: Yup.date().required('You must pick a date!'),
  });

  interface bookingDetails {
    date: string;
    people: number;
    firstName: string;
    lastName: string;
    email: string;
  }

  function onSubmit(val: bookingDetails) {
    handleBooking(val);
  }
  if (open) return null;

  return (
    <>
      <h3 className='text-center'>Contact</h3>
      <Formik
        initialValues={{
          date: '',
          people: 0,
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: bookingDetails) => {
          // same shape as initial values
          onSubmit(values);
          closed(true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='flex'>
              <div>
                <label htmlFor='date'>Date:</label>
                <Field
                  id='date'
                  name='date'
                  type='date'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.date && touched.date ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.date}
                  </div>
                ) : null}
              </div>
              <div>
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
            </div>
            <div className='flex'>
              <div>
                <label htmlFor='firstName'>Firstname:</label>
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
              <div>
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
            <div>
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

function CardDetails({ handleBooking, closed, open }) {
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
    date: Yup.date().required('You must pick a date!'),
  });

  interface bookingDetails {
    date: string;
    people: number;
    firstName: string;
    lastName: string;
    email: string;
  }

  function onSubmit(val: bookingDetails) {
    handleBooking(val);
  }
  if (open) return null;

  return (
    <>
      <h3 className='text-center'>Contact</h3>
      <Formik
        initialValues={{
          paymentType: '',
          price: 0,
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          onSubmit(values);
          closed(true);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='flex'>
              <div>
                <label htmlFor='paymentType'>Payment-type:</label>
                <Field
                  as='select'
                  id='paymentType'
                  name='paymentType'
                  type='paymentType'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                >
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
              <div>
                <label htmlFor='price' className='mt-4'>
                  Price:
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
            <div className='flex'>
              <div>
                <label htmlFor='firstName'>Firstname:</label>
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
              <div>
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
            <div>
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
