import React, { FC, useContext, useState } from 'react';
import { useSection, useUpdateSection } from './context/SectionContext';
import { About } from './about/About';
import { Header } from './header/Header';
import { Resume } from './resume/Resume';
import { useTransition } from 'react-spring';
import { Services } from './services/Services';
import { Portfolio } from './portfolio/Portfolio';

export const SmartSectionDisplay: FC = () => {
  const activeSection = useSection();
  const transitions = useTransition(activeSection, {
    from: { opacity: 0, y: 50 },
    enter: (item) => (next) => next({ opacity: item?.entryAnimation?.opacity, y: item?.entryAnimation?.y }),
    leave: { opacity: 0, y: 50 },
  });

  return transitions((styles, item) => {
    switch (item?.c) {
      case 'HOME':
        return null;
      case 'ABOUT':
        return <About styles={styles} />;
      case 'RESUME':
        return <Resume styles={styles} />;
      case 'SERVICES':
        return <Services styles={styles} />;
      case 'PORTFOLIO':
        return <Portfolio styles={styles} />;
    }
  });
};
