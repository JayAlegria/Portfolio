import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

export const SectionContext = createContext<string | null>(null);
export const UpdateSectionContext = createContext<(sectionName: string) => void | null>(null!);
export const SectionTransitionContext = createContext(null);

export const useSection = () => {
  return useContext(SectionContext);
};

export const useUpdateSection = () => {
  return useContext(UpdateSectionContext);
};

interface Props {
  children: ReactNode;
}
export const SectionProvider: FC<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('HOME');

  const changeActiveSection = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  return (
    <SectionContext.Provider value={activeSection}>
      <UpdateSectionContext.Provider value={changeActiveSection}>{children}</UpdateSectionContext.Provider>
    </SectionContext.Provider>
  );
};
