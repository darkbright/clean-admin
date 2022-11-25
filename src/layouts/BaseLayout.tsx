import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import BaseHeader from './BaseHeader';
import BreadcrumbBar from './BreadcrumbBar';
import BaseLeft from './BaseLeft';
import { Header } from 'antd/es/layout/layout';

import 'antd/dist/reset.css';

const { Content } = Layout;

const BaseLayout: React.FC = () => (
  <Layout>
    <Header className="header">
      <BaseHeader />
    </Header>
    <Layout>
      <BaseLeft />
      <Layout className="site-layout-background" style={{ padding: '0 24px 24px' }}>
        <BreadcrumbBar />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 800,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default BaseLayout;
