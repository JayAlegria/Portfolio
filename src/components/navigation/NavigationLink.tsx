import React, { FC, useContext } from 'react';
import { SectionContext, useSection, useUpdateSection } from '../context/SectionContext';
import classNames from 'classnames';

interface Props {
  title: string;
}
export const NavigationLink: FC<Props> = ({ title }) => {
  const updateSectionDisplay = useUpdateSection();
  const activeSection = useSection();
  return (
    <li className={classNames({ 'p-3': true, active: activeSection === title.toUpperCase() })}>
      <a
        className="nav-link pb-2 px-0"
        onClick={() => {
          updateSectionDisplay(title.toUpperCase());
        }}
      >
        {title}
      </a>
    </li>
  );
};
