import React from 'react';
import { Testimonials } from './AboutConfig';
import Slider from 'react-slick';

import './AboutTestimonials.scss';
export const AboutTestimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="about__testimonials py-5">
        <p className="vertical-line">Testimonials</p>
        <div className="mt-3">
          <Slider {...settings}>
            {Testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-3 px-3">
                <div className="testimonial-card">
                  <div className="qoute bg-semi-transparent px-3 py-5">
                    <p className="mb-0">
                      <i>{testimonial.qoute}</i>
                    </p>
                  </div>
                  <div className="author">
                    <span className="bi bi-person-fill"></span>
                    <p className="mb-0">{testimonial.name}</p>
                    {testimonial.src && (
                      <a className="text-muted" href={testimonial.link}>
                        {testimonial.src}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
