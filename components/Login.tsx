import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

import React from 'react';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password is too short')
    .max(15, 'Password is too long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function Login() {
  const [toggleModal, setToggleModal] = useState(false);

  function LoginModal() {
    return (
      <div className='modalOverlay'>
        <div className='modal'>
          <h2 className='text-center'>Testing</h2>
          <div>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values: any): void => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className='mt-2'>
                    <label htmlFor='email'>Email:</label>
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
                  <div className='mt-2'>
                    <div>
                      <label htmlFor='password'>Password:</label>
                      <Field
                        id='password'
                        name='password'
                        type='password'
                        className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                      />
                      {errors.password && touched.password ? (
                        <div className='text-red-600 font-semibold'>
                          {errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <button className='button button__primary mt-4' type='submit'>
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <button
            onClick={() => {
              setToggleModal(false);
            }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => {
          setToggleModal(true);
          console.log(toggleModal);
        }}
      >
        Login
      </button>
      {toggleModal ? <LoginModal /> : ''}
    </div>
  );
}

export default Login;
