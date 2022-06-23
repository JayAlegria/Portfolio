import React, { ReactElement, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

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
      </Helmet>
      <div className={`page-container ${pageClass?.c.toLowerCase()}`}>
        <div className="inner">{children}</div>
      </div>
    </>
  );
}

export default Layout;
