import { Layout, Typography } from 'antd';
import React from 'react';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header/Header';
import { Partners } from '../../components/Partners';

import s from './Fair.module.sass';

const { Title, Paragraph } = Typography;

const BLOCKS: { [key: string]: string } = {
  partners: 'Партнеры',
};

const Fair: React.FC = () => (
  <Layout>
    <Header navigation={BLOCKS} />
    <Title className={s.title}>Выставка</Title>
    <Layout className={s.section}>
      <Paragraph>Мы благодарны нашим партнерам, ведь именно с их
        поддержкой получилось осуществить этот фестиваль!
      </Paragraph>
    </Layout>
    <Layout id="partners" className={s.section}>
      <Title level={2}>Партнеры</Title>
      <Partners />
    </Layout>
    <Footer />
  </Layout>
);

export default Fair;
