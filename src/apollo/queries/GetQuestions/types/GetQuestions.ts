/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetQuestions
// ====================================================

export interface GetQuestions_questions_values {
  __typename: "Answer";
  value: number;
  label: string;
}

export interface GetQuestions_questions {
  __typename: "Question";
  id: number;
  question: string;
  values: GetQuestions_questions_values[];
}

export interface GetQuestions {
  questions: GetQuestions_questions[];
}
