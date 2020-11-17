import React from 'react';
import {
  Typography, Layout, Timeline, Row, Col, Carousel, Card, Avatar, Tabs,
} from 'antd';
import Header from '../../components/Header/Header';

import s from './MasterClasses.module.sass';
import { Chat } from '../../components/Chat';
import {
  firstArea, lectors, secondArea, links,
} from './dictionaries';
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

const MasterClasses = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Мастер классы и тренинги</Title>
    <Layout className={s.section}>
      <Paragraph>Приветствуем Вас на площадке «Мастер-классы и тренинги»!</Paragraph>
      <Paragraph>Разумное обращение с деньгами это, прежде всего,
        практика! На нашей площадке лучшие эксперты и
        профессионалы расскажут Вам о разных аспектах
        финансовой жизни, научат эффективным приемам и лайфхакам в
        финансовой сфере, подробно и на примерах расскажут о том,
        как выходить из сложных ситуаций. Никакой теории – только практика!
      </Paragraph>
      <Paragraph>Если Вы хотите не на словах, а на деле перейти с
        деньгами «на ты», присоединяйтесь к нашим онлайн трансляциям!
        Интересующие вопросы Вы можете задать в чате, а еще на площадке
        Вас ждет интересная подборка практических советов от
        опытных финансистов – переходите по ссылкам,
        знакомьтесь с материалами, анализируйте и делайте выводы!
      </Paragraph>
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
                  <VideoPlayer place="masterclasses/1" />
                </div>
                <Test page="masterclasses" />
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
                  <VideoPlayer place="masterclasses/2" />
                </div>
                <Test page="masterclasses" />
              </Card>
            </Col>
            <Col span={8} xs={24} sm={24} md={8}>
              <Chat topic="masterclasses/2" />
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Layout>
    <Layout className={s.section} id="extra">
      <Title level={2}>Полезные материалы</Title>
      <Paragraph>Команда экспертов площадки «Мастер-классы и тренинги»
        благодарит за интерес к теме повышения финансовой
        и потребительской грамотности.
        Надеемся, что наш опыт и знания будут Вам полезны
      </Paragraph>
      <Paragraph>
        <AdditionalMaterials links={links} />
      </Paragraph>
    </Layout>
    <Footer />
  </Layout>
);

export default MasterClasses;
