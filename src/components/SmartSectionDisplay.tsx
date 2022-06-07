import React, { FC, useContext } from 'react';
import { useSection } from './context/SectionContext';
import { About } from './about/About';
import { Header } from './header/Header';
import { Resume } from './resume/Resume';
import { useTransition } from 'react-spring';
import { Services } from './services/Services';
import { Portfolio } from './portfolio/Portfolio';

export const SmartSectionDisplay: FC = () => {
  const activeSection = useSection();
  const transitions = useTransition(activeSection, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transitions((styles, item) => {
    switch (item) {
      case 'HOME':
        return <Header styles={styles} />;
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
