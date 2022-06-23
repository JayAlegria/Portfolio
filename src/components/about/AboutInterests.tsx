import React from 'react';

const interests = [
  {
    name: 'Python',
    icon: 'bi-code',
    iconColor: 'text-teal',
  },
  {
    name: 'Data Science',
    icon: 'bi-bar-chart-line',
    iconColor: 'text-primary',
  },
  {
    name: 'AWS',
    icon: 'bi-bookmark',
    iconColor: 'text-yellow',
  },
  {
    name: 'Automation',
    icon: 'bi-cpu',
    iconColor: 'text-blue',
  },
  {
    name: 'Robotics',
    icon: 'bi-robot',
    iconColor: 'text-green',
  },
  {
    name: 'Cyber Security',
    icon: 'bi-shield',
    iconColor: 'text-teal',
  },
  {
    name: 'Mern Stack',
    icon: 'bi-code',
    iconColor: 'text-light-orange',
  },
  {
    name: 'Blockchain',
    icon: 'bi-currency-bitcoin',
    iconColor: 'text-coral',
  },
  {
    name: 'Virtual Assistant',
    icon: 'bi-robot',
    iconColor: 'text-primary',
  },
  {
    name: 'Dropshipping',
    icon: 'bi-shop',
    iconColor: 'text-light-orange',
  },
  {
    name: 'Vlogging',
    icon: 'bi-camera-reels',
    iconColor: 'text-green',
  },
  {
    name: 'Biking',
    icon: 'bi-bicycle',
    iconColor: 'text-teal',
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
