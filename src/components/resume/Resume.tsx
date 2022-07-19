import React, { FC } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHead } from '../common/SectionHead';
import './Resume.scss';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

interface Props {
  styles: {};
}
export const Resume: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="resume" styles={styles}>
      <SectionHead title="RESUME" subtitle="CHECK MY RESUME" />
      <div className="mt-5 row resume__row">
        <div className="col-lg-6 resume__column">
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
        <div className="col-lg-5 offset-lg-1 resume__column">
          <div className="resume__group mb-5">
            <p className="h3">Professional Experience</p>
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">WEB DEVELOPER</p>
              <span className="year">2019-present</span>
              <p className="mt-4">
                - Help our company developed a software that will let the client and employee interact directly. In this
                project I developed the landing page and help with the front-end in the dashboard using ReactJS and
                React Typescript.
                <br /> Website:<OutboundLink href="https://brandcaptain.io/"> Brandcaptain.io</OutboundLink>
              </p>
              <p>- Develop, Maintain or extend functionality of our client's website</p>
              <p>- Maintain and extend functionality of our company website</p>
              <p>
                - Handle all stuff regarding to website development <br /> (
                <i> except web design and content writing </i>)
              </p>
              <ul>
                <li>One Global Place 5th Avenue & 25 Street Fort Bonifacio, Taguig City</li>
                <li>Dot digital Philippines</li>
                <li>
                  <OutboundLink target="_blank" href="https://www.dotdigitalph.com/">
                    dotdigitalph.com
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume__group mb-5">
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">FREELANCE WEB DEVELOPER</p>
              <span className="year">2020-present</span>
              <p className="mt-4">- Maintain and extend functionality of client's website</p>
              <p>-- I only accepts job related to wordpress in my freelancing journey</p>
              <ul>
                <li>
                  <OutboundLink target="_blank" href="https://www.fiverr.com/jaylaurence">
                    Fiverr
                  </OutboundLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
