import React, { FC } from 'react';
interface Props {
  title: string;
  description: string;
}
export const AboutDetailsItem: FC<Props> = ({ title, description }) => {
  return (
    <p>
      <i className="bi bi-chevron-right text-primary me-2" />
      <b>{title}: </b> {description}
    </p>
  );
};
