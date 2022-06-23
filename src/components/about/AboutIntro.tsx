import React from 'react';
import { AboutIntroDetails } from './AboutIntroDetails';
import './AboutIntro.scss';
import me from '../../images/me.jpg';

const aboutMe = [
  {
    title: 'Birthday',
    description: '21 September 1997',
  },
  {
    title: 'Website',
    description: 'jayworks.xyz',
  },
  {
    title: 'Phone',
    description: '+639165057086',
  },
  {
    title: 'Email',
    description: 'alegriajaylaurence@gmail.com',
  },
  {
    title: 'City',
    description: 'Batangas City',
  },
  {
    title: 'Age',
    description: '24',
  },
  {
    title: 'Degree',
    description: 'Bachelor',
  },
  {
    title: 'Birthday',
    description: '21 September 2021',
  },
  {
    title: 'Years of Experience',
    description: '3 years',
  },
];
export const AboutIntro = () => {
  return (
    <div className="row mt-5 about__intro">
      <div className="col-4">
        <img src={me} alt="Jay laurence Alegria" />
      </div>
      <div className="col-8">
        <h3 className="text-primary">WEB DEVELOPER</h3>
        <p>Hello!</p>
        <p>
          I am Jay, a <b>web developer</b> who has expertise in front end development, I commonly build websites using
          Wordpress, Shopify or React js.
        </p>
        <p>
          In Wordpress and Shopify development, I am more proficient in building pages using custom template or by
          creating its own theme. I can also build website using page builder or premium themes depends on client desire
          and timeline.
        </p>
        <AboutIntroDetails aboutMe={aboutMe} />
        <p>
          As a professional web developer, I offer the technical expertise you are seeking for your business need. In my
          three years of experience I already handled different task regarding to website works.
        </p>
      </div>
    </div>
  );
};
