import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space direction='vertical'>
        <Title>Drawer</Title>
        <Text>화면 가장자리에서 슬라이드되는 패널</Text>
        <Button type="primary" onClick={showDrawer}>
          Open Drawer
      </Button>
      </Space>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;