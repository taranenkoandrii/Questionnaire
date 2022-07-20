import { Component } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';


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
