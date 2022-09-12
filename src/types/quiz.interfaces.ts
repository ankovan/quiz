export enum AnswerClasses {
  ANSWER = "answer",
  WRONG = "wrong",
  RIGHT = "right",
}
export interface Answer {
  text: string;
  class: AnswerClasses;
}
export interface Question {
  question?: string;
  image?: string;
  answers?: Array<Answer>;
  correctAnswer?: number;
}
export interface Quiz {
  id?: string;
  image?: string;
  name?: string;
  description?: string;
  questions: Array<Question>;
}
