import React, { FC } from 'react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { SectionHead } from '../common/SectionHead';
import './Resume.scss';

interface Props {
  styles: {};
}
export const Resume: FC<Props> = ({ styles }) => {
  return (
    <SectionWrapper name="resume" styles={styles}>
      <SectionHead title="RESUME" subtitle="CHECK MY RESUME" />
      <div className="mt-5 row resume__row">
        <div className="col-lg-6 resume__column">
          <div className="resume__group mb-5">
            <p className="h3">Summary</p>
            <div className="resume__content ps-5">
              <p className="title mb-0">lorem ipsum</p>
              <span className="year">2016-2019</span>
              <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex accusantium iste expedita repellat,
                voluptatum magni ut sequi voluptate natus iure assumenda! Eaque sint earum totam delectus nulla eos
                eligendi!'
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </div>
          <div className="resume__group mb-5">
            <p className="h3">Summary</p>
            <div className="resume__content ps-5">
              <p className="title">lorem ipsum</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex accusantium iste expedita repellat,
                voluptatum magni ut sequi voluptate natus iure assumenda! Eaque sint earum totam delectus nulla eos
                eligendi!'
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
            <div className="resume__content ps-5">
              <p className="title">lorem ipsum</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex accusantium iste expedita repellat,
                voluptatum magni ut sequi voluptate natus iure assumenda! Eaque sint earum totam delectus nulla eos
                eligendi!'
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-1 resume__column">
          <div className="resume__group mb-5">
            <p className="h3">Professional Experience</p>
            <div className="resume__content ps-5">
              <p className="title">lorem ipsum</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex accusantium iste expedita repellat,
                voluptatum magni ut sequi voluptate natus iure assumenda! Eaque sint earum totam delectus nulla eos
                eligendi!'
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
