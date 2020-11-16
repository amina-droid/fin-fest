import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Layout, Typography, Button, Row, Col, Image, Statistic,
} from 'antd';

import { useQuery, useSubscription } from '@apollo/client';
import { Map } from '../../components/Map';
import Reviews from '../../components/Reviews/Reviews';
import about from '../../img/about.jpg';
import finpotreb from '../../img/finpotreb.png';
import partnersDictionary from './partners/dictionary';

import s from './Main.module.sass';
import Header, { scrollTo } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import {
  GET_USER_COUNT, GetUserCount, SUBSCRIBE_TO_NEW_USER, SubscribeToNewUser,
} from '../../apollo';

const { Content } = Layout;
const {
  Title, Paragraph, Text, Link,
} = Typography;

const BLOCKS: { [key: string]: string } = {
  main: 'Главная',
  about: 'О фестивале',
  map: 'Карта',
  reviews: 'Отзывы',
  partners: 'Партнеры',
};
const DEADLINE = moment('2020-11-18').toISOString();
const Main = () => {
  const [usersCount, setUsersCount] = useState<number>(0);
  const { data, loading } = useQuery<GetUserCount>(GET_USER_COUNT);
  useSubscription<SubscribeToNewUser>(SUBSCRIBE_TO_NEW_USER, {
    onSubscriptionData: () => {
      setUsersCount(usersCount + 1);
    },
  });

  useEffect(() => {
    setUsersCount(prevCount => prevCount + (data?.usersCount || 0));
  }, [data]);

  return (
    <>
      <Header navigation={BLOCKS} />
      <Content className={s.container}>
        <Layout id="main" className={s.banner}>
          <Row gutter={[30, 30]} className={s.bannerContent}>
            <Col span={12} xs={24} sm={24} md={12}>
              <Title className={s.title}>Финансовый фестиваль для всей семьи</Title>
              <Paragraph className={s.subtitle}>Финансовая грамотность - это интересно!</Paragraph>
              <Button className={s.bannerButton} size="large" type="primary" onClick={() => scrollTo('map')}>
                Карта
              </Button>
            </Col>
            <Col span={12} xs={24} sm={24} md={12}>
              <div className={s.bannerCard}>
                <Paragraph className={s.bannerText}>
                  Единственное в России мероприятие по повышению
                  финансовой грамотности в формате EDUTAINMENT
                </Paragraph>
                <Paragraph className={s.bannerText}>
                  Вас ждут:
                  <ul>
                    <li>Креативные форматы</li>
                    <li>Лучшие эксперты</li>
                  </ul>
                </Paragraph>
                <Paragraph className={s.bannerText}>
                  18 ноября в городе Тюмень!
                </Paragraph>
              </div>
            </Col>
          </Row>
        </Layout>
        <Layout className={s.statistic}>
          <Statistic
            value={usersCount}
            loading={loading}
            title={<Title level={5}>Количество пользователей</Title>}
          />
          <div className={s.statisticImg}>
            <img src={finpotreb} alt="logo" />
          </div>
          <Statistic.Countdown
            value={DEADLINE}
            format="HH:mm:ss"
            title={<Title level={5}>До начала осталось</Title>}
          />
        </Layout>
        <Layout id="about" className={s.about}>
          <Title>О фестивале</Title>
          <Row gutter={[16, 0]} className={s.aboutContent}>
            <Col span={16} xs={24} sm={24} md={16}>
              <Typography className={s.aboutText}>
                <Title level={3}>
                  Что такое Финансовый фестиваль для всей семьи и для чего он нужен?
                </Title>
                <Paragraph>
                  Дорогие друзья!
                  Рады приветствовать Вас на первом региональном
                  Финансовом фестивале для всей семьи.
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
                    исполнительный директор ТРО ОООП «Союз защиты прав
                    потребителей финансовых услуг»,
                    Светлана Мельцер
                  </Text>
                </Paragraph>
                <Link href={`${process.env.PUBLIC_URL}/Polojenie.pdf`} target="_blank">
                  Положение о фестивале
                </Link>
              </Typography>
            </Col>
            <Col span={8} xs={24} sm={24} md={8}>
              <Image src={about} className={s.aboutImage} />
            </Col>
          </Row>
        </Layout>
        <Layout id="map" className={s.map}>
          <Title>Карта</Title>
          <Map />
        </Layout>
        <Layout id="reviews" className={s.reviews}>
          <Title>Отзывы</Title>
          <Reviews />
        </Layout>
        <Layout id="partners" className={s.partners}>
          <Title>Партнеры</Title>
          <Paragraph>Мы благодарим наших партнеров за участие в
            организации Фестиваля и помощь в формировании призового фонда!
          </Paragraph>
          <div className={s.partnersContainer}>
            {partnersDictionary.map(partner => (
              <a
                className={s.partnersImgLink}
                href={partner.link || ''}
                target="_blank"
                rel="noreferrer"
                key={partner.link}
              >
                <img
                  alt={partner.link || ''}
                  src={partner.img}
                  className={s.partnersImg}
                />
              </a>
            ))}
          </div>
        </Layout>
      </Content>
      <Footer />
    </>
  );
};

export default Main;
