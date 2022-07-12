import React, { FC } from 'react';
import { Field } from 'formik';
import { FormErrorMessage } from './FormErrorMessage';

interface Props {
  name: string;
  label?: string;
}

export const FormTextField: FC<Props> = ({ name, label, ...rest }) => {
  return (
    <>
      <Field className="form-control" name={name} id={name} placeholder={label} {...rest} />
      <FormErrorMessage name={name} />
    </>
  );
};
