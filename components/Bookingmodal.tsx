import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

function Bookingmodal({ open, onClose, cabin }: any) {
  const [booked, setBooked] = useState(false);
  const [payment, setPayment] = useState(false);
  if (!open) return null;

  return (
    <>
      <div className='overlay'></div>
      <div className='modal'>
        <h3 className='text-center'>Checkout</h3>
        <div className='flex'>
          <div>
            <h4>{cabin.title}</h4>
          </div>
          <div>
            <BookingInfo />
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

function BookingInfo() {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    subject: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    message: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  interface MyFormValueTypes {
    email: string;
    subject: string;
    message: string;
  }

  return (
    <>
      <h3 className='text-center'>Contact</h3>
      <Formik
        initialValues={{
          date: '',
          people: '',
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
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
