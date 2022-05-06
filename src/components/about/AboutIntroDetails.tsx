import React, { FC } from 'react';
import { AboutDetailsItem } from './AboutDetailsItem';

interface Props {
  aboutMe: {
    title: string;
    description: string;
  }[];
}

export const AboutIntroDetails: FC<Props> = ({ aboutMe }) => {
  console.log(aboutMe);
  return (
    <div className="about__intro__details">
      <div className="row">
        <div className="col-6">
          {aboutMe.slice(0, 4).map((item) => (
            <AboutDetailsItem title={item.title} description={item.description} />
          ))}
        </div>
        <div className="col-6">
          {aboutMe.slice(5, 9).map((item) => (
            <AboutDetailsItem title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
