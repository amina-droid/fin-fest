import React from 'react';
import {
  Typography, Layout, Steps, Timeline, Row, Col, Carousel, Card, Image, Avatar,
} from 'antd';
import ReactPlayer from 'react-player';
import Header from '../../components/Header/Header';
import bugaev from '../../img/bugaev.jpg';
import art from '../../img/art.jpg';
import kostikov from '../../img/kostikov.jpg';

import s from './Lector.module.sass';
import reviewer1 from '../../img/reviewer1.jpg';
import { Chat } from '../../components/Chat';

const { Title } = Typography;

const BLOCKS: { [key: string]: string } = {
  program: 'Программа',
  translation: 'Видео трансляция',
};

const Lector = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Финансовый лекторий</Title>
    <Layout id="program" className={s.section}>
      <Title level={2}>Программа</Title>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={16} xs={20} sm={20} md={16}>
          <div className={s.carousel}>
            <Carousel dots={{ className: s.carouselDots }} autoplay dotPosition="left">
              <div className={s.cardContainer}>
                <Card className={s.card}>
                  <div className={s.cardBody}>
                    <Avatar src={art} size={200} className={s.cardAvatar} />
                    <Typography.Title level={5}>Ян Арт</Typography.Title>
                    <Typography.Text>
                      Главный редактор портала Finversia.ru, эксперт комитета
                      Госдумы по финансовому рынку.
                      Член-корреспондент Международной академии менеджмента (IAM).
                      Член комиссии РСПП по банкам и банковской деятельности,
                      совета Национальной ассоциации профессиональных коллекторских агентств (НАПКА)
                    </Typography.Text>
                  </div>
                </Card>
              </div>
              <div className={s.cardContainer}>
                <Card className={s.card}>
                  <div className={s.cardBody}>
                    <Avatar src={bugaev} size={200} className={s.cardAvatar} />
                    <Typography.Title level={5}>Максим Бугаев</Typography.Title>
                    <Typography.Text>
                      Главный бухгалтер первой рабочей группы ООО `&#34;ЭосФайн`&#34;.
                      Высшее образование ТюмГУ по специальности `&#34;Финансы и кредит`&#34;,
                      стаж работы в финансовых подразделениях 15 лет, из них в
                      должности главного бухгалтера 8 лет.
                    </Typography.Text>
                  </div>
                </Card>
              </div>
              <div className={s.cardContainer}>
                <Card className={s.card}>
                  <div className={s.cardBody}>
                    <Avatar src={kostikov} size={200} className={s.cardAvatar} />
                    <Typography.Title level={5}>Игорь Костиков</Typography.Title>
                    <Typography.Text>
                      Российский финансист, профессор, доктор экономических наук,
                      один из основателей российского фондового рынка и один из
                      основоположников теории эффективного рынка капитала и
                      развития корпоративного управления в России.
                    </Typography.Text>
                  </div>
                </Card>
              </div>
            </Carousel>
          </div>
        </Col>
        <Col span={8} xs={20} sm={20} md={8}>
          <Timeline mode="left">
            <Timeline.Item label="2020.09.01">
              <p>Личные инвестиции: с чего начать?</p>
              <p>Ян Арт</p>
            </Timeline.Item>
            <Timeline.Item label="2020.09.01">
              <p>Собственный бизнес: первые шаги</p>
              <p>Максим Бугаев</p>
            </Timeline.Item>
            <Timeline.Item label="2020.09.01">
              <p>Деятельность ОООП «Союз защиты прав потребителей финансовых
                услуг» в сфере защиты финансовых интересов граждан.
              </p>
              <p>Игорь Костиков</p>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>

    </Layout>
    <Layout id="translation" className={s.section}>
      <Title level={2}>Видео трансляция</Title>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={16} xs={20} sm={20} md={16}>
          <div className={s.carousel}>
            <Card className={s.card}>
              <div className={s.cardBody}>
                <ReactPlayer
                  className={s['stream-video']}
                  controls
                  url="https://www.youtube.com/watch?v=Dzaxv97nhVQ&feature=youtu.be"
                />
              </div>
            </Card>
            <Chat topic="lector" />
          </div>
        </Col>
        <Col span={8} xs={20} sm={20} md={8}>
          <Timeline mode="left">
            <Timeline.Item label="2020.09.01">
              <p>Личные инвестиции: с чего начать?</p>
              <p>Ян Арт</p>
            </Timeline.Item>
            <Timeline.Item label="2020.09.01">
              <p>Собственный бизнес: первые шаги</p>
              <p>Максим Бугаев</p>
            </Timeline.Item>
            <Timeline.Item label="2020.09.01">
              <p>Деятельность ОООП «Союз защиты прав потребителей финансовых
                услуг» в сфере защиты финансовых интересов граждан.
              </p>
              <p>Игорь Костиков</p>
            </Timeline.Item>
          </Timeline>
        </Col>
      </Row>

    </Layout>
  </Layout>
);

export default Lector;
