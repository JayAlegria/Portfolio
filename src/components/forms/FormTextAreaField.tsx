import React, { FC } from 'react';
import { Field } from 'formik';
import { FormErrorMessage } from './FormErrorMessage';

interface Props {
  name: string;
  label?: string;
}

export const FormTextAreaField: FC<Props> = ({ name, label, ...rest }) => {
  return (
    <>
      <Field className="form-control" as="textarea" name={name} id={name} placeholder={label} {...rest} />
      <FormErrorMessage name={name} />
    </>
  );
};
