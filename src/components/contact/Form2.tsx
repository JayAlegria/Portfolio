import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const onSubmit = (values: any) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email format',
    )
    .required('Email Required'),
  subject: Yup.string().required('Name is required'),
  message: Yup.string().required('Name is required'),
});

export const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.errors);
  return (
    <div className="mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              name="name"
              id="name"
              type="text"
              placeholder="Your Name"
            />
            {formik.errors.name && formik.touched.name && <span className="text-danger">{formik.errors.name}</span>}
          </div>
          <div className="col">
            <input
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              id="email"
              type="email"
              placeholder="Your Email"
            />
            {formik.errors.email && formik.touched.email && <span className="text-danger">{formik.errors.email}</span>}
          </div>
        </div>
        <input
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          name="subject"
          id="subject"
          type="text"
          placeholder="Subject"
        />
        {formik.errors.subject && formik.touched.subject && <span className="text-red">{formik.errors.subject}</span>}
        <textarea
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          name="message"
          id="message"
          placeholder="Message"
        />
        {formik.errors.message && formik.touched.message && (
          <span className="text-danger">{formik.errors.message}</span>
        )}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
