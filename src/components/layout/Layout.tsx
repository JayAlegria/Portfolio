import React, { ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/og-image.png';

import '../../styles/_main.scss';
import { useSection } from '../context/SectionContext';

type childrenType = {
  children: ReactNode;
};

function Layout({ children }: childrenType) {
  const pageClass = useSection();
  return (
    <>
      <Helmet title="Jay Alegria" defer={false}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Raleway:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Jay Alegria" />
        <meta
          property="og:description"
          content="I am Jay, a web developer who has expertise in front end development, I commonly build websites using Wordpress, Shopify or React js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <div className={`page-container ${pageClass?.c.toLowerCase()}`}>
        <div className="inner">{children}</div>
      </div>
    </>
  );
}

export default Layout;
