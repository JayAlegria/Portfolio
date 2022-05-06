import React, { FC, ReactNode } from 'react';
import { animated } from 'react-spring';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import { AboutIntro } from './AboutIntro';
import { AboutSkills } from './AboutSkills';

interface Props {
  styles: {};
}

export const About: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="about" styles={styles}>
      <SectionHead title="ABOUT" subtitle="LEARN MORE ABOUT ME" />
      <AboutIntro />
      <AboutSkills />
    </SectionWrapper>
  );
};
