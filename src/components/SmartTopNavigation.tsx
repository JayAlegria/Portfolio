import React from 'react';
import { animated, useTransition } from 'react-spring';
import { useSection } from './context/SectionContext';
import { NavigationTop } from './navigation/NavigationTop';

export const SmartTopNavigation = () => {
  const activeSection = useSection();
  const transitions = useTransition(activeSection, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions((styles, item) => {
    if (item !== 'HOME') {
      return (
        <animated.div style={{ position: 'absolute', width: '100%', ...styles }}>
          <NavigationTop />
        </animated.div>
      );
    } else {
      return null;
    }
  });
};
