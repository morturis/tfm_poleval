import { Component } from '@angular/core';
import { Stage } from 'src/app/types/Stage';
import { AnalysisPlanningComponent } from '../analysis-planning/analysis-planning.component';
import { EvalDesignComponent } from '../eval-design/eval-design.component';
import { FieldWorkComponent } from '../field-work/field-work.component';
import { FinalReportComponent } from '../final-report/final-report.component';
import { FormMakerComponent } from '../form-maker/form-maker.component';
import { InterventionContextComponent } from '../intervention-context/intervention-context.component';
import { TermsOfReferenceComponent } from '../terms-of-reference/terms-of-reference.component';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss'],
})
export class EvalComponent {
  constructor() {}

  //TODO make stage names dynamic
  stages: Stage[] = [
    {
      name: 'first_stage',
      isDone: false,
      isActive: true,
      contents: AnalysisPlanningComponent,
    },
    {
      name: 'document_terms_of_reference',
      isDone: false,
      isDocument: true,
      contents: TermsOfReferenceComponent,
    },
    {
      name: 'second_stage',
      isDone: false,
      contents: InterventionContextComponent,
    },
    {
      name: 'third_stage',
      isDone: false,
      contents: EvalDesignComponent,
    },
    {
      name: 'form_maker_stage',
      isDone: false,
      contents: FormMakerComponent,
    },
    {
      name: 'fourth_stage', //Field work
      isDone: false,
      contents: FieldWorkComponent,
    },
    {
      name: 'document_final_report',
      isDone: false,
      isDocument: true,
      contents: FinalReportComponent,
    },
  ];
}
