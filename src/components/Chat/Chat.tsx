import React, { useContext, useState } from 'react';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import moment from 'moment';
import {
  Avatar, Comment,
} from 'antd';

import { AuthContext } from '../../context/auth';
import {
  SUBSCRIBE_TO_CHAT, SubscribeToChat, SubscribeToChatVariables,
  SEND_CHAT_MESSAGE, SendChatMessage, SendChatMessageVariables,
  GET_LAST_CHAT_MESSAGES, GetLastChatMessages, GetLastChatMessagesVariables,
} from '../../apollo';
import CommentList, { Message } from './CommentList';
import Editor from './Editor';

type Props = {
  topic: string;
}

type MessageFromSocket = SubscribeToChat['subscribeToChat'];
function getChatMessageFromSocket(socketMessage: MessageFromSocket): Message {
  const {
    author,
    avatar,
    createdAt,
    message,
  } = socketMessage;
  const name = `${author.givenName} ${author.familyName}`;
  const img = avatar?.url;
  const datetime = moment(createdAt);

  return ({
    avatar: img,
    date: datetime,
    author: name,
    message,
  });
}
const Chat: React.FC<Props> = ({ topic }) => {
  const { user } = useContext(AuthContext);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  useSubscription<SubscribeToChat, SubscribeToChatVariables>(
    SUBSCRIBE_TO_CHAT,
    {
      onSubscriptionData: ({ subscriptionData }) => {
        if (!subscriptionData?.data?.subscribeToChat) return;
        setChatMessages(prev => ([
          ...prev,
          getChatMessageFromSocket(subscriptionData.data!.subscribeToChat),
        ]));
      },
      variables: {
        topic,
      },
    },
  );
  const { loading: previousLoading } = useQuery<GetLastChatMessages, GetLastChatMessagesVariables>(
    GET_LAST_CHAT_MESSAGES,
    {
      variables: { topic },
      fetchPolicy: 'no-cache',
      onCompleted: ({ getLastTwentyMessages: previousMessages }) => {
        setChatMessages(prevState => ([
          ...previousMessages.map(getChatMessageFromSocket).reverse(),
          ...prevState,
        ]));
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
      <CommentList comments={chatMessages} loading={previousLoading} />
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
