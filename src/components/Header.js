import '../css/Header.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const HeaderApp = () => {

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src="/storeLogo.png" alt="Logo da Loja" className="store-logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Link to="/">Página Inicial</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderApp;
