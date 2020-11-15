/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetReviews
// ====================================================

export interface GetReviews_reviews {
  __typename: "Review";
  _id: any;
  author: string;
  avatar: string;
  message: string;
  subtitle: string;
}

export interface GetReviews {
  reviews: GetReviews_reviews[];
}
