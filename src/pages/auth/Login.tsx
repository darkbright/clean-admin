import { Button, Form, Input, Space, Typography } from 'antd';
import styled from 'styled-components';

function Login() {
  
  return (
    <>
        <Root>
          <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginBottom: '5%' }}>
              <Typography>
                CLEAN ADMIN
              </Typography>
              <Typography>
                LOGIN
              </Typography>
            </div>
            <Form>
                  <Input
                    name="id"
                    type="text"
                    autoFocus
                  />
                  <Input
                    name="password"
                    type="password"
                  />
                  <Button type="primary" size="large">로그인</Button>
                </Form>
          </Space>
        </Root>
      {/* {loading && <Loading />} */}
    </>
  );
}

export default Login;

const Root = styled('div')(({ theme }) => ({
  paddingTop: '10%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  // [theme.breakpoints.down('sm')]: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
}));
