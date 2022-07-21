import {forwardRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {QuestionCreateComponent} from "./pages/question-create/question-create.component";
import {QuestionEditComponent} from "./pages/question-edit/question-edit.component";
import {QuestionListComponent} from "./pages/question-list/question-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {QuestionManagementComponent} from "./pages/question-managment/question-management.component";
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import { SingleSelectQuestion } from './pages/question-list/single-select-question/single-select-question.component';
import { MultipleSelectQuestion } from './pages/question-list/multiple-select-question/multiple-select-question.component';
import { OpenQuestion } from './pages/question-list/open-question/open-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionListComponent,
    QuestionManagementComponent,
    SingleSelectQuestion,
    MultipleSelectQuestion,
    OpenQuestion
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
