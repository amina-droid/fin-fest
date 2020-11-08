import React, { useState } from 'react';
import {
  Layout, Menu, Typography, Button, Affix,
} from 'antd';

import s from './Main.module.sass';
import { Map } from '../../components/Map';
import { Profile } from '../../components/Profile';

const { Header, Content } = Layout;
const { Title } = Typography;

const Main = () => (
  <>
    <Affix offsetTop={0}>
      <Header className={s.header}>
        <div className={s.logo}>Финансовый фестиваль</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
          <Menu.Item key="1">О проекте</Menu.Item>
          <Menu.Item key="2">Карта</Menu.Item>
          <Menu.Item key="3">Партнеры</Menu.Item>
          <Menu.Item key="4">Отзывы</Menu.Item>
        </Menu>
        <Profile />
      </Header>
    </Affix>
    <Content className={s.container}>
      <Layout id="main" className={s.banner}>
        <Title className={s.title}>Финансовый фестиваль {'\n'} для всей семьи</Title>
        <Button className={s.mapButton} type="primary">
          Карта
        </Button>
      </Layout>
      <Layout id="map" className={s.map}>
        <Title>Карта</Title>
        <Map />
      </Layout>
    </Content>
  </>
);

export default Main;
