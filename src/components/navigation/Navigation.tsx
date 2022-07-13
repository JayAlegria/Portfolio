import React, { FC, useEffect, useState } from 'react';
import NavigationLinks from './NavigationLinks';
import { SocialLink } from './SocialLink';
import './Navigation.scss';
import { useSection } from '../context/SectionContext';
import classNames from 'classnames';
import { animated, useTransition } from 'react-spring';

export const Navigation: FC = () => {
  const activeSection = useSection();
  const TopNavigation = activeSection?.c !== 'HOME';
  const [showMobileNav, setShowMobileNav] = useState(false);

  const hasWindow = typeof window !== 'undefined';

  const getWindowWidth = () => {
    return hasWindow ? window.innerWidth : 0;
  };
  const [isDesktop, setDesktop] = useState(getWindowWidth() > 768);

  const updateMedia = () => {
    setDesktop(getWindowWidth() > 768);
  };

  useEffect(() => {
    if (!hasWindow) {
      return;
    }
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  const handleClick = () => {
    setShowMobileNav((prev) => !prev);
  };

  const transitions = useTransition(showMobileNav, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav className={classNames({ nav: true, top: TopNavigation })}>
      <div className="container text-md-start text-center">
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
        {!TopNavigation && <NavigationLinks />}
        {TopNavigation && isDesktop && <NavigationLinks />}
        {!TopNavigation && (
          <div className="social-links mt-3">
            <SocialLink link="https://www.fiverr.com/jaylaurence" icon="bi-fiverr custom-icon s-icon" />
            <SocialLink link="https://www.facebook.com/pogi.alegria" icon="bi-facebook" />
            <SocialLink link="https://wa.me/+639165057086" icon="bi-whatsapp" />
            <SocialLink link="https://www.linkedin.com/in/jay-laurence-alegria-1b0354196/" icon="bi-linkedin" />
          </div>
        )}
        {TopNavigation && !isDesktop && (
          <div
            className="mobileNav-toggle"
            onClick={() => {
              handleClick();
            }}
          >
            {showMobileNav && <i className="bi bi-x-square"></i>}
            {!showMobileNav && <i className="bi  bi-menu-button-wide"></i>}
          </div>
        )}
      </div>
      {showMobileNav &&
        transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles} className="mobile-nav">
                <NavigationLinks handleClick={handleClick} />
              </animated.div>
            ),
        )}
    </nav>
  );
};
