import * as Yup from 'yup';

import { BaseURL, apiCall } from '../lib/const';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';

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

const ContactForm = () => {
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (values: any) => {
    console.log(values);
    try {
      let response = await axios.post(BaseURL + '/contact-messages', values);
      setIsError(false);
      setIsSent(true);
      console.log(response);
    } catch (err: any) {
      console.log(err.response.data.message);
      setIsError(true);
      setIsSent(false);
    }
  };
  return (
    <>
      <h3 className='text-center'>Contact</h3>
      <Formik
        initialValues={{
          email: '',
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
            <div>
              <label htmlFor='email'>Email*:</label>
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
            <div className='mt-2'>
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
            <div>
              {isSent ? (
                <div className='text-green-600 font-bold'>
                  Your message got sent safely!
                </div>
              ) : null}
              {isError ? (
                <div className='text-red-600 font-bold'>
                  Something went wrong, please try again later
                </div>
              ) : null}
            </div>
            <button className='button button__primary mt-4' type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
