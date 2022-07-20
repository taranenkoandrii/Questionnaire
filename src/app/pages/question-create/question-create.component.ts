import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AnswerChoice} from "../../shared/constants/answer-choice.enum";

@Component({
  selector: 'question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent {
  public typesOfQuestion = AnswerChoice
  value = '1';
  form = this.fb.group({
    types: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.typesOfQuestion)
    this.form.controls['types'].valueChanges.subscribe(value => console.log(value))
  }

}
