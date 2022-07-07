import avano from '../../images/projects/avano.png';
import avanoThumb from '../../images/projects/thumbnail/avano.jpg';
import brandCaptain from '../../images/projects/Brandcaptain.png';
import brandCaptainThumb from '../../images/projects/thumbnail/BrandCaptain.jpg';
import magpie from '../../images/projects/magpie.png';
import magpieThumb from '../../images/projects/thumbnail/magpie.jpg';
import raycreate from '../../images/projects/raycreate.png';
import raycreateThumb from '../../images/projects/thumbnail/raycreate.jpg';
import blockchainspace from '../../images/projects/blockchainspace.png';
import blockchainspaceThumb from '../../images/projects/thumbnail/blockchainspace.jpg';
import commonmode from '../../images/projects/commonmode.png';
import commonmodeThumb from '../../images/projects/thumbnail/commonmode.jpg';
import dotdigital from '../../images/projects/dotdigital.png';
import dotdigitalThumb from '../../images/projects/thumbnail/dotdigital.jpg';
import innomed from '../../images/projects/innomed.png';
import innomedThumb from '../../images/projects/thumbnail/innomed.jpg';
import nextchapter from '../../images/projects/nextchapter.png';
import nextchapterThumb from '../../images/projects/thumbnail/nextchapter.jpg';
import portfolio from '../../images/projects/portfolio.png';
import portfolioThumb from '../../images/projects/thumbnail/portfolio.jpg';
import suki from '../../images/projects/suki.png';
import sukiThumb from '../../images/projects/thumbnail/suki.jpg';
import thebarn from '../../images/projects/thebarn.png';
import thebarnThumb from '../../images/projects/thumbnail/thebarn.jpg';
import washington from '../../images/projects/washington.png';
import washingtonThumb from '../../images/projects/thumbnail/washington.jpg';

export const PortfolioItems: PortfolioItem[] = [
  {
    name: 'BrandCaptain',
    thumbnail: brandCaptainThumb,
    fullImage: brandCaptain,
    category: ['react'],
    url: 'https://brandcaptain.io/',
    techStack: ['React js', 'Gatsby Js', 'Typescript'],
    description: 'Developed the landing page and help with the front-end of the platform dashboard',
  },
  {
    name: 'Avano',
    thumbnail: avanoThumb,
    fullImage: avano,
    category: ['wordpress'],
    url: 'https://avano.us',
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript', 'Bootstrap'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    description: 'Transform design into fully functional wordpress website.',
  },
  {
    name: 'Magpie',
    thumbnail: magpieThumb,
    fullImage: magpie,
    category: ['shopify'],
    url: 'https://www.magpiemerch.com/',
    description: 'E-commerce website built using liquid and shopify',
  },
  {
    name: 'Raycreate',
    thumbnail: raycreateThumb,
    fullImage: raycreate,
    category: ['wordpress'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    url: 'https://clientservices.dotdigitalph.com/raycreate/',
    description: 'Transform design into fully functional wordpress website.',
  },
  {
    name: 'Blockchain Space',
    thumbnail: blockchainspaceThumb,
    fullImage: blockchainspace,
    category: ['wordpress'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    url: 'https://clientservices.dotdigitalph.com/eventspace/',
    description: 'Transform design into fully functional wordpress website.',
  },
  {
    name: 'Common Mode',
    thumbnail: commonmodeThumb,
    fullImage: commonmode,
    category: ['shopify'],
    url: 'https://common-mode-demo.myshopify.com/',
    description: 'E-commerce website built with customized shopify theme',
  },
  {
    name: 'Dot Digital Philippines',
    thumbnail: dotdigitalThumb,
    fullImage: dotdigital,
    category: ['wordpress'],
    url: 'https://www.dotdigitalph.com/',
    description: 'Managed and maintained content',
  },
  {
    name: 'Innomedscience',
    thumbnail: innomedThumb,
    fullImage: innomed,
    category: ['wordpress'],
    url: 'https://innomedscience.com/',
    description: 'Built by using wordpress premium theme',
  },
  {
    name: 'Nextchapterraise',
    thumbnail: nextchapterThumb,
    fullImage: nextchapter,
    category: ['wordpress'],
    url: 'https://innomedscience.com/',
    description: 'Membership and forum website that built by creating its own theme',
  },
  {
    name: 'Portfolio',
    thumbnail: portfolioThumb,
    fullImage: portfolio,
    category: ['react'],
    url: '#',
    description: 'This portfolio is built with gatsby js and typescript',
  },
  {
    name: 'Suki',
    thumbnail: sukiThumb,
    fullImage: suki,
    category: ['wordpress'],
    url: 'http://sukijewelry.ph/',
    description: 'E-commerce website built by creating its own theme',
  },
  {
    name: 'The Barn',
    thumbnail: thebarnThumb,
    fullImage: thebarn,
    category: ['wordpress'],
    url: 'https://thebarn.ph/',
    description: 'Built using elementor page builder',
  },
  {
    name: 'Washington Watchgroup',
    thumbnail: washingtonThumb,
    fullImage: washington,
    category: ['wordpress'],
    url: 'https://washingtonwatchgroup.com/',
    description: 'Built by creating its own theme',
  },
];

export type PortfolioCategory = 'wordpress' | 'shopify' | 'react' | 'all';

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
    name: 'React',
    category: 'react',
  },
  {
    name: 'Shopify',
    category: 'shopify',
  },
];

export interface PortfolioItem {
  name: string;
  thumbnail: string;
  fullImage: string;
  category: string[];
  url: string;
  techStack?: string[];
  plugins?: string[];
  description: string;
}
