import {
  Card, Col, Layout, Row, Typography, Grid, Carousel, Image, Skeleton, Modal, message,
} from 'antd';
import React, { FC, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import {
  BUY_PRODUCT, BuyProduct, BuyProductVariables, GET_PRODUCTS, GetProducts,
} from '../../apollo';
import { SCORES_WORDS, EXEMPLAR_WORDS } from '../../dictionaries';
import { AuthContext } from '../../context/auth';

import s from './Shop.module.sass';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const BLOCKS:{ [key: string]: string } = {
  products: 'Призы',
};
type Product = GetProducts['products'][0];
type OpenModalProductProps = {
  product: Product;
  currentScores: number;
}
const openProductModal = (
  { product, currentScores }: OpenModalProductProps,
  onSuccess: (productId: string) => void,
) => {
  const differenceScore = currentScores - product.price;

  if (differenceScore < 0) {
    Modal.error({
      content: (
        <div>
          <p>У вас недостаточно баллов для {'"'}{product.description}{'"'}</p>
          <p>Пройдите тесты на доступных площадках фестиваля
            чтобы получить больше баллов за правильные ответы!
          </p>
        </div>
      ),
    });
    return;
  }

  Modal.confirm({
    okText: 'Получить подарок',
    onOk: () => onSuccess(product._id),
    cancelText: 'Закрыть',
    content: (
      <div>
        <p>Вы действительно готовы выбрать подарок {'"'}{product.description}{'"'}?</p>
        <p>У вас останется {differenceScore} {SCORES_WORDS[differenceScore]}</p>
      </div>
    ),
  });
};

const Shop: FC = () => {
  const {
    sm, lg, md, xl,
  } = useBreakpoint();
  const { userState, updateCodes, updateScore } = useContext(AuthContext);
  const { data, refetch } = useQuery<GetProducts>(GET_PRODUCTS);
  const [buyProduct] = useMutation<BuyProduct, BuyProductVariables>(
    BUY_PRODUCT,
    {
      errorPolicy: 'all',
    },
  );
  const productShow = xl ? 4 : lg ? 4 : md ? 3 : sm ? 2 : 1;
  const productSpan = 24 / productShow;

  const onBuyProduct = async (productId: string) => {
    const { data: res, errors } = await buyProduct({
      variables: {
        productId,
      },
    });

    if (errors) {
      Modal.error({
        content: (
          <>
            {errors?.map(value => (
              <p key={value.message}>{value.message}</p>
            ))}
          </>
        ),
      });
      if (refetch) refetch();
    }

    if (res) {
      const { purchase: { code, newScore } } = res;

      if (!code) {
        Modal.error({
          content: (
            <div>
              <p>У вас недостаточно баллов для этого приза</p>
              <p>Пройдите тесты на доступных площадках фестиваля
                чтобы получить больше баллов за правильные ответы!
              </p>
            </div>
          ),
        });
        updateScore(newScore);
        return;
      }

      updateScore(newScore);
      updateCodes(code);
      Modal.success({
        content: 'Вам доступен приз! Его код записан в вашем профиле, раздел "Мои призы"',
      });
      if (refetch) refetch();
    }
  };

  return (
    <Layout>
      <Header navigation={BLOCKS} />
      <Title className={s.title}>Магазин призов</Title>
      <Layout className={s.section}>
        <Paragraph>Дорогие друзья! Приветствуем Вас в магазине
          призов Финансового фестиваля для всей семьи!
        </Paragraph>
        <Paragraph>На наших площадках в онлайн и офлайн
          форме Вы можете ответить на вопросы теста по
          финансовой грамотности. Каждый правильный ответ
          равен 1 баллу. Обменяйте баллы на призы и подарки
          от партнеров мероприятия в магазине!
          Сделайте свое участие не только приятным,
          но и полезным! Призы ждут Вас!
        </Paragraph>
      </Layout>
      <Layout id="products" className={s.section}>
        <Title level={2}>Наши призы</Title>
        <Row gutter={[20, 20]}>
          {data?.products.length
            ? data?.products.map(product => (
              <Col span={productSpan} key={product._id}>
                <Card
                  hoverable
                  onClick={() => openProductModal({
                    product,
                    currentScores: userState?.score!,
                  }, onBuyProduct)}
                  className={s.productCard}
                >
                  <Carousel autoplay>
                    {product.images.map(img => (
                      <div className={s.carouselContainer} key={img}>
                        <img src={img} alt="" className={s.carousel} />
                      </div>
                    ))}
                  </Carousel>
                  <div className={s.productCardBody}>
                    <div className={s.productCardDescription}>
                      <p><b>{product.description}</b></p>
                      <p>{product.organization}</p>
                      <br />
                      <p>
                        <i>Цена: {product.price} {SCORES_WORDS[product.price]}</i>
                        {'\n'}<i>Осталось: {product.count} {EXEMPLAR_WORDS[product.count]}</i>
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            )) : ([...new Array(8)].map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col span={productSpan} key={i}>
                <Card className={s.productCard}>
                  <Skeleton active />
                </Card>
              </Col>
            )))}
        </Row>
      </Layout>
      <Footer />

    </Layout>
  );
};

export default Shop;
