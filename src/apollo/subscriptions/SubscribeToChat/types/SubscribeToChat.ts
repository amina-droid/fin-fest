/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubscribeToChat
// ====================================================

export interface SubscribeToChat_subscribeToChat_author {
  __typename: "UserName";
  givenName: string;
  familyName: string;
}

export interface SubscribeToChat_subscribeToChat_avatar {
  __typename: "UserPhoto";
  url: string;
}

export interface SubscribeToChat_subscribeToChat {
  __typename: "Message";
  author: SubscribeToChat_subscribeToChat_author;
  avatar: SubscribeToChat_subscribeToChat_avatar | null;
  message: string;
  date: any;
}

export interface SubscribeToChat {
  subscribeToChat: SubscribeToChat_subscribeToChat;
}

export interface SubscribeToChatVariables {
  topic: string;
}
