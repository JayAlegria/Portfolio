import * as React from 'react';
import { SectionProvider } from '../components/context/SectionContext';
import { Header } from '../components/header/Header';
import Layout from '../components/layout/Layout';
import { SmartSectionDisplay } from '../components/SmartSectionDisplay';
const IndexPage = () => {
  return (
    <SectionProvider>
      <Layout>
        <Header />
        <SmartSectionDisplay />
      </Layout>
    </SectionProvider>
  );
};

export default IndexPage;
