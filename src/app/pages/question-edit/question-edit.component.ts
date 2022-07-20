import { Component } from '@angular/core';


@Component({
  selector: 'question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent {
  typeOfQuestion!: string;
  typesOfQuestion: string[] = ['Single choice', 'Multiply choice', 'Open'];
  value = 'Clear me';
}
