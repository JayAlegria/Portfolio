import React, { FC } from 'react';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import './Services.scss';

interface Props {
  styles: {};
}

const ServicesItem = [
  {
    name: 'Service One',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
  {
    name: 'Service Two',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
  {
    name: 'Service Three',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
  {
    name: 'Service Four',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
  {
    name: 'Service Five',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
  {
    name: 'Service Five',
    icon: 'bi-filetype-css',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit est autem et',
  },
];
export const Services: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="services" styles={styles}>
      <SectionHead title="Services" subtitle="My Services" />
      <div className="services__row row mt-5">
        {ServicesItem.map((serviceItem) => (
          <div className="col-lg-4 mb-4">
            <div className="p-5 services__item d-flex align-items-center justify-center flex-column text-center">
              <span className={`bi ${serviceItem.icon}`}></span>
              <p className="h4 my-3">{serviceItem.name}</p>
              <p>{serviceItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
