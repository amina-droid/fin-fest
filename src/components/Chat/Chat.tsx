import React, { useContext, useState } from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import moment from 'moment';
import {
  Avatar, Comment,
} from 'antd';

import { AuthContext } from '../../context/auth';
import {
  SUBSCRIBE_TO_CHAT, SubscribeToChat, SubscribeToChatVariables,
  SEND_CHAT_MESSAGE, SendChatMessage, SendChatMessageVariables,
} from '../../apollo';
import CommentList, { Message } from './CommentList';
import Editor from './Editor';

type Props = {
  topic: string;
}
const Chat: React.FC<Props> = ({ topic }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  useSubscription<SubscribeToChat, SubscribeToChatVariables>(
    SUBSCRIBE_TO_CHAT,
    {
      onSubscriptionData: ({ subscriptionData }) => {
        if (!subscriptionData?.data?.subscribeToChat) return;
        const {
          author,
          avatar,
          date,
          message,
        } = subscriptionData!.data!.subscribeToChat;
        const name = `${author.givenName} ${author.familyName}`;
        const img = avatar?.url;
        const datetime = moment(date);
        setChatMessages(prev => ([
          ...prev,
          {
            avatar: img,
            date: datetime,
            author: name,
            message,
          },
        ]));
      },
      variables: {
        topic,
      },
    },
  );
  const [
    sendMessage,
    { loading },
  ] = useMutation<SendChatMessage, SendChatMessageVariables>(
    SEND_CHAT_MESSAGE,
  );

  const handleSubmit = (message: string) => {
    if (!message) return;
    sendMessage({
      variables: {
        message,
        topic,
      },
    });
  };
  if (!user) return null;
  const avatar = user?.photos.length ? user?.photos[0].url : undefined;
  const name = user.name.givenName;
  return (
    <>
      <CommentList comments={chatMessages} />
      <Comment
        avatar={(
          <Avatar
            src={avatar}
            alt={name}
          />
        )}
        content={(
          <Editor
            onSubmit={handleSubmit}
            submitting={loading}
          />
        )}
      />
    </>
  );
};

export default Chat;
