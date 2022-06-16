import React, { FC } from 'react';
import { PortfolioItemContent } from './PortfolioItemContent';
import { Item } from 'react-photoswipe-gallery';
import './PortfolioBox.scss';
import { PortfolioItem } from './PortfolioConfig';

interface Props {
  portfolioData: PortfolioItem;
}

export const PortfolioBox: FC<Props> = ({ portfolioData }) => {
  const { name, category } = portfolioData;
  return (
    <div className="portfolio__item col-lg-4 mb-4">
      <Item content={<PortfolioItemContent />}>
        {({ ref, open }) => (
          <div
            className="inner "
            onClick={(e) => {
              e.preventDefault();
              open(e);
            }}
            ref={ref as React.MutableRefObject<HTMLDivElement>}
          >
            <img className="img-fluid" src="https://placekitten.com/1024/768?image=1" alt="" />
            <div className="overlay">
              <p className="h4">{name}</p>
              <p className="text-small mb-0">( {category.toString()} )</p>
              <span className="bi bi-arrows-angle-expand"></span>
            </div>
          </div>
        )}
      </Item>
    </div>
  );
};
