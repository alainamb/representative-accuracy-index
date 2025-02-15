import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import CustomHeader from './CustomHeader';
import CustomFooter from './CustomFooter';

export default function Layout(props) {
  return (
    <OriginalLayout
      {...props}
      header={<CustomHeader />}
      footer={<CustomFooter />}
    />
  );
}