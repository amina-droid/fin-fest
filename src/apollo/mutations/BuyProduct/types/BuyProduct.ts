/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: BuyProduct
// ====================================================

export interface BuyProduct_purchase {
  __typename: "PurchaseResult";
  code: string | null;
  newScore: number;
}

export interface BuyProduct {
  purchase: BuyProduct_purchase;
}

export interface BuyProductVariables {
  productId: any;
}
