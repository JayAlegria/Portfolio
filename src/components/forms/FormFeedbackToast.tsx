import React, { FC } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import './FormFeedbackToast.scss';

interface Props {
  heading: string;
  body: string;
  show: boolean;
  variant: 'success' | 'failed';
  onClose: () => void;
}
export const FormFeedbackToast: FC<Props> = ({ variant, show, heading, body, onClose }) => {
  return (
    <ToastContainer position="middle-center" className="p-3">
      <Toast className={`toast-notif ${variant}`} onClose={onClose} show={show} delay={3000}>
        <Toast.Header>
          <strong className="me-auto text-white">{heading}</strong>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
