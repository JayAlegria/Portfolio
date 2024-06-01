import React from 'react';
import { AboutIntroDetails } from './AboutIntroDetails';
import './AboutIntro.scss';
import me from '../../images/me.jpg';

export const AboutIntro = () => {
  return (
    <div className="row mt-5 about__intro">
      <div className="col-lg-4">
        <img src={me} alt="Jay laurence Alegria" />
      </div>
      <div className="col-lg-8">
        <h3 className="text-primary">WEB DEVELOPER</h3>
        <p>Hello!</p>
        <p>
          I am Jay, a <b>Rockstar Web Developer</b> with a strong focus on front-end development. My expertise spans
          across various platforms, including React.js, Shopify, and WordPress.
        </p>
        <p>
          In Wordpress and Shopify development, I am more proficient in building pages using custom template or by
          creating its own theme. I can also build website using page builder or premium themes depends on client desire
          and timeline.
        </p>
        <p>As a professional web developer, I offer the technical expertise you are seeking for your business need.</p>
        <AboutIntroDetails />
      </div>
    </div>
  );
};
