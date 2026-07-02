import React, { FC } from 'react';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import './Services.scss';

interface Props {
  styles: {};
}

const ServicesItem = [
  {
    name: 'Workflow Automations',
    subtext: "n8n | Zapier | Make",
    icon: 'bi-robot',
  },
  {
    name: 'Web Application Development',
    subtext: "ReactJS | NextJS",
    icon: 'bi-filetype-jsx',
  },
  {
    name: 'Shopify Theme Development',
    icon: 'bi-shop',
  },
  {
    name: 'Wordpress Theme Development',
    icon: 'bi-wordpress',
  },
  {
    name: 'Extend Website Functionality',
    icon: 'bi-wordpress',
  },
  {
    name: 'PSD to Wordpress',
    icon: 'bi-wordpress',
  },
  {
    name: 'On Page SEO',
    icon: 'bi-wordpress',
  },
  {
    name: 'Newsletter Template',
    icon: 'bi-table',
  },
  {
    name: 'Website Maintenance',
    icon: 'bi-wordpress',
  },
];
export const Services: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="services" styles={styles}>
      <SectionHead title="Services" subtitle="My Services" />
      <div className="services__row row mt-5">
        {ServicesItem.map((serviceItem) => (
          <div key={serviceItem.name} className="col-lg-4 mb-4">
            <div className="p-5 services__item d-flex align-items-center justify-center flex-column text-center">
              <span className={`bi ${serviceItem.icon}`}></span><br />
              <strong className="h5 my-3">{serviceItem.name}</strong>
              {serviceItem.subtext ? <small>{serviceItem.subtext}</small> : <p>&nbsp;</p>}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
