import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';


@Component({
  selector: 'open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css']
})
export class OpenQuestion implements OnInit {
  @Input() question!: IQuestion;
  @Output() answer = new EventEmitter<{id: number, isAnswered: boolean, answers: string[]}>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  answers: string[] = [];

  givenAnswer = '';

  ngOnInit(): void {
    this.answers = this.question.answerOptions.map(d => d.answer);
    if (!this.question.isAnswered) {
      this.form = this.fb.group({
        answer: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(255)]]
      })
    }
  }

  submit(isAnswered: boolean = true): void {
    if (isAnswered) {
      this.answer.emit({id: this.question.id, isAnswered, answers: [this.form.controls['answer'].value]});
    } else {
      this.answer.emit({id: this.question.id, isAnswered, answers: []})
    }
  }
}
