import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';


@Component({
  selector: 'multiple-select-question',
  templateUrl: './multiple-select-question.component.html',
  styleUrls: ['./multiple-select-question.component.css']
})
export class MultipleSelectQuestion implements OnInit {
  @Input() question!: IQuestion;
  @Output() answer = new EventEmitter<{id: number, isAnswered: boolean, answers: string[]}>();

  form = this.fb.group({
    options: this.fb.array([])
  })
  constructor(private fb: FormBuilder) {}
  answers: string[] = [];

  ngOnInit(): void {
    this.answers = this.question.answerOptions.map(d => d.answer);

    const formOptions = this.question.answerOptions.map((d: any) => ({optionText: d.answer, isAnswer: this.question.answer?.includes(d.answer)}))

    formOptions.forEach(d => {
      const optionForm = this.fb.group({
        answer:[d.optionText,Validators.required],
        isAnswer:[d.isAnswer,Validators.required]
      })
      this.options.push(optionForm)
    })
  }

  get options(){
    return this.form.controls['options'] as FormArray;
  }

  submit(isAnswered: boolean = true): void {    
    if (isAnswered) {
      const answers = this.form.controls['options'].value.filter((d: any) => d.isAnswer).map((d: any) => d.answer);      
      this.answer.emit({id: this.question.id, isAnswered, answers});
    } else {
      this.answer.emit({id: this.question.id, isAnswered, answers: []});
    }
  }
}
