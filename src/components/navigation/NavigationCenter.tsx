import React from 'react';
import NavigationLinks from './NavigationLinks';
import './NavigationCenter.scss';
import { SocialLink } from './SocialLink';

export const NavigationCenter = () => {
  return (
    <nav className="nav center">
      <div>
        <h1>
          <a href="#">Jay Alegria</a>
        </h1>
        <p>
          I'm a front-end <span className="text-underline">Web developer</span> from Philippines
        </p>
        <NavigationLinks />
        <div className="social-links">
          <SocialLink link="#" icon="bi-twitter" />
          <SocialLink link="#" icon="bi-facebook" />
          <SocialLink link="#" icon="bi-instagram" />
          <SocialLink link="#" icon="bi-linkedin" />
        </div>
      </div>
    </nav>
  );
};
