import React from 'react';
import { AboutIntroDetails } from './AboutIntroDetails';

const aboutMe = [
  {
    title: 'Birthday',
    description: '21 September 2021',
  },
  {
    title: 'Website',
    description: 'jayworks.xyz',
  },
  {
    title: 'Phone',
    description: '09165057086',
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
    description: '25',
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
      <div className="col-4">test</div>
      <div className="col-8">
        <h3 className="text-primary">UI/UX & Graphic Designer</h3>
        <p>
          <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet voluptatibus nemo dignissimos.</i>
        </p>
        <AboutIntroDetails aboutMe={aboutMe} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloremque rerum, repudiandae amet aperiam
          veritatis libero molestiae cupiditate aspernatur. Voluptate, amet blanditiis? Neque, laudantium a incidunt
          quasi enim repudiandae facilis.
        </p>
      </div>
    </div>
  );
};
