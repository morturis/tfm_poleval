import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { allEvaluationFormFields } from 'src/evaluation-forms/all';
import { finalReportFields } from 'src/evaluation-forms/final-report';
import { EvaluationService } from 'src/services/external/evaluation.service';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.scss'],
})
export class FinalReportComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();
  form_code_to_show!: string;

  override fieldsConfig: AnyFieldConfig[] = finalReportFields;

  formQuestions!: (AnyFieldConfig & {
    responses?: string[];
    responseOptions?: string[];
  })[];

  constructor(
    fb: FormBuilder,
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {
    super(fb);
    this.buildForm(allEvaluationFormFields);
  }

  ngOnInit() {
    this.outputEvent.emit({ status: 'VALID' }); //so I can always go to the next step

    //check if we have a form code
    const formCode = this.route.snapshot.paramMap.get('code'); //defaults to null
    this.form_code_to_show = formCode || 'field_work_no_code';

    if (!formCode) {
      this.formQuestions = [];
      return;
    }

    //Whenever I make a change to this form, I save it in the storage
    const saveChanges = (val) =>
      this.evalService.update({ code: formCode, ...val }).subscribe((r) => r);
    this.whenFormChanges(saveChanges);

    //check if the form code has an evaluation
    this.evalService.get(formCode).subscribe((evaluation) => {
      //load conclusions and recomendations
      const transformedValue =
        this.evalService.transformFromApiObject(evaluation);
      this.form.patchValue(transformedValue, {
        emitEvent: true,
      });

      //check if the evaluation has questions and responses
      this.formQuestions = evaluation.form || [];
      if (!evaluation.responses) return;

      //parse response options
      this.formQuestions.map((question) => {
        if (question.fieldType != 'dropdown') return;
        question.responseOptions = question.items;
      });

      //parse responses
      const responses: Record<string, any> = {};
      evaluation.responses?.forEach((response) => {
        Object.entries(response).forEach(([questionCode, response]) => {
          if (!responses[questionCode]) responses[questionCode] = [];

          if (Array.isArray(response)) {
            responses[questionCode].push(...response);
          } else {
            responses[questionCode].push(response);
          }
        });
      });

      this.formQuestions.map(
        (question) => (question.responses = responses[question.field])
      );
    });
  }
  getQuestionType(config: AnyFieldConfig): string {
    if (config.fieldType == 'input') return 'drag_drop_input';

    if (config.fieldType == 'dropdown')
      return config.multiple
        ? 'drag_drop_multiple_dropdown'
        : 'drag_drop_dropdown';

    return 'ERROR';
  }
}
