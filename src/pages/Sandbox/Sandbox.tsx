import React from 'react';
import {
  Typography, Layout, Timeline, Row, Col, Carousel, Card, Avatar,
} from 'antd';
import Header from '../../components/Header/Header';

import s from './Sandbox.module.sass';
import { Chat } from '../../components/Chat';
import { firstArea, lectors, links } from './dictionaries';
import { Footer } from '../../components/Footer';
import { Test } from '../../components/Test';
import { AdditionalMaterials } from '../../components/AdditionalMaterials';
import { VideoPlayer } from '../../components/Video';

const { Title, Paragraph } = Typography;

const BLOCKS: { [key: string]: string } = {
  program: 'Программа',
  translation: 'Видео трансляция',
  extra: 'Полезные материалы',
};

const Sandbox = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Игротека для самых маленьких</Title>
    <Layout className={s.section}>
      <Paragraph>Приветствуем Вас на площадке «Игротека для самых маленьких»!</Paragraph>
      <Paragraph>
        Дорогие ребята! А также мамы, папы, бабушки и дедушки!
        Для Вас работает площадка, на которой каждый ребенок может в
        доступной форме получить знания о мире денег и правилах,
        которые нужно соблюдать, чтобы подружиться с финансами.
      </Paragraph>
      <Paragraph>
        Вы можете посмотреть трансляции и перенять опыт лучших
        игропрактиков региона, а также, пройдя по ссылкам всей
        семьей стать жителями удивительной и волшебной страны
        финансовых знаний. Играйте, получайте новые знания и
        применяйте их вместе с новыми и интересными игровыми продуктами.
      </Paragraph>
      <Paragraph><b>Помните, игра – это серьезно!</b></Paragraph>
    </Layout>
    <Layout id="program" className={s.section}>
      <Title level={2}>Программа</Title>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={12} xs={24} sm={24} md={12}>
          <div className={s.carousel}>
            <Carousel dots={{ className: s.carouselDots }} autoplay dotPosition="left">
              {lectors.map(lector => (
                <div className={s.cardContainer} key={lector.name}>
                  <Card className={s.card}>
                    <div className={s.cardBody}>
                      <Avatar src={lector.avatar} size={300} className={s.cardAvatar} />
                      <Typography.Title level={5}>{lector.name}</Typography.Title>
                      <Typography.Text>
                        {lector.description}
                      </Typography.Text>
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col span={12} xs={24} sm={24} md={12}>
          <Timeline mode="alternate">
            {firstArea.map(area => (
              <Timeline.Item label={area.time} key={area.author}>
                <p>{area.text}</p>
                <p>{area.author}</p>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>

    </Layout>
    <Layout id="translation" className={s.section}>
      <Title level={2}>Видео трансляция</Title>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={16} xs={24} sm={24} md={16}>
          <Card>
            <div className={s.cardBody}>
              <VideoPlayer place="sandbox" />
            </div>
            <Test page="sandbox" />
          </Card>
        </Col>
        <Col span={8} xs={24} sm={24} md={8}>
          <Chat topic="sandbox" />
        </Col>
      </Row>
    </Layout>
    <Layout className={s.section} id="extra">
      <Title level={2}>Полезные материалы</Title>
      <Paragraph>Команда «Игротеки для самых маленьких» желает Вам и Вашим детям
        интересно провести время и сделать
        первые шаги к успеху в удивительном мире финансов
      </Paragraph>
      <Paragraph>
        <AdditionalMaterials links={links} />
      </Paragraph>
    </Layout>
    <Footer />
  </Layout>
);

export default Sandbox;
