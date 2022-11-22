import React, { useState } from 'react';
import {
  AntDesignOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps, MenuTheme, Space, Switch } from 'antd';
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
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Sider width={256} collapsible collapsed={collapsed} onCollapse={toggleCollapsed} className="site-layout-background" theme={theme}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme={theme}
          items={items}
          onClick={onClick}
        />
        <Space direction="vertical" align="end" size="middle" style={{ display: 'flex' }}>
          <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </Space>
      </Space>
    </Sider>
  );
};

export default LeftBar;