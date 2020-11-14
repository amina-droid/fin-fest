import React from 'react';
import {
  Typography, Layout, Timeline, Row, Col, Carousel, Card, Avatar, Tabs,
} from 'antd';
import ReactPlayer from 'react-player';
import Header from '../../components/Header/Header';

import s from './MasterClasses.module.sass';
import { Chat } from '../../components/Chat';
import { firstArea, lectors, secondArea } from './dictionaries';
import { Footer } from '../../components/Footer';

const { Title } = Typography;

const BLOCKS: { [key: string]: string } = {
  program: 'Программа',
  translation: 'Видео трансляция',
};

const MasterClasses = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Мастер классы и тренинги</Title>
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
          <Tabs defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Площадка 1" key="1">
              <Timeline mode="alternate">
                {firstArea.map(area => (
                  <Timeline.Item label={area.time} key={area.author}>
                    <p>{area.text}</p>
                    <p>{area.author}</p>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Площадка 2" key="2">
              <Timeline mode="alternate">
                {secondArea.map(area => (
                  <Timeline.Item label={area.time} key={area.author}>
                    <p>{area.text}</p>
                    <p>{area.author}</p>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>

    </Layout>
    <Layout id="translation" className={s.section}>
      <Title level={2}>Видео трансляция</Title>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Площадка 1" key="1">
          <Row gutter={[16, 0]} className={s.aboutContent}>
            <Col span={16} xs={24} sm={24} md={16}>
              <Card>
                <div className={s.cardBody}>
                  <ReactPlayer
                    height="50vh"
                    width="100%"
                    controls
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                </div>
              </Card>
            </Col>
            <Col span={8} xs={24} sm={24} md={8}>
              <Chat topic="masterclasses/1" />
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Площадка 2" key="2">
          <Row gutter={[16, 0]} className={s.aboutContent}>
            <Col span={16} xs={24} sm={24} md={16}>
              <Card>
                <div className={s.cardBody}>
                  <ReactPlayer
                    height="50vh"
                    controls
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  />
                </div>
              </Card>
            </Col>
            <Col span={8} xs={24} sm={24} md={8}>
              <Chat topic="masterclasses/2" />
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Layout>
    <Footer />
  </Layout>
);

export default MasterClasses;