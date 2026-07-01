import React, { Children, FC, ReactNode } from 'react';
import { animated } from 'react-spring';
import './SectionWrapper.scss';

interface Props {
  styles?: {};
  name: string;
  children: ReactNode;
  id?: string
}

export const SectionWrapper: FC<Props> = ({ styles, name, children, id }) => {
  return (
    <animated.section style={styles} className={name} id={id}>
      <div className="container section-wrapper p-4">{children}</div>
    </animated.section>
  );
};
