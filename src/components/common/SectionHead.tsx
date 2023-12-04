import React, { FC } from 'react';
import './SectionHead.scss';
import { Download } from '../resume/Download';
interface Props {
  title: string;
  subtitle: string;
  isResume?: boolean;
}
export const SectionHead: FC<Props> = ({ title, subtitle, isResume }) => {
  return (
    <div className="section-title">
      <div className="left">
        <p className="vertical-line">{title}</p>
        <h3>{subtitle}</h3>
      </div>
      {isResume && <Download />}
    </div>
  );
};
