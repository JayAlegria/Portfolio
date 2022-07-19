import React from 'react';
import { ExperienceApp, Plugins } from './AboutConfig';

export const AboutApps = () => {
  return (
    <div className="about__plugins py-5">
      <p className="vertical-line">Experienced In</p>
      <div className="row mt-3 justify-content-start">
        {ExperienceApp.map((item) => (
          <div key={item.title} className="col-lg-3 mt-3 text-center text-lg-start">
            <div className=" item-card px-3 py-3 bg-semi-transparent">
              <p className="mb-0 text-gray">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="vertical-line mt-5">Wordpress Plugins</p>
      <div className="row mt-3 justify-content-start">
        {Plugins.map((plugin) => (
          <div key={plugin.title} className="col-lg-3 mt-3 text-center text-lg-start">
            <div className=" interest-card px-3 py-3 bg-semi-transparent">
              <p className="mb-0 text-gray">{plugin.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
