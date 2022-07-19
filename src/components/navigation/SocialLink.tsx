import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React, { FC } from 'react';

interface Props {
  link: string;
  icon: string;
}
export const SocialLink: FC<Props> = ({ link, icon }) => {
  return (
    <OutboundLink href={link} target="blank" className="social-icon">
      <i className={`bi ${icon}`}></i>
    </OutboundLink>
  );
};
