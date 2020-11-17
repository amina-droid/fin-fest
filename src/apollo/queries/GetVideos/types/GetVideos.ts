/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVideos
// ====================================================

export interface GetVideos_videos {
  __typename: "Video";
  url: string;
  _id: any;
  name: string;
}

export interface GetVideos {
  videos: GetVideos_videos[];
}
