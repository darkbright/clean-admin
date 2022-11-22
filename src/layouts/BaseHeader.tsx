import React from 'react';
import { Divider, Layout, Menu } from 'antd';
import { Items1 } from './Items1';
import { Typography } from 'antd';

import Logo from '../assets/logos/Logo';

const { Text, Title } = Typography;

const BaseHeader: React.FC = () => (
  <>
    <div className="logo"><span>Ant Design</span> </div>
    {/* <Logo /> */}
    {/* <Menu theme="light" defaultSelectedKeys={['2']} items={Items1} /> */}
    {/* <span color="white">Ant Design</span>
    <Title color="white">Ant Design2</Title> */}
  </>
);

export default BaseHeader;