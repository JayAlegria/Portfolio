import React, { FC } from 'react';
import { ErrorMessage } from 'formik';

interface Props {
  name: string;
}
export const FormErrorMessage: FC<Props> = ({ name }) => {
  return <ErrorMessage name={name}>{(error) => <small className="text-primary">{error}</small>}</ErrorMessage>;
};
