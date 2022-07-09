import React, { FC } from 'react';
import { NavigationLink } from './NavigationLink';
import './NavigationLinks.scss';
const links = [
  {
    title: 'Home',
    entryAnimation: { y: 30, opacity: 1 },
  },
  {
    title: 'About',
    entryAnimation: { y: 0, opacity: 1 },
  },
  {
    title: 'Resume',
    entryAnimation: { y: 0, opacity: 1 },
  },
  {
    title: 'Services',
    entryAnimation: { y: 0, opacity: 1 },
  },
  {
    title: 'Portfolio',
    entryAnimation: { y: 0, opacity: 1 },
  },
  {
    title: 'Contact',
    entryAnimation: { y: 0, opacity: 1 },
  },
];
interface Props {
  handleClick?: () => void;
}
const NavigationCenterLinks: FC<Props> = ({ handleClick }) => {
  return (
    <nav className="header-nav">
      <ul className="d-flex px-0 py-2 mb-0">
        {links.map((link) => (
          <NavigationLink
            key={link.title}
            title={link.title}
            entryAnimation={link.entryAnimation}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationCenterLinks;
