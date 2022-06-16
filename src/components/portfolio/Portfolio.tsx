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

  return (
    <SectionWrapper name="portfolio" styles={styles}>
      <SectionHead title="Portfolio" subtitle="My Works" />
      <PortfolioFilters onFilter={onFilter} />
      <div className="portfolio__row row my-5">
        <Gallery>
          {filteredPortfolio.map((portfolioData) => (
            <PortfolioBox key={portfolioData.name} portfolioData={portfolioData} />
          ))}
        </Gallery>
      </div>
    </SectionWrapper>
  );
};
