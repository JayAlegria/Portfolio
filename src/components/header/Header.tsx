import React from 'react';
import { NavigationCenter } from '../navigation/NavigationCenter';
import './Header.scss';

export const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <NavigationCenter />
      </div>
    </section>
  );
};
