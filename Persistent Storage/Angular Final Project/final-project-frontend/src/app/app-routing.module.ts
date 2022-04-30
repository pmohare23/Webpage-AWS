import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SurveysComponent} from './surveys/surveys.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';

const routes: Routes = [
  {path:'surveys', component:SurveysComponent},
  {path:'questionnaire', component:QuestionnaireComponent},
  {path: 'acknowledgment', component:AcknowledgmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SurveysComponent, QuestionnaireComponent]