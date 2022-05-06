import React, { Children, FC, ReactNode } from 'react';
import { animated } from 'react-spring';
import './SectionWrapper.scss';

interface Props {
  styles: {};
  name: string;
  children: ReactNode;
}

export const SectionWrapper: FC<Props> = ({ styles, name, children }) => {
  return (
    <animated.section style={styles} className={name}>
      <div className="container section-wrapper p-4">{children}</div>
    </animated.section>
  );
};
