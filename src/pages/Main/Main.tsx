import React from 'react';
import {
  Layout, Menu, Typography, Button, Affix,
} from 'antd';

import s from './Main.module.sass';
import { Map } from '../../components/Map';
import { Profile } from '../../components/Profile';
import Reviews from '../../components/Reviews/Reviews';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

type MenuItemProps = React.ComponentProps<typeof Menu['Item']>;
type MenuItemEvent = Parameters<NonNullable<MenuItemProps['onClick']>>[0]

const BLOCKS: { [key: string]: string } = {
  main: 'Главная',
  map: 'Карта',
  partners: 'Партнеры',
  reviews: 'Отзывы',
  about: 'О проекте',
};

const Main = () => {
  const scrollTo = (key: string) => {
    const section = document.getElementById(key);
    section?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  const toActiveBlock = (e: MenuItemEvent) => {
    const { key } = e;
    scrollTo(key as string);
  };

  return (
    <>
      <Affix offsetTop={0}>
        <Header className={s.header}>
          <div
            className={s.logo}
            onClick={() => scrollTo('main')}
            onKeyUp={() => scrollTo('main')}
            role="button"
            tabIndex={0}
          >Финансовый фестиваль
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']} selectable={false}>
            {Object.keys(BLOCKS).map(key => (
              <Menu.Item
                key={key}
                active={false}
                onClick={toActiveBlock}
              >
                {BLOCKS[key]}
              </Menu.Item>
            ))}
          </Menu>
          <Profile />
        </Header>
      </Affix>
      <Content className={s.container}>
        <Layout id="main" className={s.banner}>
          <Title className={s.title}>Финансовый фестиваль {'\n'} для всей семьи</Title>
          <Button className={s.mapButton} type="primary" onClick={() => scrollTo('map')}>
            Карта
          </Button>
        </Layout>
        <Layout id="map" className={s.map}>
          <Title>Карта</Title>
          <Map />
        </Layout>
        <Layout id="reviews" className={s.reviews}>
          <Title>Отзывы</Title>
          <Reviews className={s.reviewsCarousel} />
        </Layout>
      </Content>
    </>
  );
};

export default Main;
