import React from 'react';

import Layout from '../components/Layout';
import FirstSection from '../components/firstSection';
import Second from '../components/Second';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FirstSection />
        <Second />
      </Layout>
    );
  }
}
