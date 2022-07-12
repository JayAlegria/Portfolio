import React from 'react';
import { Interest } from './AboutConfig';
export const AboutInterests = () => {
  return (
    <div className="about__interests py-5">
      <p className="vertical-line">Interests</p>
      <div className="row mt-3 justify-content-between">
        {Interest.map((interest) => (
          <div key={interest.name} className="col-lg-3 mt-3">
            <div className=" interest-card px-3 py-3 bg-semi-transparent">
              <p className={`mb-0  ${interest.iconColor}`}>
                <span className={`${interest.icon} bi me-3`}></span> {interest.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
