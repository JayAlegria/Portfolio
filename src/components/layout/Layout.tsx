import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import '../../assets/styles/_main.scss';

type childrenType = {
  children: ReactElement;
};

function Layout({ children }: childrenType) {
  return (
    <>
      <Helmet title="Jay Alegria" defer={false}>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        ></link>
      </Helmet>
      <div className="page-container">{children}</div>
    </>
  );
}

export default Layout;
