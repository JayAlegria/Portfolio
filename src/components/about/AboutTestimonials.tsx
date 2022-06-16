import React from 'react';
import Slider from 'react-slick';

import './AboutTestimonials.scss';

const testimonials = [
  {
    name: 'ghenderson1',
    qoute:
      'Very efficient and willing to figure out things to help me. Very responsive to all messages. Very easy to work with highly suggest using him for your website needs. I can’t say enough about his quality of work and how quickly he gets things done.',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'zain99201',
    qoute:
      'Jay is the man! 10/10 very responsive. Be very detailed on what you are looking for and he will provide you the best quality work. There is no waiting around for him either. He is quick. Will be using your services again. Thanks a ton.',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'airliquid',
    qoute:
      'Great job as always! Friendly and Professional. He explains even a small basic stuff step by step to understand. Highly Recommended!',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'dashaye',
    qoute: 'Answered all my questions, completed the job in a timely manner. Easy process with this seller!',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'jellyjan',
    qoute: 'Exactly what I needed! Thank you',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'scruggslife',
    qoute: 'Awesome communications',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
  {
    name: 'steveairedale',
    qoute: 'Jay , always goes out of his way to make Sure he is delivering his best work to me. Jay is the best!',
    link: 'https://www.fiverr.com/jaylaurence/add-pages-menu-categories-on-your-wordpress-website',
    src: 'fiverr',
  },
];
export const AboutTestimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className="about__testimonials py-5">
        <p className="vertical-line">Testimonials</p>
        <div className="mt-3">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
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
