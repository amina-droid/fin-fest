import React from 'react';
import { Comment, List, Tooltip } from 'antd';
import { Moment } from 'moment';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';

import s from './Chat.module.sass';

export type Message = {
  author: string;
  avatar?: string;
  date: Moment;
  message: string;
}
type Props = {
  comments: Message[];
}

const CommentList: React.FC<Props> = ({ comments }) => (
  <CustomScroll allowOuterScroll keepAtBottom>
    <List
      dataSource={comments}
      itemLayout="horizontal"
      className={s.commentsList}
      renderItem={({
        author, avatar, message, date,
      }) => (
        <Comment
          avatar={avatar}
          author={author}
          datetime={(
            <Tooltip title={date.format('YYYY-MM-DD HH:mm:ss')}>
              <span>{date.fromNow()}</span>
            </Tooltip>
          )}
          content={<p>{message}</p>}
        />
      )}
    />
  </CustomScroll>
);

export default CommentList;
