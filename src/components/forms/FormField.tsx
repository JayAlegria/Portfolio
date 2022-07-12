import { Field, ErrorMessage } from 'formik';
import React, { FC } from 'react';
import { FormErrorMessage } from './FormErrorMessage';

interface Props {
  name: string;
  placeHolder?: string;
}

export const FormField: FC<Props> = ({ name, placeHolder, ...rest }) => {
  return (
    <div className="form-group">
      <Field className name={name} id={name} placeHolder={placeHolder} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};
