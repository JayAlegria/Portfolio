import React from 'react';
import './PortfolioItemContent.scss';
import proj from '../../images/projects/screencapture-avano-us.png';
export const PortfolioItemContent = () => {
  return (
    <div className="portfolio-content">
      <div className="inner col-lg-9">
        <p className="h3 mb-2">Avano.us</p>
        <div className="row portfolio-content__row">
          <div className="col-lg-8">
            <div style={{ backgroundImage: `url(${proj})` }} className="portfolio-content__screenshot"></div>
          </div>
          <div className="col-lg-4 px-4">
            <div className="portfolio-content__info">
              <p className="h4">Project Information</p>
              <p className="category">
                <b>Category: </b> Web design
              </p>
              <p className="category">
                <b>Category: </b> Web design
              </p>
              <p className="category">
                <b>Category: </b> Web design
              </p>
              <ul className="tech-stack">
                <li>Wordpress</li>
                <li>PHP</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Jquery</li>
                <li>Wordpress</li>
              </ul>
              <p className="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ullam? Sit similique ipsum optio unde
                atque perspiciatis ab dicta minus? Harum et, id repellat laboriosam deleniti obcaecati a numquam
                voluptatem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
