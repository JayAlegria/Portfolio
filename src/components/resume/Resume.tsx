import React, { FC } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHead } from '../common/SectionHead';
import './Resume.scss';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Experience } from './experience/Experience';

interface Props {
  styles: {};
}
export const Resume: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="resume" styles={styles}>
      <SectionHead title="RESUME" subtitle="DOWNLOAD MY RESUME" isResume />
      <div className="mt-5 row resume__row">
        <div className="col-lg-5 resume__column">
          <p className="h3">Professional Experience</p>
          <Experience details={{ position: "Senior Web Developer | Independent Contractor", company: "Feiwin", year: "OCT 2025 - MAY 2026" }}>
            <p>● Built and maintained an internal domain management platform using React.js, Next.js, TypeScript,
              Redux Toolkit, and Tailwind CSS, enabling efficient bulk domain creation, updates, and deletion
              through a centralized interface.</p>
            <p>● Integrated Cloudflare APIs to automate DNS record configuration, cache purging, and domain
              provisioning workflows, reducing manual administrative tasks and improving operational efficiency
              across multiple projects.</p>
            <p>Collaborate with cross-functional teams including mobile developers, designers, and product managers to understand existing iOS and Android app functionalities and features</p>
            <ul>
              <li>React | Next Js | Typescript</li>
              <li>Redux | Redux Toolkit</li>
              <li>Tailwind | SCSS</li>
              <li>Git | Gitlab</li>
              <li>Aws | Azure | Tencent Cloud</li>
            </ul>
            <OutboundLink target="_blank" href="https://feiwin.net/">feiwin.net</OutboundLink>
          </Experience>

          <Experience details={{ position: "Senior Web Developer", company: "Wbridges Manpower Corp", year: "Jan 2024 - Oct 2024" }}>
            <p>● Develop responsive web applications using React.js, Next.js, Typescript, Redux Toolkit, and Tailwind.</p>
            <p>● Collaborated with backend, iOS, and Android developers to integrate REST APIs, ensuring seamless data
              synchronization and consistent user experiences across web and mobile applications.</p>
            <p>● Maintained and enhanced existing web applications by implementing new features, resolving bugs, and
              optimizing application performance based on business and user requirements.</p>
            <ul>
              <li>React | Next Js | Typescript</li>
              <li>Redux | Redux Toolkit</li>
              <li>Tailwind | SCSS</li>
              <li>Git | Gitlab</li>
            </ul>
          </Experience>

          <Experience details={{ position: "Software Engineer", company: "Vesta", year: "Oct 2022 - Jan 2024" }}>
            <p>- Vesta is a global transaction guarantee company for online purchases, delivering unparalleled approval rates and a frictionless customer experience while eliminating chargebacks and other forms of digital fraud.</p>
            <p>● Developed and maintained internal dashboards and customer-facing web applications.</p>
            <p>● Maintain and add features requested by the Product Owner (PO), Product Manager (PM), and senior
              stakeholders.</p>
            <p>● Work closely with backend developers and product managers to gather requirements and handle bug
              fixing.</p>
            <ul>
              <li>React Js</li>
              <li>Next Js</li>
              <li>Typescript</li>
              <li>Git</li>
              <li>Azure</li>
              <li>Jira</li>
            </ul>
            <OutboundLink target="_blank" href="https://www.vesta.io/about-vesta">vesta.io</OutboundLink>
          </Experience>
          <Experience details={{ position: "Consultant Web Developer", year: "Oct 2022 - Jan 2024", company: "Dot Digital Philippines" }}>
            <p>● Provided web development consulting and technical oversight for the company</p>
            <p>● Evaluated and mentored newly hired developers to ensure code quality and project alignment</p>
            <OutboundLink target="_blank" href="https://www.dotdigitalph.com/">dotdigitalph.com</OutboundLink>
          </Experience>
          <Experience details={{ position: "Web Developer", year: "2019-2022", company: "Dot Digital Philippines" }} >
            <p className="mt-4">● Developed and maintained 10+ WordPress and Shopify websites for clients across multiple industries.</p>
            <p>● Implemented robust security measures and conducted regular updates to protect websites from
              vulnerabilities.</p>
            <p>● Utilized technologies such as HTML, SCSS, Liquid, PHP, Bootstrap, Tailwind CSS, React.js, and Gatsby.js
              to build responsive and dynamic websites.</p>
            <ul>
              <li>Wordpress | Shopify Development</li>
              <li>Bootstrap | Tailwind</li>
              <li>PHP | Liquid</li>
              <li>SCSS | CSS</li>
              <li>Git | Github</li>
            </ul>
            <OutboundLink target="_blank" href="https://www.dotdigitalph.com/"> dotdigitalph.com</OutboundLink>
          </Experience>
          <Experience details={{ position: "Freelance Web Developer", year: "2020-2022", company: "Fiverr" }}>
            <p className="mt-4">● Maintain and extend functionality of client's website</p>
            <small>-I only accepts job related to wordpress in my Fiverr freelancing experience</small>
            <ul>
              <li>
                <OutboundLink target="_blank" href="https://www.fiverr.com/jaylaurence">
                  Fiverr
                </OutboundLink>
              </li>
            </ul>
          </Experience>
        </div>
        <div className="col-lg-6 resume__column offset-lg-1">
          <div className="resume__group mb-5">
            <p className="h3">Education</p>
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">BS COMPUTER ENGINEERING</p>
              <span className="year">2014-2019</span>
              <ul className="mt-4">
                <li>Colegio De Montalban</li>
                <li>Rodriguez. Rizal, Philippines</li>
              </ul>
            </div>
          </div>
          <div className="resume__group mb-5">
            <div className="resume__content ps-5">
              <p className="title mb-2 h3">WEB DEVELOPMENT</p>
              <span className="year">MAY 2019</span>
              <ul className="mt-4">
                <li>TESDA Training for work scholarship program</li>
                <li>88 North East Venture Corporation</li>
              </ul>
              <p className="title mb-2 h3">WEB DESIGN</p>
              <span className="year">JUNE 2019</span>
              <ul className="mt-4">
                <li>TESDA Training for work scholarship program</li>
                <li>88 North East Venture Corporation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
