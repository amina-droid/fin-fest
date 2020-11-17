/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubscribeToNewVideo
// ====================================================

export interface SubscribeToNewVideo_subscribeToVideoChange {
  __typename: "Video";
  url: string;
}

export interface SubscribeToNewVideo {
  subscribeToVideoChange: SubscribeToNewVideo_subscribeToVideoChange;
}

export interface SubscribeToNewVideoVariables {
  placeName: string;
}
