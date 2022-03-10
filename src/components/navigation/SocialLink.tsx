import React, { FC } from 'react';

interface Props {
  link: string;
  icon: string;
}
export const SocialLink: FC<Props> = ({ link, icon }) => {
  return (
    <a href={link} className="twitter">
      <i className={`bi ${icon}`}></i>
    </a>
  );
};
