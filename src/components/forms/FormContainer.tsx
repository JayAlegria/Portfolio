import React, { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormTextField } from './FormTextField';

type FormType = {
  initialValues: {};
  onSubmit: (values: {}, onSubmit: { resetForm: () => void }) => void;
  validationSchema: {};
};

export const FormContainer: FC<FormType> = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <FormTextField name="name" placeHolder="Your Name" />
        <FormTextField name="email" placeHolder="Your Your Email" />
        <FormTextField name="subject" placeHolder="Subject" />
        <FormTextField name="message" placeHolder="Message" />
        <input type="submit" className="btn btn-green text-black" />
      </Form>
    </Formik>
  );
};
