import React from 'react';
import { Button, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo512 from '../assets/logos/Logo512';

function MainHeader() {
  const navigate = useNavigate();

  return (
    <Root>
      <Space direction="vertical" size="middle" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo512 width={140} />
        <Typography color="primary">CLEAN ADMIN</Typography>
        <Typography>SYSTEM____🤍 </Typography>
        <Button type="primary" onClick={() => navigate('/auth/login')}>
          로그인
        </Button>
        <Button type="primary" onClick={() => navigate('/main')}>
          Main
        </Button>
      </Space>
    </Root>
  );
}

export default MainHeader;

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
