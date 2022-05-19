import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

import { apiCall } from '../lib/const';
import axios from 'axios';
import { cabinInterface } from '../lib/types';
import { useRouter } from 'next/router';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(8, 'number too short')
    .max(8, 'number too long')
    .notRequired(),
});

interface MyFormValueTypes {
  email: string;
  subject: string;
  message: string;
}

const EnquiryForm = ({ cabin }: { cabin: cabinInterface }) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (values: any) => {
    console.log(values);
    try {
      let response = await axios.post(
        'http://localhost:1337/enquiries',
        values
      );
      setIsError(false);
      console.log(response);
    } catch (err: any) {
      console.log(err.response.data.message);
      setIsError(true);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='flex flex-col sm:flex-row'>
              <div className='pr-0 sm:pr-2'>
                <label htmlFor='firstName'>First Name*:</label>
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
              <div className='pl-0 sm:pl-2'>
                <label htmlFor='lastName' className='mt-4'>
                  Last Name*:
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
            <div className='flex flex-col sm:flex-row'>
              <div className='pr-0 sm:pr-2'>
                <label htmlFor='email'>Email*:</label>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.email && touched.email ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className='pl-0 sm:pl-2'>
                <label htmlFor='phoneNumber' className='mt-4'>
                  Phone:
                </label>
                <Field
                  id='phoneNumber'
                  name='phoneNumber'
                  type='phone'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className='text-red-600 font-semibold'>
                    {errors.phoneNumber}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor='subject' className='mt-4'>
                Subject*:
              </label>
              <Field
                id='subject'
                name='subject'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg'
              />
              {errors.subject && touched.subject ? (
                <div className='text-red-600 font-semibold'>
                  {errors.subject}
                </div>
              ) : null}
            </div>
            <div className='mt-2'>
              <label htmlFor='message'>Message*:</label>
              <Field
                id='message'
                name='message'
                component='textarea'
                placeholder='hallo'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg contactform__message'
              />
              {errors.message && touched.message ? (
                <div className='text-red-600 font-semibold'>
                  {errors.message}
                </div>
              ) : null}
            </div>
            {isError ? (
              <div className='text-red-600 font-semibold'>
                something went wrong, please try again later
              </div>
            ) : (
              ''
            )}
            <button className='button button__primary mt-4' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EnquiryForm;
