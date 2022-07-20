import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionManagementComponent } from "./pages/question-managment/question-management.component";
import { QuestionEditComponent } from "./pages/question-edit/question-edit.component";
import { QuestionCreateComponent } from "./pages/question-create/question-create.component";
import { QuestionListComponent } from "./pages/question-list/question-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'management',
  },
  {
    path: 'management',
    component: QuestionManagementComponent,
  },
  {
    path: 'create',
    component: QuestionCreateComponent,
    data: { isEdit: false }
  },
  {
    path: 'edit/:itemId',
    component: QuestionEditComponent,
    data: { isEdit: true }
  },
  {
    path: 'list',
    component: QuestionListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
