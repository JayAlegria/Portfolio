import React from 'react';
import { ExperienceApp, Plugins } from './AboutConfig';

export const AboutApps = () => {
  return (
    <div className="about__plugins py-5">
      <p className="vertical-line">Experienced In</p>
      <div className="row mt-3 justify-content-start">
        {ExperienceApp.map((item) => (
          <div key={item} className="col-lg-3 mt-3 text-center text-lg-start">
            <div className=" item-card px-3 py-3 bg-semi-transparent">
              <p className="mb-0 text-gray">{item}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="vertical-line mt-5">Wordpress Plugins</p>
      <div className="row mt-3 justify-content-start">
        {Plugins.map((plugin) => (
          <div key={plugin} className="col-lg-3 mt-3 text-center text-lg-start">
            <div className=" interest-card px-3 py-3 bg-semi-transparent">
              <p className="mb-0 text-gray">{plugin}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
