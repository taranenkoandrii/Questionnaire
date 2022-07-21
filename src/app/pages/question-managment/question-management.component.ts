import { Component } from '@angular/core';
import { AnswerChoice, AnswerChoiceOptions } from 'src/app/shared/constants/answer-choice.enum';
import { IQuestion } from "../../shared/interfaces/question.interface";
import { LocalStorageService } from "../../shared/services/local-storage.service";

@Component({
  selector: 'question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.css']
})
export class QuestionManagementComponent {
  public questions!:IQuestion[];
  constructor(private questionsService:LocalStorageService) { }

  ngOnInit(){    
    this.questions = this.questionsService.getAllQuestions();
  }

  deleteQuestion(index: number) {
    this.questionsService.deleteQuestion(index);
    this.questions = this.questionsService.getAllQuestions();
  }

  getQuestionType(type: AnswerChoice): string {
    return AnswerChoiceOptions.get(type) || '';
  }
}
