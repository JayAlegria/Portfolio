import React, { FC } from 'react';
import { PortfolioCategory, PortfolioFilterList } from './PortfolioConfig';
import './PortfolioFilters.scss';

interface Props {
  onFilter: (category: PortfolioCategory) => void;
}

export const PortfolioFilters: FC<Props> = ({ onFilter }) => {
  return (
    <div className="mt-5 text-center portfolio__filters">
      {PortfolioFilterList.map((filter) => (
        <button
          key={filter.name}
          className="mb-3"
          onClick={() => {
            onFilter(filter.category);
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};
