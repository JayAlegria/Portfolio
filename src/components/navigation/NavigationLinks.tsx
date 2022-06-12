import React from 'react';
import { NavigationLink } from './NavigationLink';
import './NavigationLinks.scss';
function NavigationCenterLinks() {
  return (
    <nav className="header-nav">
      <ul className="d-flex px-0 py-2 mb-0">
        <NavigationLink title="Home" entryAnimation={{ y: 0, opacity: 1 }} />
        <NavigationLink title="About" entryAnimation={{ y: 0, opacity: 1 }} />
        <NavigationLink title="Resume" entryAnimation={{ y: 0, opacity: 1 }} />
        <NavigationLink title="Services" entryAnimation={{ y: 0, opacity: 1 }} />
        <NavigationLink title="Portfolio" entryAnimation={{ y: 0, opacity: 1 }} />
        <NavigationLink title="Contact" entryAnimation={{ y: 0, opacity: 1 }} />
      </ul>
    </nav>
  );
}

export default NavigationCenterLinks;
