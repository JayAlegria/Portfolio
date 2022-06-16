import React, { FC, ReactNode } from 'react';
import { animated } from 'react-spring';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Navigation } from '../navigation/Navigation';
import './Header.scss';

type Props = {
  styles?: {};
};

export const Header: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="header" styles={styles}>
      <Navigation />
    </SectionWrapper>
  );
};
