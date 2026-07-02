import avano from '../../images/projects/avano.webp';
import avanoThumb from '../../images/projects/thumbnail/avano.jpg';
import brandCaptain from '../../images/projects/brandcaptain.webp';
import brandCaptainThumb from '../../images/projects/thumbnail/brandCaptain.jpg';
import magpie from '../../images/projects/magpie.webp';
import magpieThumb from '../../images/projects/thumbnail/magpie.jpg';
import raycreate from '../../images/projects/raycreate.webp';
import raycreateThumb from '../../images/projects/thumbnail/raycreate.jpg';
import blockchainspace from '../../images/projects/blockchainspace.webp';
import blockchainspaceThumb from '../../images/projects/thumbnail/blockchainspace.jpg';
import commonmode from '../../images/projects/commonmode.webp';
import commonmodeThumb from '../../images/projects/thumbnail/commonmode.jpg';
import dotdigital from '../../images/projects/dotdigital.webp';
import dotdigitalThumb from '../../images/projects/thumbnail/dotdigital.jpg';
import innomed from '../../images/projects/innomed.webp';
import innomedThumb from '../../images/projects/thumbnail/innomed.jpg';
import nextchapter from '../../images/projects/nextchapter.webp';
import nextchapterThumb from '../../images/projects/thumbnail/nextchapter.jpg';
import portfolio from '../../images/projects/portfolio.webp';
import portfolioThumb from '../../images/projects/thumbnail/portfolio.jpg';
import suki from '../../images/projects/suki.webp';
import sukiThumb from '../../images/projects/thumbnail/suki.jpg';
import thebarn from '../../images/projects/thebarn.webp';
import thebarnThumb from '../../images/projects/thumbnail/thebarn.jpg';
import washington from '../../images/projects/washington.webp';
import washingtonThumb from '../../images/projects/thumbnail/washington.jpg';
import farmfluence from "../../images/projects/farmfluence.webp";
import farmfluenceThumb from "../../images/projects/thumbnail/farmfluence.jpg";
import adgarlic from "../../images/projects/adgarlic.webp";
import adgarlicThumb from "../../images/projects/thumbnail/adgarlic.jpg";
import cargo from "../../images/projects/cargo.webp";
import cargoThumb from "../../images/projects/thumbnail/cargo.jpg";
import evoworks from "../../images/projects/evoworks.webp";
import evoworksThumb from "../../images/projects/thumbnail/evo.png"
import resourceTool from "../../images/projects/resource-tool.webp"
import resourceToolThumb from "../../images/projects/thumbnail/resource-tool.png"
import game99 from "../../images/projects/game99.webp"
import game99Thumb from "../../images/projects/thumbnail/game99.png"
import slot115 from "../../images/projects/115slot.webp"
import slot115Thumb from "../../images/projects/thumbnail/115slot.png"

export interface PortfolioItem {
  name: string;
  company?: string,
  thumbnail: string;
  fullImage: string;
  category: string[];
  url?: string;
  techStack?: string[];
  plugins?: string[];
  description: string;
}

export const PortfolioItems: PortfolioItem[] = [
  {
    name: 'Evoworks',
    company: 'Freelance',
    thumbnail: evoworksThumb,
    fullImage: evoworks,
    category: ['static'],
    url: 'https://evoworks-its.com/',
    techStack: ['HTML', 'Tailwind', 'AlpineJs', 'Javascript'],
    description:
      'Designed, developed, and successfully launched the corporate website for Evoworks by translating company information and requirements from PDF documentation into a fully functional, and responsive website.',
  },
  {
    name: 'Farmfluence',
    company: 'DotDigital PH',
    thumbnail: farmfluenceThumb,
    fullImage: farmfluence,
    category: ['shopify'],
    url: 'https://farmfluence.co/',
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS'],
    description:
      'Developed and maintained a customized Shopify e-commerce website for the agriculture industry, creating tailored theme functionalities and user experiences to meet business requirements. Implemented responsive designs, optimized website performance and SEO, integrated third-party applications and services, and ensured a secure, scalable, and seamless shopping experience across all devices.',
  },
  {
    name: 'Cargo Clothing',
     company: 'DotDigital PH',
    thumbnail: cargoThumb,
    fullImage: cargo,
    category: ['shopify'],
    url: 'https://www.cargoclothing.com/',
    techStack: ['Shopify', 'Liquid', 'Javascript', 'CSS'],
    description:
      'Developed and maintained a customized Shopify e-commerce website for the fashion and apparel industry, building tailored theme features and user experiences to support business goals and enhance customer engagement. Implemented responsive and high-performance storefronts, optimized SEO and website speed, integrated third-party applications and payment solutions, and ensured a seamless and secure shopping experience across all devices.',
  },
  {
    name: 'Adgarlic',
     company: 'DotDigital PH',
    thumbnail: adgarlicThumb,
    fullImage: adgarlic,
    category: ['wordpress'],
    url: 'https://adgarlic.com/',
    techStack: ['Wordpress', 'SCSS', 'Greensocks Animation', 'Javascript', 'CSS'],
    description:
      'Translated design mockups into fully functional, responsive, and SEO-optimized WordPress websites by developing custom themes and implementing interactive user experiences. Ensured cross-browser compatibility, optimized website performance, implemented security best practices, and delivered scalable solutions aligned with business and client requirements.',
  },
  {
    name: 'BrandCaptain',
     company: 'DotDigital PH',
    thumbnail: brandCaptainThumb,
    fullImage: brandCaptain,
    category: ['react'],
    techStack: ['React js', 'Gatsby Js', 'Typescript'],
    description:
      'Developed the landing page and contributed to the frontend development of the platform dashboard using React.js and TypeScript. This project marked my introduction to modern frontend development, where I gained hands-on experience with core React concepts such as components, state management, props, hooks, and reusable UI patterns. Additionally, I developed a strong foundation in version control practices using Git and GitHub, learning the importance of collaboration, code management, and maintaining scalable codebases.',
  },
  {
    name: 'Avano',
     company: 'DotDigital PH',
    thumbnail: avanoThumb,
    fullImage: avano,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript', 'Bootstrap'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    description:
      'Transformed design mockups into fully functional, responsive, and SEO-optimized WordPress websites through custom theme development and implementation. This was my first professional WordPress project, where I gained hands-on experience in frontend development, WordPress customization, and established a strong foundation in version control using Git and GitHub for source code management and collaboration.',
  },
  {
    name: 'Resource Tool',
     company: 'Feiwin',
    thumbnail: resourceToolThumb,
    fullImage: resourceTool,
    category: ['react'],
    techStack: ['NextJs', 'Redux/RTK', 'Cloudflare API', 'Typescript', 'SCSS', 'Tailwind'],
    description:
      'Designed and developed an internal domain management platform to streamline the onboarding and management of multiple domains, implementing bulk operations such as batch creation, updates, cache purging, and advanced search and filtering capabilities through a centralized interface, reducing manual effort and processing time by approximately 80%.',
  },
  {
    name: 'Game 99',
     company: 'Wbridges Manpower Corp',
    thumbnail: game99Thumb,
    fullImage: game99,
    category: ['react'],
     techStack: ['NextJs', 'Redux/RTK', 'Typescript', 'SCSS', 'Tailwind'],
    description:
      'Contributed to the development and maintenance of a high-traffic H5 gaming platform in a fast-paced environment, collaborating with frontend, backend, Android, and iOS teams to implement features, resolve bugs, optimize performance, ensure cross-platform compatibility, and maintain application stability across multiple releases.',
  },
  {
    name: '115slot',
     company: 'Feiwin',
    thumbnail: slot115Thumb,
    fullImage: slot115,
    category: ['react'],
    techStack: ['NextJs', 'Redux/RTK', 'Typescript', 'SCSS', 'Tailwind'],
    description:
      'Contributed to the development and maintenance of a high-traffic H5 gaming platform in a fast-paced environment, collaborating with frontend, backend, Android, and iOS teams to implement features, resolve bugs, optimize performance, ensure cross-platform compatibility, and maintain application stability across multiple releases.',
  },
  {
    name: 'Portfolio',
    thumbnail: portfolioThumb,
    fullImage: portfolio,
    category: ['react'],
    techStack: ['GatsbyJs', 'React', 'Typescript', 'SCSS', 'Bootstrap'],
    description:
      'Developed a personal portfolio website using Gatsby.js and TypeScript to deepen my expertise in React-based frameworks and static site generation. The project served as a hands-on learning experience to strengthen my understanding of Gatsby architecture, React.js concepts, and advanced Bootstrap theming and customization using SCSS, while building a performant, responsive, and maintainable web application.',
  },
  {
    name: 'Suki',
     company: 'DotDigital PH',
    thumbnail: sukiThumb,
    fullImage: suki,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript', 'Bootstrap'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI', 'Woocommerce'],
    url: 'http://sukijewelry.ph/',
    description:
      'Developed a custom-themed WordPress e-commerce website for a jewelry business, gaining extensive experience in WordPress theme architecture, template hierarchy, and reusable template parts. The project involved customizing plugin functionality and frontend integrations to deliver a tailored shopping experience while deepening my understanding of e-commerce operations, including product catalog management, customer journeys, shopping carts, checkout processes, and online retail best practices.',
  },
  {
    name: 'Magpie',
     company: 'DotDigital PH',
    thumbnail: magpieThumb,
    fullImage: magpie,
    category: ['shopify'],
    techStack: ['Shopify', 'Liquid', 'SCSS', 'Javascript'],
    url: 'https://www.magpiemerch.com/',
    description:
      "Developed a custom Shopify e-commerce website using Liquid, Shopify's templating language, marking my first hands-on experience with Shopify development. The project provided a strong foundation in Shopify theme architecture, template customization, storefront development, and e-commerce workflows, while enhancing my skills in building responsive, user-friendly, and high-performing online stores.",
  },
  {
    name: 'Nextchapterraise',
     company: 'DotDigital PH',
    thumbnail: nextchapterThumb,
    fullImage: nextchapter,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI', 'Memberpress', 'Buddypress'],
    url: 'https://nextchapterraise.com/',
    description:
      'Developed a custom-themed WordPress membership and forum website, gaining hands-on experience in building dynamic and content-driven platforms. This project introduced me to Advanced Custom Fields (ACF) and Custom Post Type UI (CPT UI), enabling the creation of flexible content structures, custom data models, and tailored user experiences through custom theme development and WordPress customization.',
  },
  {
    name: 'Common Mode',
     company: 'DotDigital PH',
    thumbnail: commonmodeThumb,
    fullImage: commonmode,
    category: ['shopify'],
    techStack: ['Shopify', 'Liquid', 'SCSS', 'Javascript'],
    url: 'https://common-mode-demo.myshopify.com/',
    description:
      "Developed and customized a Shopify e-commerce website by modifying and extending existing themes using Liquid, Shopify's templating language. This project strengthened my understanding of Shopify theme architecture, template customization, and storefront development, while enhancing my ability to create responsive, user-friendly, and business-focused e-commerce experiences.",
  },
  {
    name: 'The Barn',
     company: 'DotDigital PH',
    thumbnail: thebarnThumb,
    fullImage: thebarn,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'JQuery'],
    plugins: ['Contact Form 7', 'Itheme Security', 'Elementor'],
    url: 'https://thebarn.ph/',
    description: 'Developed and maintained a WordPress website using the Elementor page builder, creating responsive and visually engaging pages while ensuring optimal performance, SEO, and user experience. This project strengthened my expertise in WordPress customization, page builder workflows, and delivering scalable, client-focused website solutions.',
  },
  {
    name: 'Washington Watchgroup',
     company: 'DotDigital PH',
    thumbnail: washingtonThumb,
    fullImage: washington,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    url: 'https://washingtonwatchgroup.com/',
    description: 'Maintained and enhanced a custom-themed WordPress website for a luxury watch brand by implementing new features, improving existing functionality, and ensuring optimal performance, responsiveness, and user experience. The project strengthened my expertise in custom theme development, WordPress customization, performance optimization, and ongoing website maintenance.',
  },
  {
    name: 'Raycreate',
     company: 'DotDigital PH',
    thumbnail: raycreateThumb,
    fullImage: raycreate,
    category: ['wordpress'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    description: 'Transformed design mockups into fully functional, responsive, and SEO-optimized WordPress websites through custom theme development. Implemented pixel-perfect user interfaces, ensured cross-browser compatibility, optimized website performance, and delivered scalable solutions aligned with business and client requirements.',
  },
  {
    name: 'Blockchain Space',
     company: 'DotDigital PH',
    thumbnail: blockchainspaceThumb,
    fullImage: blockchainspace,
    category: ['wordpress'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    description: 'Transformed design mockups into fully functional, responsive, and SEO-optimized WordPress websites through custom theme development. Implemented pixel-perfect user interfaces, ensured cross-browser compatibility, optimized website performance, and delivered scalable solutions aligned with business and client requirements.',
  },
  {
    name: 'Dot Digital Philippines',
     company: 'DotDigital PH',
    thumbnail: dotdigitalThumb,
    fullImage: dotdigital,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    url: 'https://www.dotdigitalph.com/',
    description: "Managed and maintained the company's custom WordPress website, implementing new features, performing bug fixes, optimizing performance and SEO, ensuring website security, and providing ongoing support to maintain a reliable and high-quality user experience.",
  },
  {
    name: 'Innomedscience',
     company: 'DotDigital PH',
    thumbnail: innomedThumb,
    fullImage: innomed,
    category: ['wordpress'],
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    url: 'https://innomedscience.com/',
    description: 'Developed and customized a WordPress website using a premium theme, tailoring its design and functionality to meet business requirements while ensuring responsive design, optimal performance, SEO best practices, and a seamless user experience.',
  },
];

export type PortfolioCategory = 'wordpress' | 'shopify' | 'react' | 'static' | 'all';

export type PortfolioFilterList = {
  name: string;
  category: PortfolioCategory;
};

export const PortfolioFilterList: PortfolioFilterList[] = [
  {
    name: 'All',
    category: 'all',
  },
  {
    name: 'Wordpress',
    category: 'wordpress',
  },

  {
    name: 'React/Next JS',
    category: 'react',
  },
  {
    name: 'Shopify',
    category: 'shopify',
  },
  {
    name: 'Static',
    category: 'static',
  },
];