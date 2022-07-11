import React, { FC, ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  details: ReactNode;
}
export const ContactDetailsItem: FC<Props> = ({ icon, title, details }) => {
  return (
    <div className="bg-semi-transparent d-flex align-items-center p-3 mt-3 contact-details">
      <i className={`bi text-green ${icon} contact-icons`}></i>
      <div className="ms-2">
        <p className="mb-0">
          <strong>{title}</strong>
        </p>
        <div>{details}</div>
      </div>
    </div>
  );
};
