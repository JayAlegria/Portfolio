import React, { FC, useState } from 'react';
import { SectionHead } from '../common/SectionHead';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Gallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { PortfolioFilters } from './PortfolioFilters';
import { PortfolioBox } from './PortfolioBox';
import { PortfolioItems, PortfolioCategory } from './PortfolioConfig';

interface Props {
  styles: {};
}

export const Portfolio: FC<Props> = ({ styles }) => {
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioCategory>('all');

  const filteredPortfolio =
    portfolioFilter === 'all'
      ? PortfolioItems
      : PortfolioItems.filter((portfolioItem) => portfolioItem.category.includes(portfolioFilter));

  const onFilter = (category: PortfolioCategory) => {
    setPortfolioFilter(category);
  };

  const options = {
    closeOnScroll: false,
    closeOnVerticalDrag: false,
  };

  return (
    <SectionWrapper name="portfolio" styles={styles}>
      <SectionHead title="Portfolio" subtitle="My Works" />
      <small className="text-muted d-block col-lg-4">
        I built all the website below, except my portfolio, under the supervision of{' '}
        <a href="https://www.dotdigitalph.com/">Dot Digital Philippines</a> agency
      </small>
      <PortfolioFilters onFilter={onFilter} activeCat={portfolioFilter} />
      <div className="portfolio__row row my-5">
        <Gallery options={options}>
          {filteredPortfolio.map((portfolioData) => (
            <PortfolioBox key={portfolioData.name} portfolioData={portfolioData} />
          ))}
        </Gallery>
      </div>
    </SectionWrapper>
  );
};
