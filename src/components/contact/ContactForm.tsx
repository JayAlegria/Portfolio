import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormTextField } from '../forms/FormTextField';
import { FormTextAreaField } from '../forms/FormTextAreaField';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const onSubmit = (values: {}, onSubmit: { resetForm: () => void }) => {
  console.log(values);
  onSubmit.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email format',
    )
    .required('Email Required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export const ContactForm = () => {
  return (
    <div className="mt-5 p-4 bg-clear">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <div className="row">
            <div className="col-md-6 form-group">
              <FormTextField name="name" label="Your Name" />
            </div>
            <div className="col-md-6 form-group">
              <FormTextField name="email" label="Your Your Email" />
            </div>
          </div>
          <div className="form-group">
            <FormTextField name="subject" label="Subject" />
          </div>
          <div className="form-group">
            <FormTextAreaField name="message" label="Message" />
          </div>
          <div className="form-group">
            <input value="Send" type="submit" className="btn d-lg-inline-block d-block btn-green" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
