import * as React from 'react';
import { SectionContext, SectionProvider } from '../components/context/SectionContext';
import Layout from '../components/layout/Layout';
import { SmartSectionDisplay } from '../components/SmartSectionDisplay';
import { SmartTopNavgation } from '../components/SmartTopNavgation';

const IndexPage = () => {
  const activeSection = React.useContext(SectionContext);
  console.log(activeSection);
  return (
    <Layout>
      <SectionProvider>
        <SmartTopNavgation />
        <SmartSectionDisplay />
      </SectionProvider>
    </Layout>
  );
};

export default IndexPage;
