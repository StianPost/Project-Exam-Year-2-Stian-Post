import * as Yup from 'yup';

import { Field, Form, Formik } from 'formik';

import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password is too short')
    .max(15, 'Password is too long')
    .required('Required'),
  identifier: Yup.string().email('Invalid email').required('Required'),
});

const LoginComponent = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('/api/login', { ...values });
      router.push('/Admin');
      setIsError(false);
      setIsSuccess(true);
    } catch (err: any) {
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          identifier: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any): void => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='mt-2'>
              <label htmlFor='identifier'>Email:</label>
              <Field
                id='identifier'
                name='identifier'
                type='email'
                className='w-full p-2 border-solid border-primary border-2 rounded-lg'
              />
              {errors.identifier && touched.identifier ? (
                <div className='text-red-600 font-semibold'>
                  {errors.identifier}
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
            {isError ? (
              <div className='text-red-600 font-semibold'>
                Invalid Email or Password
              </div>
            ) : (
              ''
            )}
            {isSuccess ? (
              <div className='text-green-600 font-semibold'>Success</div>
            ) : (
              ''
            )}
            <button className='button button__primary mt-4' type='submit'>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
