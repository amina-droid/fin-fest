/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLastChatMessages
// ====================================================

export interface GetLastChatMessages_getLastTwentyMessages_author {
  __typename: "UserName";
  givenName: string;
  familyName: string;
}

export interface GetLastChatMessages_getLastTwentyMessages_avatar {
  __typename: "UserPhoto";
  url: string;
}

export interface GetLastChatMessages_getLastTwentyMessages {
  __typename: "Message";
  author: GetLastChatMessages_getLastTwentyMessages_author;
  avatar: GetLastChatMessages_getLastTwentyMessages_avatar | null;
  message: string;
  createdAt: any;
}

export interface GetLastChatMessages {
  getLastTwentyMessages: GetLastChatMessages_getLastTwentyMessages[];
}

export interface GetLastChatMessagesVariables {
  topic: string;
}
