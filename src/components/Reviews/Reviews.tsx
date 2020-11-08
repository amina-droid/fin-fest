import React, { FC } from 'react';
import { Card, Carousel } from 'antd';
import reviewer1 from '../../img/reviewer1.jpg';

import s from './Reviews.module.sass';

const { Meta } = Card;

type ReviewsProps = {
    className: string;
}

const Reviews: FC<ReviewsProps> = ({ className }) => (
  <div className={className}>
    <Carousel autoplay dots={false}>
      <div className={s.cardContainer}>
        <Card hoverable cover={<img alt="reviewer" src={reviewer1} />} className={s.contentStyle}>
          <Meta description="я говноед" />
        </Card>
      </div>
      <div className={s.cardContainer}>
        <Card hoverable cover={<img alt="reviewer" src={reviewer1} />} className={s.contentStyle}>
          <Meta description="я говноед" />
        </Card>
      </div>
      <div className={s.cardContainer}>
        <Card hoverable cover={<img alt="reviewer" src={reviewer1} />} className={s.contentStyle}>
          <Meta description="я говноед" />
        </Card>
      </div>
      <div className={s.cardContainer}>
        <Card hoverable cover={<img alt="reviewer" src={reviewer1} />} className={s.contentStyle}>
          <Meta description="я говноед" />
        </Card>
      </div>
    </Carousel>
  </div>
);

export default Reviews;
