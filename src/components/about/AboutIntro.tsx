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
        <p>
          I am a <b className='text-primary'>Frontend Software Engineer and Automation Specialist</b> with 7 years of experience building responsive web applications, e-commerce websites, and customer-facing platforms using React.js, Next.js, JavaScript, TypeScript, Shopify, and WordPress. Experienced in developing scalable frontend solutions, integrating REST APIs, optimizing website performance, and collaborating with cross-functional teams in Agile environments. Currently expanding expertise in <b className='text-primary'>AI automation</b> and workflow orchestration using n8n and Zapier.
        </p>
        <p>As a professional Software Engineer, I offer the technical expertise you are seeking for your business need.</p>
        <AboutIntroDetails />
      </div>
    </div>
  );
};
