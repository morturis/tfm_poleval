import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { allEvaluationFormFields } from 'src/evaluation-forms/all';
import { ExportService } from 'src/services/export.service';
import { EvaluationService } from 'src/services/external/evaluation.service';

@Component({
  selector: 'app-field-work',
  templateUrl: './field-work.component.html',
  styleUrls: ['./field-work.component.scss'],
})
export class FieldWorkComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();
  form_code_to_show!: string;

  formQuestions!: (AnyFieldConfig & {
    responses?: string[];
    responseOptions?: string[];
  })[];

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private evalService: EvaluationService,
    private exportAs: ExportService
  ) {
    super(fb);
    this.buildForm(allEvaluationFormFields);
  }

  ngOnInit() {
    this.outputEvent.emit({ status: 'VALID' }); //so I can always go to the next step

    //check if we have a form code
    const form_code = this.route.snapshot.paramMap.get('code'); //defaults to null
    this.form_code_to_show = form_code || 'field_work_no_code';

    if (!form_code) {
      this.formQuestions = [];
      return;
    }

    //check if the form code has an evaluation
    this.evalService.get(form_code).subscribe((evaluation) => {
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

  getNumberOfResponses(config: AnyFieldConfig): number {
    let numberOfResponses = 0;
    this.form.value.responses?.map((resp) => {
      if (resp[config.field]) numberOfResponses++;
    });
    return numberOfResponses;
  }

  downloadCsv() {
    const evaluation = this.form.value;
    if (!evaluation.responses?.length) return;

    const fieldToHeaderMap = new Map<string, string>();
    this.formQuestions.forEach((question) => {
      fieldToHeaderMap.set(question.field, question.header);
    });

    const responsesByHeader: Record<string, any>[] = [];
    evaluation.responses.forEach((response) => {
      const transformedResponse: Record<string, any> = {};
      Object.entries(response).forEach(([questionField, responseValue]) => {
        transformedResponse[fieldToHeaderMap.get(questionField) || ''] =
          responseValue;
      });

      responsesByHeader.push(transformedResponse);
    });

    this.exportAs.csv(responsesByHeader);
  }

  changePublicationStatus() {
    const currentEval = this.form.value;
    currentEval.published = !currentEval.published;

    this.evalService
      .update({ ...currentEval, code: this.form_code_to_show })
      .subscribe((evaluation) => {
        const transformedValue =
          this.evalService.transformFromApiObject(evaluation);

        this.form.patchValue(transformedValue, {
          emitEvent: true,
        });
      });
  }
}
