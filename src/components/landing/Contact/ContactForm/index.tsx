import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Error, Center, InputField } from './styles';

export default () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      recaptcha: '',
      success: false
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!')
    })}
    onSubmit={async (
      { name, email, message },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({
            name,
            email,
            message
          })
        });
        setSubmitting(false);
        setFieldValue('success', true);
        setTimeout(() => resetForm(), 6000);
      } catch (err) {
        setSubmitting(false);
        setFieldValue('success', false);
        alert('Something went wrong, please try again!'); // eslint-disable-line
      }
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <InputField>
          <input
            className={'input ' + (touched.name && errors.name ? 'error' : '')}
            type="text"
            name="name"
            aria-label="name"
            placeholder="Full name*"
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <input
            className={
              'input ' + (touched.email && errors.email ? 'error' : '')
            }
            id="email"
            aria-label="email"
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <textarea
            className={
              'input ' + (touched.message && errors.message ? 'error' : '')
            }
            aria-label="message"
            id="message"
            rows={8}
            name="message"
            placeholder="Message*"
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        {values.name && values.email && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
              name="recaptcha"
              onChange={(value) => setFieldValue('recaptcha', value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}
        {values.success && (
          <InputField>
            <Center>
              <h4>
                Your message has been successfully sent, I will get back to you
                ASAP!
              </h4>
            </Center>
          </InputField>
        )}
        <Center>
          <button
            className="button secondary"
            type="submit"
            disabled={isSubmitting}
          >
            {' '}
            Submit
          </button>
        </Center>
      </Form>
    )}
  </Formik>
);
