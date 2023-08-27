import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/types/Stage';
import { EvaluationService } from 'src/services/evaluation.service';
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

  code!: string | null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evalService: EvaluationService
  ) {
    this.code = this.route.snapshot.paramMap.get('code'); //defaults to null
    while (!this.code) {
      //Generate a new code
      this.code = (Math.random().toString(36) + '0000000')
        .slice(2, 7)
        .toUpperCase();

      //If the code already exists, continue
      if (this.evalService.get(this.code)) {
        this.code = null;
        continue;
      }
      this.evalService.create(this.code);
    }
    this.router.navigate([`/eval/${this.code}`]);
  }
}
