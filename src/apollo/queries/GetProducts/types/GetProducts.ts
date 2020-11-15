/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products {
  __typename: "Product";
  _id: any;
  images: string[];
  organization: string;
  count: number;
  price: number;
  description: string;
}

export interface GetProducts {
  products: GetProducts_products[];
}
