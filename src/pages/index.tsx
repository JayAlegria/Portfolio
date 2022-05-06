import * as React from 'react';
import { SectionProvider } from '../components/context/SectionContext';
import Layout from '../components/layout/Layout';
import { SmartSectionDisplay } from '../components/SmartSectionDisplay';
import { SmartTopNavigation } from '../components/SmartTopNavigation';
const IndexPage = () => {
  return (
    <SectionProvider>
      <Layout>
        <SmartTopNavigation />
        <SmartSectionDisplay />
      </Layout>
    </SectionProvider>
  );
};

export default IndexPage;
