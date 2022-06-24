import React, { FC } from 'react';
import { AboutDetailsItem } from './AboutDetailsItem';
import { AboutMe } from './AboutConfig';

export const AboutIntroDetails: FC = () => {
  return (
    <div className="about__intro__details">
      <div className="row">
        <div className="col-6">
          {AboutMe.slice(0, 4).map((item) => (
            <AboutDetailsItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="col-6">
          {AboutMe.slice(5, 9).map((item) => (
            <AboutDetailsItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
