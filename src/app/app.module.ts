import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {QuestionCreateComponent} from "./pages/question-create/question-create.component";
import {QuestionEditComponent} from "./pages/question-edit/question-edit.component";
import {QuestionListComponent} from "./pages/question-list/question-list.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
