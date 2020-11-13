import React, { FC } from 'react';
import {
  Avatar, Card, Carousel, Typography,
} from 'antd';
import reviewer1 from '../../img/reviewer1.jpg';

import s from './Reviews.module.sass';

const Reviews: FC = () => (
  <div className={s.carousel}>
    <Carousel autoplay dots={false}>
      <div className={s.cardContainer}>
        <Card
          hoverable
        >
          <div className={s.cardBody}>
            <Avatar src={reviewer1} size={100} className={s.cardAvatar} />
            <Typography.Title level={5}>Jlby bp jnjdsjsda</Typography.Title>
            <Typography.Text>
              Таким образом постоянное информационно-пропагандистское
              обеспечение нашей деятельности
              обеспечивает широкому кругу (специалистов)
              участие в формировании системы обучения кадров,
              соответствует насущным потребностям. Разнообразный
              и богатый опыт начало повседневной работы
              по формированию позиции позволяет оценить значение направлений
              прогрессивного развития.
            </Typography.Text>
          </div>
        </Card>
      </div>
      <div className={s.cardContainer}>
        <Card
          hoverable
        >
          <div className={s.cardBody}>
            <Avatar src={reviewer1} size={100} className={s.cardAvatar} />
            <Typography.Title level={5}>Jlby bp jnjdsjsda</Typography.Title>
            <Typography.Text>
              Таким образом постоянное информационно-пропагандистское обеспечение
              нашей деятельности
              обеспечивает широкому кругу (специалистов)
              участие в формировании системы обучения кадров,
              соответствует насущным потребностям. Разнообразный
              и богатый опыт начало повседневной работы
              по формированию позиции позволяет оценить значение направлений
              прогрессивного развития.
            </Typography.Text>
          </div>
        </Card>
      </div>
    </Carousel>
  </div>
);

export default Reviews;
