import React from 'react';
import { Button, message, Space, Typography } from 'antd';

const { Title, Text } = Typography;

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    void messageApi.info('Hello, Ant Design!');
  };

  const success = () => {
    void messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = () => {
    void messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

  const warning = () => {
    void messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };

  return (
    <>
      <Space direction="vertical">
        <Title>Message</Title>
        <Text>사용자 작업에 대한 응답으로 글로벌 메시지를 피드백으로 표시합니다.</Text>
        {contextHolder}
        <Button type="primary" onClick={info}>
          Display normal message
        </Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};

export default App;
