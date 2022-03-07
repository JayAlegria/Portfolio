import React from 'react';
import './HeaderNavigation.scss';
function HeaderNavigation() {
  return (
    <nav className="navbar">
      <ul className="d-flex">
        <li>
          <a className="nav-link active" href="#header">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}

export default HeaderNavigation;
