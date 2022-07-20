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

@NgModule({
  declarations: [
    AppComponent,
    QuestionCreateComponent,
    QuestionEditComponent,
    QuestionListComponent,
    QuestionManagementComponent
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
