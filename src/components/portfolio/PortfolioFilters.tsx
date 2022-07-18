import classNames from 'classnames';
import React, { FC } from 'react';
import { PortfolioCategory, PortfolioFilterList } from './PortfolioConfig';
import './PortfolioFilters.scss';

interface Props {
  onFilter: (category: PortfolioCategory) => void;
  activeCat: string;
}

export const PortfolioFilters: FC<Props> = ({ onFilter, activeCat }) => {
  return (
    <div className="mt-5 text-center portfolio__filters">
      {PortfolioFilterList.map((filter) => (
        <button
          key={filter.name}
          className={classNames({ 'mb-3': true, active: filter.name.toLocaleLowerCase() === activeCat })}
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
