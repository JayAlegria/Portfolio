import React from 'react';
import { animated, useTransition } from 'react-spring';
import { useSection } from '../context/SectionContext';
import NavigationLinks from './NavigationLinks';
import './NavigationTop.scss';

export const NavigationTop = () => {
  return (
    <nav className="nav top py-3">
      <div className="container">
        <h1 className="mb-0">
          <a href="index.html">Jay Alegria</a>
        </h1>
        <NavigationLinks />
      </div>
    </nav>
  );
};
