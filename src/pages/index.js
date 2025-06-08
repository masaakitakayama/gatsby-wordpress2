import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>ポートフォリオへようこそ</h1>
        <p>このサイトは現在工事中です。</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="ポートフォリオ" />;

export default IndexPage;