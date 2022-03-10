import React, { FC, useContext } from 'react';
import About from './about/About';
import { SectionContext, useSection } from './context/SectionContext';
import { Header } from './header/Header';

export const SmartSectionDisplay: FC = () => {
  const activeSection = useSection();
  if (activeSection === 'HOME') {
    return <Header />;
  }
  if (activeSection === 'ABOUT') {
    return <About />;
  }
  return <Header />;
};
