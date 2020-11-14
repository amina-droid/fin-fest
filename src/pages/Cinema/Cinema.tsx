import React from 'react';
import {
  Typography, Layout, Timeline, Row, Col, Carousel, Card, Avatar,
  Tabs,
} from 'antd';
import ReactPlayer from 'react-player';
import Header from '../../components/Header/Header';

import s from './Cinema.module.sass';
import { firstArea, lectors } from './dictionaries';
import { Footer } from '../../components/Footer';

const { TabPane } = Tabs;
const { Title } = Typography;

const Cinema = () => (
  <Layout>
    <Header />
    <Title className={s.title}>Финансовый кинотеатр</Title>
    <Layout id="program" className={s.section}>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={12} xs={24} sm={24} md={12}>
          <Tabs>
            {firstArea.map(area => (
              <TabPane tab={area.name} key={area.name}>
                <ReactPlayer
                  height="50vh"
                  controls
                  url={area.url.trim()}
                />
              </TabPane>
            ))}
          </Tabs>
        </Col>
        <Col span={12} xs={24} sm={24} md={12}>
          <Timeline mode="alternate">
            {firstArea.map(area => (
              <Timeline.Item label={area.text} key={area.text} />
            ))}
          </Timeline>
        </Col>
      </Row>
    </Layout>
    <Footer />
  </Layout>
);

export default Cinema;
