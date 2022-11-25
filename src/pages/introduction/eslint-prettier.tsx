import { Typography } from 'antd';
import React from 'react';
const { Title, Text, Paragraph } = Typography;

const App: React.FC = () => {
  return (
    <>
      <Title level={1}>ESLINT & Prettier</Title>
      <Paragraph>
        ESLint 와 Prettier는 개발자 경험을 향상시켜 주는 유용한 도구입니다. <br />
        ESLint 는 자바스크립트 문법검사를 해주는데, 그 문법 검사에 대한 조건에 다양한 옵션을 정해줄 수 있습니다. <br />
        Prettier는 코드를 자동으로 정리를 해주는데 다른 도구들과의 주요 차이점은 코드 정리 규칙을 세부적으로 설정할 수 있다는 것입니다.
      </Paragraph>
      <Title level={2}>VSCode Extensions</Title>
      <Paragraph>
        <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">
          ESLINT
        </a>
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">
          Prettier
        </a>
        <br />
      </Paragraph>
      <Title level={2}>Eslint</Title>
      <Paragraph code={true} copyable={true}>
        yarn add eslint --dev
      </Paragraph>
      <Paragraph code={true} copyable={true}>
        npx eslint --init
      </Paragraph>
      <Title level={2}>prettier</Title>
      <Text code={true} copyable={true}>
        yarn add -D prettier
      </Text>
      <Title level={2}>eslint-config-prettier</Title>
      <Paragraph>
        eslint-config-prettier은 prettier에서 관리하는 코드 스타일의 ESLint 규칙을 비활성화 시켜줍니다. <br />
        이것을 사용하면 ESLint는 자바스크립트 문법 관련된 것들만 관리하게 되고, 코드스타일 관련 작업은 prettier가 담당하게 됩니다.
      </Paragraph>
      <Text code={true} copyable={true}>
        yarn add eslint-config-prettier
      </Text>
    </>
  );
};

export default App;
