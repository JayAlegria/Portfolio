import React, { FC } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHead } from '../common/SectionHead';
import './Resume.scss';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Experience } from './experience/Experience';

interface Props {
  styles: {};
}
export const Resume: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="resume" styles={styles}>
      <SectionHead title="RESUME" subtitle="CHECK MY RESUME" isResume />
      <div className="mt-5 row resume__row">
        <div className="col-lg-5 resume__column">
          <p className="h3">Professional Experience</p>
          <Experience details={{ position: "Senior Web Developer", company: "Feiwin", year: "2024-present" }}>
            <p>Feiwin is a visionary mobile game development company that makes next-generation online game solutions using best-in-class technologies</p>
            <p>Work closely with backend developers to integrate web APIs and services for seamless data exchange between the web application and existing backend systems</p>
            <p>Collaborate with cross-functional teams including mobile developers, designers, and product managers to understand existing iOS and Android app functionalities and features</p>
            <p>Develop responsive web applications using modern web technologies such as HTML5, CSS3, JavaScript, and frameworks React.js</p>
            <ul>
              <li>React Js</li>
              <li>Next Js</li>
              <li>Redux / Redux Toolkit</li>
              <li>Tailwind</li>
              <li>Gitlab</li>
            </ul>
            <OutboundLink target="_blank" href="https://feiwin.net/">feiwin.net/</OutboundLink>
          </Experience>
          <Experience details={{ position: "Software Engineer", company: "Vesta", year: "2022-2024" }}>
            <p>Vesta is a global transaction guarantee company for online purchases, delivering unparalleled approval rates and a frictionless customer experience while eliminating chargebacks and other forms of digital fraud.</p>
            <p>Works in a team to maintain and add features to the Internal and Customer Dashboards</p>
            <ul>
              <li>React Js</li>
              <li>Next Js</li>
              <li>Git/Azure/Jira</li>
            </ul>
            <OutboundLink target="_blank" href="https://www.vesta.io/about-vesta">vesta.io</OutboundLink>
          </Experience>
          <Experience details={{ position: "Freelance Web Developer", year: "2022-2024", company: "Dot Digital Philippines" }}>
            <p>
              Handle all stuff regarding to website development <br /> (
              <i> except web design and content writing </i>)
            </p>
            <ul>
              <li>Wordpress/Shopify Development</li>
              <li>Bootstrap/Tailwind</li>
              <li>PHP</li>
              <li>SCSS</li>
              <li>Git/Github</li>
            </ul>
            <p>One Global Place 5th Avenue & 25 Street Fort Bonifacio, Taguig City</p>
            <OutboundLink target="_blank" href="https://www.dotdigitalph.com/">dotdigitalph.com</OutboundLink>
          </Experience>
          <Experience details={{ position: "Web Developer", year: "2019-2022", company: "Dot Digital Philippines" }} >
            <p className="mt-4">
              Help our company developed a software that will let the client and employee interact directly. In this
              project I developed the landing page and help with the front-end in the dashboard using ReactJS and
              React Typescript.
              <br /> Website:<OutboundLink href="https://brandcaptain.io/"> Brandcaptain.io</OutboundLink>
            </p>
            <p>Develop, Maintain or extend functionality of our client's website</p>
            <p>Maintain and extend functionality of our company website</p>
            <p>
              Handle all stuff regarding to website development <br /> (
              <i> except web design and content writing </i>)
            </p>
            <p>
              Handle all stuff regarding to website development <br /> (
              <i> except web design and content writing </i>)
            </p>
            <ul>
              <li>Wordpress/Shopify Development</li>
              <li>Bootstrap/Tailwind</li>
              <li>PHP</li>
              <li>SCSS</li>
              <li>Git/Github</li>
            </ul>
            <p>One Global Place 5th Avenue & 25 Street Fort Bonifacio, Taguig City</p>
            <OutboundLink target="_blank" href="https://www.dotdigitalph.com/"> dotdigitalph.com</OutboundLink>
          </Experience>
          <Experience details={{ position: "Freelance Web Developer", year: "2020-2022", company: "Fiverr" }}>
            <p className="mt-4">Maintain and extend functionality of client's website</p>
            <small>-I only accepts job related to wordpress in my Fiverr freelancing journey</small>
            <ul>
              <li>
                <OutboundLink target="_blank" href="https://www.fiverr.com/jaylaurence">
                  Fiverr
                </OutboundLink>
              </li>
            </ul>
          </Experience>
        </div>
        <div className="col-lg-6 resume__column offset-lg-1">
          <div className="resume__group mb-5">
            <p className="h3">Education</p>
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">BS COMPUTER ENGINEERING</p>
              <span className="year">2014-2019</span>
              <ul className="mt-4">
                <li>Colegio De Montalban</li>
                <li>Rodriguez. Rizal, Philippines</li>
              </ul>
            </div>
          </div>
          <div className="resume__group mb-5">
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">WEB DEVELOPMENT</p>
              <span className="year">MAY 2019</span>
              <ul className="mt-4">
                <li>TESDA Training for work scholarship program</li>
                <li>88 North East Venture Corporation</li>
              </ul>
              <p className="title mb-2 h3">WEB DESIGN</p>
              <span className="year">JUNE 2019</span>
              <ul className="mt-4">
                <li>TESDA Training for work scholarship program</li>
                <li>88 North East Venture Corporation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
