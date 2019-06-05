import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Menu, Input, Row, Col, Card, Avatar,
} from 'antd';
import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const Layout = ({ children }) => {
  const { user, isLoggedIn } = useSelector(state => state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://www.zerocho.com">
            <a target="_blank">Made by Zerocho</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
