import { Component } from '@angular/core';

@Component({
  selector: 'question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent {
  typeOfQuestion!: string;
  typesOfQuestion: string[] = ['Single choice', 'Multiply choice', 'Open'];
  value = 'Clear me';
}
