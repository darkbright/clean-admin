import { Typography } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
    <a href="https://mswjs.io" target="_blank" rel="noreferrer">Mock Service Worker</a>
    <br/>
    <Typography.Text>
      $ yarn add msw --dev<br/>
      $ npx msw init public/ --save
    </Typography.Text>
    </>
  )
}  

export default App;