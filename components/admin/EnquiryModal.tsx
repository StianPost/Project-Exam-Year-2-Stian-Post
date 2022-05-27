import { Field, Form, Formik } from 'formik';

import { Icon } from '@iconify/react';

export const EnquiryModal = ({
  open,
  closeModal,
  enquiry,
}: {
  open: boolean;
  closeModal: any;
  enquiry: any;
}) => {
  if (!open) return null;
  return (
    <div className='modalOverlay'>
      <div className='modal relative'>
        <button className='absolute right-3 top-2' onClick={closeModal}>
          <Icon icon='bi:x-lg' className='text-3xl' />
        </button>
        <Formik
          initialValues={{
            firstName: enquiry.firstName,
            lastName: enquiry.lastName,
            email: enquiry.email,
            phoneNumber: enquiry.phoneNumber,
            subject: enquiry.subject,
            message: enquiry.message,
          }}
          onSubmit={(values) => {}}
        >
          {({ errors, touched }) => (
            <Form>
              <div className='flex flex-col sm:flex-row'>
                <div className='pr-0 sm:pr-2'>
                  <label htmlFor='firstName'>First Name*:</label>
                  <Field
                    disabled
                    id='firstName'
                    name='firstName'
                    type='firstName'
                    className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  />
                </div>
                <div className='pl-0 sm:pl-2'>
                  <label htmlFor='lastName' className='mt-4'>
                    Last Name*:
                  </label>
                  <Field
                    disabled
                    id='lastName'
                    name='lastName'
                    className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  />
                </div>
              </div>
              <div className='flex flex-col sm:flex-row'>
                <div className='pr-0 sm:pr-2'>
                  <label htmlFor='email'>Email*:</label>
                  <Field
                    disabled
                    id='email'
                    name='email'
                    type='email'
                    className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  />
                </div>
                <div className='pl-0 sm:pl-2'>
                  <label htmlFor='phoneNumber' className='mt-4'>
                    Phone:
                  </label>
                  <Field
                    disabled
                    id='phoneNumber'
                    name='phoneNumber'
                    type='phone'
                    className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='subject' className='mt-4'>
                  Subject*:
                </label>
                <Field
                  disabled
                  id='subject'
                  name='subject'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
              </div>
              <div className='mt-2'>
                <label htmlFor='message'>Message*:</label>
                <Field
                  disabled
                  id='message'
                  name='message'
                  component='textarea'
                  placeholder='hallo'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg contactform__message'
                />
              </div>
            </Form>
          )}
        </Formik>
        <button className='button button__secondary' onClick={closeModal}>
          Close Enquiry
        </button>
      </div>
    </div>
  );
};
