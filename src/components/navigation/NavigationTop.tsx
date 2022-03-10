import React from 'react';
import NavigationLinks from './NavigationLinks';
import './NavigationTop.scss';

export const NavigationTop = () => {
  return (
    <nav className="nav top py-3">
      <div className="container">
        <h1>
          <a href="index.html">Jay Alegria</a>
        </h1>
        <NavigationLinks />
      </div>
    </nav>
  );
};
