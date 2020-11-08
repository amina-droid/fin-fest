import React from 'react';
import {
  Layout, Menu, Typography, Button, Affix, Grid, Row, Col, Image,
} from 'antd';

import { Map } from '../../components/Map';
import { Profile } from '../../components/Profile';
import Reviews from '../../components/Reviews/Reviews';
import about from '../../img/about.jpg';

import s from './Main.module.sass';

const { Header, Footer, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

type MenuItemProps = React.ComponentProps<typeof Menu['Item']>;
type MenuItemEvent = Parameters<NonNullable<MenuItemProps['onClick']>>[0]

const BLOCKS: { [key: string]: string } = {
  main: 'Главная',
  about: 'О фестивале',
  map: 'Карта',
  // partners: 'Партнеры',
  reviews: 'Отзывы',
};

const scrollTo = (key: string) => {
  const section = document.getElementById(key);
  section?.scrollIntoView({ block: 'center', behavior: 'smooth' });
};

const toActiveBlock = (e: MenuItemEvent) => {
  const { key } = e;
  scrollTo(key as string);
};

const Main = () => (
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
      <Layout id="about" className={s.about}>
        <Title>О фестивале</Title>
        <Row gutter={[16, 0]} className={s.aboutContent}>
          <Col span={8} xs={20} sm={20} md={8}>
            <Image src={about} className={s.aboutImage} />
          </Col>
          <Col span={16} xs={20} sm={20} md={16}>
            <Typography className={s.aboutText}>
              <Title level={3}>
                Что такое Финансовый фестиваль для всей семьи и для чего он нужен?
              </Title>
              <Paragraph>
                Дорогие друзья!
                Рады приветствовать Вас на первом региональном Финансовом фестивале для всей семьи».
              </Paragraph>
              <Paragraph>
                Мероприятие организовано ТРО ОООП «Союз защиты прав потребителей финансовых услуг»
                (Финпотребсоюз) при поддержке АНО «Национальный центр финансовой грамотности»
                и Уральского главного управления Центробанка РФ в Тюменской области.
              </Paragraph>
              <Paragraph>
                Финансовый семейный фестиваль — уникальное мероприятие в формате edutainment,
                объединившее все поколения от самых маленьких до самых опытных.
                Его цель - способствовать повышению финансовой грамотности населения и
                повышению информированности
                граждан обо всех сферах финансов в городе, а также финансовое просвещение.
              </Paragraph>
              <Paragraph>
                Среди основных задач фестиваля:
                <ul>
                  <li>Информирование населения об актуальных вопросах в
                    сфере финансовой грамотности;
                  </li>
                  <li>Отбор и поддержка частных и общественных инициатив
                    в области повышения финансовой грамотности;
                  </li>
                  <li>Повышение рейтинга финансовой грамотности в
                    своем регионе и уровня знаний его жителей.
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                Фестиваль состоит из восьми основных площадок:
                <ul>
                  <li>Финансовый лекторий</li>
                  <li>Площадка тренингов и мастер-классов</li>
                  <li>Площадка финансовых игр</li>
                  <li>Детская площадка финансовой грамотности</li>
                  <li>Финансовый кинотеатр</li>
                  <li>Правовые и финансовые консультации</li>
                  <li>Выставка финансовых продуктов и организаций</li>
                  <li>Диалоговая площадка – круглый
                    стол и панельная дискуссия о финансовой грамотности
                  </li>
                </ul>
              </Paragraph>
              <Paragraph>
                Приглашаем Вас посетить все площадки на сайте и принять в них активное участие!
              </Paragraph>
              <Paragraph>
                <Text strong>
                  С уважением, куратор проведения Фестиваля,
                  исполнительный директор ТРО ОООП «Союз защиты прав потребителей финансовых услуг»,
                  Светлана Мельцер
                </Text>
              </Paragraph>
            </Typography>
          </Col>
        </Row>
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

export default Main;
