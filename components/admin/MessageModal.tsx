import { Field, Form, Formik } from 'formik';

import { Icon } from '@iconify/react';

export const MessageModal = ({
  open,
  closeModal,
  message,
}: {
  open: boolean;
  closeModal: any;
  message: any;
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
            email: message.email,
            subject: message.subject,
            message: message.message,
          }}
          onSubmit={(values) => {}}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor='email'>Email*:</label>
                <Field
                  disabled
                  id='email'
                  name='email'
                  type='email'
                  className='w-full p-2 border-solid border-primary border-2 rounded-lg'
                />
              </div>
              <div className='mt-2'>
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
          Close Message
        </button>
      </div>
    </div>
  );
};
