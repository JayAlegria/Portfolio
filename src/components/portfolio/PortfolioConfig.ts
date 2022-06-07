import AvanoThumb from '../../images/bg.jpg';

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
  description: string;
}

export const PortfolioItems: PortfolioItem[] = [
  {
    name: 'Avano',
    thumbnail: AvanoThumb,
    fullImage: AvanoThumb,
    category: ['wordpress', 'react'],
    url: 'https://avano.us',
    description:
      ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quo nostrum dolor tenetur nam quibusdam? Officiis labore eius accusamus amet? Necessitatibus labore odio aliquam reiciendis ratione, enim cumque quia. Laboriosam.',
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
