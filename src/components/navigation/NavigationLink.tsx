import React, { FC, useContext } from 'react';
import { SectionContext, useSection, useUpdateSection } from '../context/SectionContext';
import classNames from 'classnames';

interface Props {
  title: string;
  entryAnimation: {
    y: number;
    opacity: number;
  };
  handleClick?: () => void;
}
export const NavigationLink: FC<Props> = ({ title, entryAnimation, handleClick }) => {
  const updateSectionDisplay = useUpdateSection();
  const activeSection = useSection();
  return (
    <li className={classNames({ 'px-2': true, active: activeSection?.c === title.toUpperCase() })}>
      <a
        className="nav-link pb-2 px-0 py-0"
        onClick={() => {
          handleClick ? handleClick() : null;
          updateSectionDisplay(title.toUpperCase(), entryAnimation);
        }}
      >
        {title}
      </a>
    </li>
  );
};
