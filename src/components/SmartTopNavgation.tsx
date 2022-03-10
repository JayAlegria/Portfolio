import React, { useContext } from 'react';
import { SectionContext, useSection } from './context/SectionContext';
import { NavigationTop } from './navigation/NavigationTop';

export const SmartTopNavgation = () => {
  const activeSection = useSection();
  console.log(activeSection);
  if (activeSection !== 'HOME') {
    return <NavigationTop />;
  }
  return null;
};
