import React, { FC, ReactNode } from 'react';
import { animated } from 'react-spring';
import { SectionWrapper } from '../layout/SectionWrapper';
import { NavigationCenter } from '../navigation/NavigationCenter';
import './Header.scss';

interface Props {
  styles: {};
}

export const Header: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="header" styles={styles}>
      <div className="container">
        <NavigationCenter />
      </div>
    </SectionWrapper>
  );
};
