import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AnswerChoiceOptions } from "../../shared/constants/answer-choice.enum";

@Component({
  selector: 'question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent {
  public typesOfQuestion = AnswerChoiceOptions
  form = this.fb.group({
    types: [null, Validators.required],
    questionText: ['', Validators.required],
    options: this.fb.array([])
  })

  get options(){
    return this.form.controls['options'] as FormArray;
  }

  constructor(
    private fb: FormBuilder, 
    private service: LocalStorageService,
    private router: Router) { }

  addOption(): void {
    const optionForm = this.fb.group({
      text:['',Validators.required],
      isAnswer:[false,Validators.required]
    })
    
    this.options.push(optionForm)
  }

  deleteOption(index: number): void {
    this.options.removeAt(index);
  }

  submit() {
    const {questionText, types, options} = this.form.value;
    
    if (questionText && (types !== null && types !== undefined) && options) {
      const question: IQuestion = {
        id: this.service.getAllQuestions().length,
        isAnswered: false,
        question: <string>questionText,
        choice: types,
        createdAt: (new Date()).toUTCString(),
        answerOptions: options?.map((d: any) => { return {answer: d.text, isValid: d.isAnswer} })
      }
      this.service.addQuestions(question);
      this.router.navigate(['../'])
    } else {
      return;
    }
  }
}
