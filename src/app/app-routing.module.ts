import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './components/question-1/question1/question1.component';
import { Question2Component } from './components/question-2/question2/question2.component';

const routes: Routes = [
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
