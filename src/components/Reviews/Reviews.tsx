import React, { FC } from 'react';
import {
  Avatar, Card, Carousel, Typography,
} from 'antd';
import { useQuery } from '@apollo/client';
import reviewer1 from '../../img/reviewer1.jpg';

import s from './Reviews.module.sass';
import { GET_REVIEWS, GetReviews } from '../../apollo';

const Reviews: FC = () => {
  const { data, loading } = useQuery<GetReviews>(GET_REVIEWS);
  if (!data || loading) {
    return null;
  }
  return (
    <div className={s.carousel}>
      <Carousel autoplay dots={false}>

        {data.reviews.map(review => (
          <div className={s.cardContainer} key={review._id}>
            <Card
              hoverable
            >
              <div className={s.cardBody}>
                <Avatar src={review.avatar} size={100} className={s.cardAvatar} />
                <Typography.Title level={5}>{review.author}</Typography.Title>
                <Typography.Text>{review.subtitle}</Typography.Text>
                <Typography.Text>{review.message}</Typography.Text>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
