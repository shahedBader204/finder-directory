import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  LoginOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{ height: 32, margin: 16, color: '#fff', fontWeight: 'bold' }}
        >
          Finder
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link to="/listings">Listings</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
          <h2>Finder Directory App</h2>
        </Header>

        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          &copy; 2025 Finder Directory
        </Footer>
      </Layout>
    </Layout>
  );
}
