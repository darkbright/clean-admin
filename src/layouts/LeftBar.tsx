import React, { useState } from 'react';
import {
  AntDesignOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps, MenuTheme, Space, Switch } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    label: 'Ant Design', 
    key: 'antd', 
    icon: <AntDesignOutlined />,
    children: [{ label: 'Drawer', key: 'drawer'}]
  }, 
  { label: 'Toast Grid', key: '2', icon: <TableOutlined /> }, 
  {
    label: 'sub menu',
    key: 'tui-grid',
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

  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);

    if (e.keyPath[1] === "antd") {
      navigate(`/antd/${e.keyPath[0]}`);
    } else {
      navigate(`/profile/${e.keyPath[0]}`);
    }
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