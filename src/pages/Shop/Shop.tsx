import {
  Card, Col, Layout, Row, Typography, Grid, Carousel, Image,
} from 'antd';
import React, { FC, useContext } from 'react';
import { useQuery } from '@apollo/client';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import { GET_PRODUCTS, GetProducts } from '../../apollo';
import { SCORES_WORDS, EXEMPLAR_WORDS } from '../../dictionaries';
import { AuthContext } from '../../context/auth';

import s from './Shop.module.sass';

const { Title } = Typography;
const { useBreakpoint } = Grid;
const BLOCKS:{ [key: string]: string } = {
  products: 'Призы',
};
const Shop: FC = () => {
  const {
    sm, lg, md, xl,
  } = useBreakpoint();
  const { userState } = useContext(AuthContext);
  const { data, loading } = useQuery<GetProducts>(GET_PRODUCTS);
  const productShow = xl ? 6 : lg ? 4 : md ? 3 : sm ? 2 : 1;
  const productSpan = 24 / productShow;

  return (
    <Layout>
      <Header navigation={BLOCKS} />
      <Title className={s.title}>Магазин призов</Title>
      <Layout id="products" className={s.section}>
        <Title level={2}>Наши призы</Title>
        <Row gutter={[20, 20]}>
          {data?.products.length && data?.products.map(product => (
            <Col span={productSpan} key={product._id}>
              <Card
                hoverable={(userState?.score || 0) >= product.price}
                bordered={false}
                cover={(
                  <Carousel autoplay>
                    {product.images.map(img => (
                      <Image src={img} key={img} />
                    ))}
                  </Carousel>
                )}
              >
                <p><b>{product.description}</b></p>
                <p>{product.organization}</p>
                <br />
                <p>
                  <i>Цена: {product.price} {SCORES_WORDS[product.price]}</i>
                  {'\n'}<i>Осталось: {product.count} {EXEMPLAR_WORDS[product.count]}</i>
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Layout>
      <Footer />

    </Layout>
  );
};

export default Shop;
