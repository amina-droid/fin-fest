import React from 'react';
import {
  Typography, Layout, Timeline, Row, Col,
  Tabs, Card,
} from 'antd';
import ReactPlayer from 'react-player';
import { Test } from '../../components/Test';
import Header from '../../components/Header/Header';

import {
  firstArea, firstLinks, secondLinks, thirdLinks,
} from './dictionaries';
import { Footer } from '../../components/Footer';
import { AdditionalMaterials } from '../../components/AdditionalMaterials';

import s from './Cinema.module.sass';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const BLOCKS: { [key: string]: string } = {
  culture: 'Культура денег',
  extra: 'Полезные материалы',
};

const Cinema = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Финансовый кинотеатр</Title>
    <Layout className={s.section}>
      <Paragraph>Дорогой гость! Приветствуем Вас на площадке
        Финансового фестиваля для всей семьи «Финансовый
        кинотеатр»
      </Paragraph>
      <Paragraph>
        Мы подготовили для Вас уникальную подборку обучающих и
        познавательных фильмов, разработанных лучшими экспертами
        в сфере финансов. Переходите по ссылкам и
        получайте самую свежую и актуальную информацию.
      </Paragraph>
      <Paragraph>
        А с 10.00 для Вас начинает работу уникальный онлайн кинотеатр,
        который проходит при поддержке проекта «Ноль плюс».
        Вы сможете посмотреть уникальный цикл передач «Культура денег»,
        который разработан и подготовлен в Тюмени!
      </Paragraph>
      <Paragraph>
        Приятного просмотра!
      </Paragraph>
    </Layout>
    <Layout id="culture" className={s.section}>
      <Title level={2}>Культура денег</Title>
      <Row gutter={[16, 0]} className={s.aboutContent}>
        <Col span={18} xs={24} sm={24} md={18}>
          <Tabs>
            {firstArea.map(area => (
              <TabPane tab={area.name} key={area.name}>
                <Card>
                  <div className={s.cardBody}>
                    <ReactPlayer
                      width="100%"
                      height="50vh"
                      controls
                      url={area.url.trim()}
                    />
                  </div>
                  <Test page="cinema" />
                </Card>
              </TabPane>
            ))}
          </Tabs>
        </Col>
        <Col span={6} xs={24} sm={24} md={6}>
          <Timeline mode="right">
            {firstArea.map(area => (
              <Timeline.Item key={area.text}>
                {area.text}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </Layout>
    <Layout className={s.section} id="extra">
      <Title level={2}>Полезные материалы</Title>
      <Paragraph>
        <AdditionalMaterials links={firstLinks} />
      </Paragraph>
      <Paragraph>Дружи с финансами</Paragraph>
      <Paragraph>Короткометражный фильм о семье Невских,
        где муж Борис взял кредит, указав в поручителях свою супругу
        Викторию, и пропал. Оставшись с двумя детьми на руках, Виктория
        ищет выход из сложной ситуации: находит работу, договаривается
        с банком и противостоит угрозам коллекторов. В финале этого
        мини-фильма Виктория смогла взять свою жизнь под контроль и
        найти выход из финансового тупика. А зрители узнают о принципах
        ответственного поведения потребителей финансовых услуг и защите их
        прав. Главный урок: поручитель несет ответственность за
        возврат кредита наравне с заемщиком.
      </Paragraph>
      <Paragraph>
        <AdditionalMaterials links={secondLinks} />
      </Paragraph>
      <Paragraph>
        <AdditionalMaterials links={thirdLinks} />
      </Paragraph>
    </Layout>
    <Footer />
  </Layout>
);

export default Cinema;
