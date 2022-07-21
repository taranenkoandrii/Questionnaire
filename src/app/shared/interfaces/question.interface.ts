import {AnswerChoice} from "../constants/answer-choice.enum";

export interface IQuestionsList {
  [id: string]: IQuestion;
}

export interface IQuestion {
  id: number;
  question: string;
  choice: AnswerChoice;
  createdAt: string;
  editedAt?: string;
  answeredAt?: string;
  isAnswered: boolean;
  answerOptions: IAnswerOption[];
  answer?: string[];
}

export interface IAnswerOption {
  answer: string;
  isValid: boolean;
}
