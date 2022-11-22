import React, { useState } from 'react';
import {
  AntDesignOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

//  import type { MenuProps } from 'antd';
// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: 'group',
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

const items = [
  { label: 'Ant Design', key: '1', icon: <AntDesignOutlined />}, 
  { label: 'Toast Grid', key: '2', icon: <TableOutlined /> }, 
  {
    label: 'sub menu',
    key: '3',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

const LeftBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider width={256} collapsible collapsed={collapsed} onCollapse={toggleCollapsed} className="site-layout-background" theme="light">
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </Sider>
  );
};

export default LeftBar;