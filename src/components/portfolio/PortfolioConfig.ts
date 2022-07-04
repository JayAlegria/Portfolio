import AvanoThumb from '../../images/projects/avano.png';

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

export const PortfolioItems: PortfolioItem[] = [
  {
    name: 'BrandCaptain',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['react'],
    url: 'https://brandcaptain.io/',
    techStack: ['React js', 'Gatsby Js', 'Typescript'],
    description: 'Developed the landing page and help with the front-end of the platform dashboard',
  },
  {
    name: 'Avano',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['wordpress'],
    url: 'https://avano.us',
    techStack: ['Wordpress', 'PHP', 'SCSS', 'JQuery', 'Javascript', 'Bootstrap'],
    plugins: ['Contact Form 7', 'Itheme Security', 'ACF', 'CPT UI'],
    description: 'Transform the design into fully working wordpress theme',
  },
  {
    name: 'Magpie',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['shopify'],
    url: 'https://avano.us',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo nostrum dolor tenetur nam quibusdam? Officiis labore eius accusamus amet? Necessitatibus labore odio aliquam reiciendis ratione, enim cumque quia. Laboriosam.',
  },
  {
    name: 'Project one',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['react'],
    url: 'https://avano.us',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo nostrum dolor tenetur nam quibusdam? Officiis labore eius accusamus amet? Necessitatibus labore odio aliquam reiciendis ratione, enim cumque quia. Laboriosam.',
  },
  {
    name: 'Project two',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['wordpress'],
    url: 'https://avano.us',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo nostrum dolor tenetur nam quibusdam? Officiis labore eius accusamus amet? Necessitatibus labore odio aliquam reiciendis ratione, enim cumque quia. Laboriosam.',
  },
];
