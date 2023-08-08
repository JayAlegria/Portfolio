import React, { FC } from 'react';
import './PortfolioItemContent.scss';
import { PortfolioItem } from './PortfolioConfig';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
interface Props {
  project: PortfolioItem;
}
export const PortfolioItemContent: FC<Props> = ({ project }) => {
  return (
    <div className="portfolio-content">
      <div className="inner col-lg-9">
        <p className="h3 mb-3 mb-lg-2 text-primary">{project.name}</p>
        <div className="row portfolio-content__row">
          <div className="col-lg-8">
            <div
              style={{ backgroundImage: `url(${project.fullImage})` }}
              className="portfolio-content__screenshot"
            ></div>
          </div>
          <div className="col-lg-4 px-4">
            <div className="portfolio-content__info">
              <p className="h4">Project Information</p>
              <p className="category">
                <b className="me-2">Category: </b> {project.category.toString()}
              </p>
              {project.url && <p className="category">
                <b className="me-2">Link: </b>{' '}
                <OutboundLink target="_blank" href={project.url}>
                  {project.url}
                </OutboundLink>
              </p>}
              <p className="h4">Tech Stack</p>
              <ul className="tech-stack">
                {project.techStack?.map((stack) => (
                  <li>{stack}</li>
                ))}
              </ul>
              {project.plugins && (
                <>
                  <p className="h4">Plugins</p>
                  <ul className="plugins">
                    {project.plugins?.map((plugin) => (
                      <li>{plugin}</li>
                    ))}
                  </ul>
                </>
              )}
              <p className="details">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
