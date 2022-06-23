import React, { FC } from 'react';
import NavigationLinks from './NavigationLinks';
import { SocialLink } from './SocialLink';
import './Navigation.scss';
import { useSection } from '../context/SectionContext';
import classNames from 'classnames';

export const Navigation: FC = () => {
  const activeSection = useSection();
  const TopNavigation = activeSection?.c !== 'HOME';

  return (
    <nav className={classNames({ nav: true, top: TopNavigation })}>
      <div className="container">
        <h1>
          <a href="/" className="text-white">
            Jay Alegria
          </a>
        </h1>
        {!TopNavigation && (
          <p className="text-gray">
            I'm a front-end <span className="text-underline">Web developer</span> from Philippines
          </p>
        )}

        <NavigationLinks />
        {!TopNavigation && (
          <div className="social-links mt-3">
            <SocialLink link="https://www.fiverr.com/jaylaurence" icon="bi-fiverr custom-icon s-icon" />
            <SocialLink link="https://www.facebook.com/pogi.alegria" icon="bi-facebook" />
            <SocialLink link="https://wa.me/+639165057086" icon="bi-whatsapp" />
            <SocialLink link="https://www.linkedin.com/in/jay-laurence-alegria-1b0354196/" icon="bi-linkedin" />
          </div>
        )}
      </div>
    </nav>
  );
};
