import React from 'react';

import './Header.scss';
import HeaderNavigation from './HeaderNavigation';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <a href="index.html">Jay Alegria</a>
        </h1>
        <p>
          I'm a front-end <span className="text-underline">Web developer</span> from Philippines
        </p>
        <HeaderNavigation />
        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
