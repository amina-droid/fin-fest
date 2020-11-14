import React, { FC, useEffect, useState } from 'react';
import {
  Avatar, Card, Carousel, Typography, Grid,
} from 'antd';
import { useQuery } from '@apollo/client';
import { GET_REVIEWS, GetReviews } from '../../apollo';

import s from './Reviews.module.sass';

const { useBreakpoint } = Grid;

const Reviews: FC = () => {
  const { data, loading } = useQuery<GetReviews>(GET_REVIEWS);
  const {
    md, lg,
  } = useBreakpoint();
  if (!data || loading) {
    return null;
  }

  const slidesToShow = lg ? 3 : md ? 2 : 1;

  return (
    <div className={s.carousel}>
      <Carousel
        autoplay
        dots={false}
        slidesToShow={slidesToShow}
      >
        {data.reviews.map(review => (
          <div className={s.cardContainer} key={review._id}>
            <Card
              hoverable
            >
              <div className={s.cardBody}>
                <Avatar src={review.avatar} size={100} className={s.cardAvatar} />
                <Typography.Title level={5}>{review.author}</Typography.Title>
                <Typography.Text>
                  <Typography.Paragraph>
                    {review.subtitle}
                  </Typography.Paragraph>
                </Typography.Text>
                <Typography.Text>
                  <Typography.Paragraph>
                    {review.message}
                  </Typography.Paragraph>
                </Typography.Text>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
