import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

export const SectionContext = createContext<{ c: string; entryAnimation: { y: number; opacity: number } } | null>(null);
export const UpdateSectionContext = createContext<
  (sectionName: string, entryAnimation: { y: number; opacity: number }) => void | null
>(null!);

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
  const [activeSection, setActiveSection] = useState<{ c: string; entryAnimation: { y: number; opacity: number } }>({
    c: 'HOME',
    entryAnimation: { y: 0, opacity: 1 },
  });

  const changeActiveSection = (sectionName: string, entryAnimation: { y: number; opacity: number }) => {
    setActiveSection({ c: sectionName, entryAnimation: entryAnimation });
  };

  return (
    <SectionContext.Provider value={activeSection}>
      <UpdateSectionContext.Provider value={changeActiveSection}>{children}</UpdateSectionContext.Provider>
    </SectionContext.Provider>
  );
};
