import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AnswerChoice } from 'src/app/shared/constants/answer-choice.enum';


@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  constructor(private service: LocalStorageService) {}

  answers: string[] = ['Single choice', 'Multiply choice', 'Open'];
  questions = this.service.getAllQuestions();
  unanswered: IQuestion[] = [];
  answered: IQuestion[] = [];

  ngOnInit(): void {
    this.updateList();
  }

  handleAnswer(event: {id: number, isAnswered: boolean, answers: string[]}): void {
    const question = this.questions.find(d => d.id === event.id);
    if (question) {
      this.service.updateQuestion(event.id, {...question, isAnswered: event.isAnswered, answer: event.answers, answeredAt: (new Date()).toISOString()})
    }
    this.updateList();
  }

  updateList(): void {
    this.questions = this.service.getAllQuestions();
    
    this.answered = this.questions.filter(d => d.isAnswered).slice().sort((a: IQuestion, b: IQuestion) => +(a.answeredAt ?? 0) - +(b.answeredAt ?? 0));
    this.unanswered = this.questions.filter(d => !d.isAnswered);
  }
}
