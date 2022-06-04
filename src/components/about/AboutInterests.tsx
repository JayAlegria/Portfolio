import React from 'react';

const interests = [
  {
    name: 'Python',
    icon: 'bi-filetype-jsx',
    iconColor: 'text-teal',
  },
  {
    name: 'Data Science',
    icon: 'bi-filetype-html',
    iconColor: 'text-primary',
  },
  {
    name: 'AWS',
    icon: 'bi-filetype-css',
    iconColor: 'text-danger',
  },
  {
    name: 'dev',
    icon: 'bi-filetype-css',
    iconColor: 'text-danger',
  },
  {
    name: 'ye',
    icon: 'bi-filetype-css',
    iconColor: 'text-danger',
  },
];
export const AboutInterests = () => {
  return (
    <div className="about__interests py-5">
      <p className="vertical-line">Interests</p>
      <div className="row mt-3 justify-content-between">
        {interests.map((interest) => (
          <div key={interest.name} className="col-3 mt-3">
            <div className=" interest-card px-3 py-3 bg-semi-transparent">
              <p className="mb-0">
                <span className={`${interest.icon} ${interest.iconColor} bi me-3`}></span> {interest.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
