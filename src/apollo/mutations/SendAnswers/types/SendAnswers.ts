/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendAnswers
// ====================================================

export interface SendAnswers_answers {
  __typename: "Result";
  correctAnswers: number;
  newUserScore: number;
}

export interface SendAnswers {
  answers: SendAnswers_answers;
}

export interface SendAnswersVariables {
  answers: any;
}
