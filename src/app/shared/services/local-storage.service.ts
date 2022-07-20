import {Injectable} from "@angular/core";
import {IQuestion, IQuestionsList} from "../interfaces/question.interface";

const QuestionsKey = 'QUESTIONS';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly questions = this.parse(localStorage.getItem(QuestionsKey));

  constructor() {}

  public setQuestionsKey(): void {
    if (this.isNewUser) {
      localStorage.setItem(QuestionsKey, '{}');
    }
  }

  public getQuestion(id: string): IQuestion {
    return this.questions[id];
  }

  public updateQuestions(questions: IQuestionsList): void {
    localStorage.setItem(QuestionsKey, this.stringify(questions));
  }

  getAllQuestions() {
    return this.questions;
  }

  private get isNewUser(): boolean {
    return !this.questions;
  }

  private parse(data: string | null): any {
    return JSON.parse(data as string);
  }

  private stringify(data: any): string {
    return JSON.stringify(data ?? {});
  }
}
