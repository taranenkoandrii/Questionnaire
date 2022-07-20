import {AnswerChoice} from "../constants/answer-choice.enum";

export interface IQuestionsList {
  [id: string]: IQuestion;
}

export interface IQuestion {
  question: string;
  choice: AnswerChoice;
  createdAt: string;
  isAnswered: boolean;
  answerOptions: IAnswerOption[]
}

export interface IAnswerOption {
  answer: string;
  isValid: boolean;
}
