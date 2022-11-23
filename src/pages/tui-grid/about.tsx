import { Typography } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
    <a href="https://github.com/nhn/tui.grid" target="_blank" rel="noreferrer">Toast Grid Main</a>
    <br/>
    <a href="https://github.com/nhn/tui.grid/tree/master/packages/toast-ui.react-grid" target="_blank" rel="noreferrer">toast-ui.react-grid</a> - React wrapper component implemented by NHN Cloud.
    <br/>
    <Typography.Text>
      $ yarn add @toast-ui/react-grid
    </Typography.Text>
    </>
  )
}  

export default App;