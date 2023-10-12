import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { CustomValidators } from 'src/app/types/CustomValidators';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/external/evaluation.service';

@Component({
  selector: 'app-final-report',
  templateUrl: './final-report.component.html',
  styleUrls: ['./final-report.component.scss'],
})
export class FinalReportComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();
  form_code_to_show!: string;

  conclusionsTableConfig: TableConfig = {
    header: 'conclusion_table',
    field: 'conclusion_table',
    fieldType: 'table',
    itemName: 'conclusion_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'conclusion_description',
        field: 'conclusion_description',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'conclusion_description_placeholder',
        info: 'conclusion_description_info',
        validators: [Validators.required],
        errorMessages: { ...CustomErrorMessages.required },
      },
      {
        header: 'conclusion_based_on',
        field: 'conclusion_based_on',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'conclusion_based_on_placeholder',
        info: 'conclusion_based_on_info',
      },
    ],
    info: 'conclusion_info',
    validators: [CustomValidators.requiredTable],
    errorMessages: { ...CustomErrorMessages.required },
  };

  recomendationsTableConfig: TableConfig = {
    header: 'recomendation_table',
    field: 'recomendation_table',
    fieldType: 'table',
    itemName: 'recomendation_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'recomendation_description',
        field: 'recomendation_description',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'recomendation_description_placeholder',
        info: 'recomendation_description_info',
        validators: [Validators.required],
        errorMessages: { ...CustomErrorMessages.required },
      },
      {
        header: 'recomendation_based_on',
        field: 'recomendation_based_on',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'recomendation_based_on_placeholder',
        info: 'recomendation_based_on_info',
      },
    ],
    info: 'recomendation_info',
  };

  override fieldsConfig: AnyFieldConfig[] = [
    this.conclusionsTableConfig,
    this.recomendationsTableConfig,
  ];

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
    this.buildForm(this.fieldsConfig);
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
