import React from 'react';
import { Comment, List, Tooltip } from 'antd';
import { Moment } from 'moment';

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
  <List
    dataSource={comments}
    header="Чат"
    itemLayout="horizontal"
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
);

export default CommentList;
