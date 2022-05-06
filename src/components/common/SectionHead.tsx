import React, { FC } from 'react';
import './SectionHead.scss';
interface Props {
  title: string;
  subtitle: string;
}
export const SectionHead: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <p className="vertical-line">{title}</p>
      <h3>{subtitle}</h3>
    </div>
  );
};
