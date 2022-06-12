import React from 'react';
import NavigationLinks from './NavigationLinks';
import { SocialLink } from './SocialLink';

export const Navigation = () => {
  return (
    <nav className="nav top py-3">
      <div className="container">
        <h1 className="mb-0">
          <a href="/">Jay Alegria</a>
        </h1>
        <NavigationLinks />
      </div>
    </nav>
  );
};
