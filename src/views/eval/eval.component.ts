import { Component } from '@angular/core';
import { Stage } from 'src/app/types/Stage';
import { PhraseKey } from 'src/languages/enums/PhraseKey.enum';
import { TranslationService } from 'src/services/translation-service.service';
import { TestViewDosComponent } from '../test-view-dos/test-view-dos.component';
import { AnalysisPlanningComponent } from '../analysis-planning/analysis-planning.component';
import { TermsOfReferenceComponent } from '../terms-of-reference/terms-of-reference.component';
import { InterventionContextComponent } from '../intervention-context/intervention-context.component';
import { EvalDesignComponent } from '../eval-design/eval-design.component';
import { FieldWorkComponent } from '../field-work/field-work.component';
import { FinalReportComponent } from '../final-report/final-report.component';

@Component({
  selector: 'app-eval',
  templateUrl: './eval.component.html',
  styleUrls: ['./eval.component.scss'],
})
export class EvalComponent {
  constructor(private ts: TranslationService) {}

  //TODO make stage names dynamic
  stages: Stage[] = [
    {
      name: 'first_stage',
      isDone: false,
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
