import React from 'react';
import './AboutSkills.scss';

const skills = [
  {
    name: 'React Js',
    icon: 'bi-filetype-jsx',
    iconColor: 'text-teal',
  },
  {
    name: 'Typescript',
    icon: 'bi-filetype-tsx',
    iconColor: 'text-green',
  },
  {
    name: 'javascript',
    icon: 'bi-filetype-js',
    iconColor: 'text-coral',
  },
  {
    name: 'php',
    icon: 'bi-filetype-php',
    iconColor: 'text-teal',
  },
  {
    name: 'Shopify Liquid',
    icon: 'bi-droplet',
    iconColor: 'text-blue',
  },
  {
    name: 'scss',
    icon: 'bi-filetype-css',
    iconColor: 'text-light-orange',
  },
  {
    name: 'html',
    icon: 'bi-filetype-html',
    iconColor: 'text-primary',
  },
  {
    name: 'css',
    icon: 'bi-filetype-scss',
    iconColor: 'text-green',
  },
];

export const AboutSkills = () => {
  return (
    <div className="about__skills pt-5">
      <p className="vertical-line">Skills</p>
      <div className="row mt-3">
        {skills.map((skill) => (
          <div key={skill.name} className="col-3 mb-5">
            <div className="p-3 bg-semi-transparent skill-card">
              <i className={`bi mb-0 ${skill.icon} ${skill.iconColor}`}></i>
              <p className="text-muted">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
