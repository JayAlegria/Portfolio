import React, { FC, ReactNode } from 'react';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import { AboutInterests } from './AboutInterests';
import { AboutIntro } from './AboutIntro';
import { AboutApps } from './AboutApps';
import { AboutSkills } from './AboutSkills';
import { AboutTestimonials } from './AboutTestimonials';

interface Props {
  styles: {};
}

export const About: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="about" styles={styles}>
      <SectionHead title="ABOUT" subtitle="KNOW MORE ABOUT ME" />
      <AboutIntro />
      <AboutSkills />
      <AboutApps />
      <AboutInterests />
      <AboutTestimonials />
    </SectionWrapper>
  );
};
