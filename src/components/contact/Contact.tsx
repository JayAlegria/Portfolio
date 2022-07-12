import React, { FC } from 'react';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import { ContactDetails } from './ContactDetails';
import { ContactForm } from './ContactForm';

interface Props {
  styles: {};
}

export const Contact: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="contact" styles={styles}>
      <SectionHead title="CONTACT" subtitle="CONTACT ME" />
      <ContactDetails />
      <ContactForm />
    </SectionWrapper>
  );
};
