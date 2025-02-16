import React from 'react';
import Layout from '@theme/Layout';
import CustomHeader from './CustomHeader';
import CustomFooter from './Footer/CustomFooter';

export default function LayoutTemplate({ children, ...props }) {
  return (
    <Layout {...props}>
      {children}
      <CustomFooter />
    </Layout>
  );
}