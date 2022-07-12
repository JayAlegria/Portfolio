import React from 'react';
import { ContactDetailsItem } from './ContactDetailsItem';
import './ContactDetails.scss';
import { SocialLink } from '../navigation/SocialLink';

const Social = () => {
  return (
    <div className="contact-socials">
      <SocialLink link="https://www.fiverr.com/jaylaurence" icon="bi-fiverr custom-icon s-icon" />
      <SocialLink link="https://www.facebook.com/pogi.alegria" icon="bi-facebook" />
      <SocialLink link="https://wa.me/+639165057086" icon="bi-whatsapp" />
      <SocialLink link="https://www.linkedin.com/in/jay-laurence-alegria-1b0354196/" icon="bi-linkedin" />
    </div>
  );
};

export const ContactDetails = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <ContactDetailsItem icon="bi-pin-map" title="My Address" details="Batangas, Philippines" />
        <ContactDetailsItem icon="bi-envelope" title="My Email" details="alegriajaylaurence@gmail.com" />
      </div>
      <div className="col-lg-6">
        <ContactDetailsItem icon="bi-people" title="Social Profiles" details={<Social />} />
        <ContactDetailsItem icon="bi-telephone" title="My Contact" details="+639165057086" />
      </div>
    </div>
  );
};
