import React from 'react';
import { Carousel } from 'antd';

import s from './Reviews.module.sass';

const Reviews = () => (
  <Carousel autoplay>
    <div>
      <h3 className={s.contentStyle}>1</h3>
    </div>
    <div>
      <h3 className={s.contentStyle}>2</h3>
    </div>
    <div>
      <h3 className={s.contentStyle}>3</h3>
    </div>
    <div>
      <h3 className={s.contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Reviews;
