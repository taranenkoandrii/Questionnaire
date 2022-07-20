import { Component } from '@angular/core';


@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  answers: string[] = ['Single choice', 'Multiply choice', 'Open'];
}
