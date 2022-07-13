import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { FormTextField } from '../forms/FormTextField';
import { FormTextAreaField } from '../forms/FormTextAreaField';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';
import { FormFeedbackToast } from '../forms/FormFeedbackToast';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
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
  const [isSending, setIsSending] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = (values: {}, onSubmit: { resetForm: () => void }) => {
    setIsSending(true);
    emailjs
      .send('service_ql4gobi', 'template_qqqrt1e', values, 'RPzS4wXvcgFeLsAfN')
      .then((res) => {
        setIsSending(false);
        setShowFeedback(true);
        setEmailSent(true);
      })
      .catch((err) => {
        setIsSending(false);
        setShowFeedback(false);
        setEmailSent(false);
      });
    onSubmit.resetForm();
  };

  const closeToast = () => {
    setShowFeedback(false);
  };
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
            <button type="submit" className="btn d-lg-inline-block d-block btn-green">
              {isSending && (
                <>
                  <span>Sending </span>
                  <Spinner animation="border" size="sm" />
                </>
              )}
              {!isSending && <strong>Send</strong>}
            </button>
          </div>
        </Form>
      </Formik>
      {emailSent && (
        <FormFeedbackToast
          show={showFeedback}
          heading="Email sent successfully"
          body="Thank you for your interest. I will get back to you as soon as I can"
          variant="success"
          onClose={closeToast}
        />
      )}
      {!emailSent && (
        <FormFeedbackToast
          show={showFeedback}
          heading="Email not sent!"
          body="Email not sent for some reason. You can send email here alegriajaylaurence@gmail.com"
          variant="failed"
          onClose={closeToast}
        />
      )}
    </div>
  );
};
