import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const onSubmit = (values: any, onSubmit: any) => {
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

export const TestForm = () => {
  return (
    <div className="mt-5">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <div className="row">
            <div className="col">
              <Field className="form-control" name="name" id="name" type="text" placeholder="Your Name" />
              <ErrorMessage name="name" />
            </div>
            <div className="col">
              <Field className="form-control" name="email" id="email" type="email" placeholder="Your Email" />
              <ErrorMessage name="email" />
            </div>
          </div>
          <Field className="form-control" name="subject" id="subject" type="text" placeholder="Subject" />
          <ErrorMessage name="subject" />
          <Field as="textarea" className="form-control" name="message" id="message" placeholder="Message" />
          <ErrorMessage name="message" />
          <input type="submit" value="submit" />
        </Form>
      </Formik>
    </div>
  );
};
