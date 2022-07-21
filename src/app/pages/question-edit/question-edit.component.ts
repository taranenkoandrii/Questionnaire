import { Component, OnInit } from '@angular/core';
import { AnswerChoiceOptions } from "../../shared/constants/answer-choice.enum";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestion } from 'src/app/shared/interfaces/question.interface';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Component({
  selector: 'question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  public typesOfQuestion = AnswerChoiceOptions;
  id = this.route.snapshot.paramMap.get('id');
  question!: IQuestion;
  
  form = this.fb.group({
    types: [0, Validators.required],
    questionText: ['', Validators.required],
    options: this.fb.array([])
  })

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private service: LocalStorageService, 
    private router: Router) { }

  ngOnInit(): void {
    if (this.id !== null) {
      this.question = this.service.getQuestion(+this.id);
      this.form.controls.questionText.setValue(this.question.question);
      this.form.controls.types.setValue(this.question.choice);
      const lol = this.question.answerOptions.map((d: any) => ({optionText: d.answer, isAnswer: d.isValid}))
      
      // this.form.controls['options'].setValue(lol)
      lol.forEach(d => {
        const optionForm = this.fb.group({
          optionText:[d.optionText,Validators.required],
          isAnswer:[d.isAnswer,Validators.required]
        })
        this.options.push(optionForm)
      })      
    }
    
  }

  get options(){
    return this.form.controls['options'] as FormArray;
  }

  addOption(): void {
    const optionForm = this.fb.group({
      optionText:['',Validators.required],
      isAnswer:[false,Validators.required]
    })
    
    this.options.push(optionForm)
  }

  deleteOption(index: number): void {
    this.options.removeAt(index);
  }

  submit(): void {
    const {questionText, types, options} = this.form.value;    
    
    if (this.id !== null && questionText && (types !== null && types !== undefined) && options) {
      const question: IQuestion = {
        ...this.question,
        isAnswered: false,
        question: <string>questionText,
        editedAt: (new Date()).toUTCString(),
        answerOptions: options?.map((d: any) => { return {answer: d.optionText, isValid: d.isAnswer} })
      }
      this.service.updateQuestion(+this.id, question);
      this.router.navigate(['../'])
    } else {
      return;
    }
  }

}
