import React from 'react';
import { NavigationLink } from './NavigationLink';
import './NavigationLinks.scss';
function NavigationCenterLinks() {
  return (
    <nav className="header-nav">
      <ul className="d-flex px-0 py-2 mb-0">
        <NavigationLink title="Home" />
        <NavigationLink title="About" />
        <NavigationLink title="Resume" />
        <NavigationLink title="Services" />
        <NavigationLink title="Portfolio" />
        <NavigationLink title="Contact" />
      </ul>
    </nav>
  );
}

export default NavigationCenterLinks;
