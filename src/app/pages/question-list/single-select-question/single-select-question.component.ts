import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';


@Component({
  selector: 'single-select-question',
  templateUrl: './single-select-question.component.html',
  styleUrls: ['./single-select-question.component.css']
})
export class SingleSelectQuestion implements OnInit {
  @Input() question!: IQuestion;
  @Output() answer = new EventEmitter<{id: number, isAnswered: boolean, answers: string[]}>();

  answers: string[] = [];

  givenAnswer = '';

  ngOnInit(): void {
    this.answers = this.question.answerOptions.map(d => d.answer);
    if (this.question.isAnswered && this.question.answer?.[0]) {
      this.givenAnswer = this.question.answer?.[0];
    }
  }

  submit(isAnswered: boolean = true): void {
    if (isAnswered) {
      this.answer.emit({id: this.question.id, isAnswered, answers: [this.givenAnswer]});
    } else {
      this.answer.emit({id: this.question.id, isAnswered, answers: []});
    }
  }
}
