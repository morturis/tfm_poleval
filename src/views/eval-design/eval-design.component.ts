import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { CustomValidators } from 'src/app/types/CustomValidators';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

@Component({
  selector: 'app-eval-design',
  templateUrl: './eval-design.component.html',
  styleUrls: ['./eval-design.component.scss'],
})
export class EvalDesignComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();

  toolsTableConfig: TableConfig = {
    header: 'tools_table',
    field: 'tools_table',
    fieldType: 'table',
    itemName: 'tool_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'tools_name',
        field: 'tools_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'tools_name_placeholder',
        info: 'tools_name_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'tools_brief_description',
        field: 'tools_brief_description',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'tools_brief_description_placeholder',
        info: 'tools_brief_description_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'tools_use_case',
        field: 'tools_use_case',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'tools_use_case_placeholder',
        info: 'tools_use_case_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
    ],
  };

  criterionTableConfig: TableConfig = {
    header: 'criterion_table',
    field: 'criterion_table',
    fieldType: 'table',
    itemName: 'criterion_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'criterion_description',
        field: 'criterion_description',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'criterion_description_placeholder',
        info: 'criterion_description_info',
        validators: [Validators.required],
        errorMessages: { ...CustomErrorMessages.required },
      },
    ],
    info: 'criterion_info',
    validators: [CustomValidators.requiredTable],
    errorMessages: { ...CustomErrorMessages.required },
  };

  indicatorsTableConfig: TableConfig = {
    header: 'eval_indicators_table',
    field: 'eval_indicators_table',
    fieldType: 'table',
    itemName: 'indicator_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'eval_indicator_name',
        field: 'eval_indicator_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'eval_indicator_name_placeholder',
        info: 'eval_indicator_name_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'eval_indicators_startvalue',
        field: 'eval_indicators_startvalue',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'eval_indicators_startvalue_placeholder',
        info: 'eval_indicators_startvalue_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
    ],
  };

  override fieldsConfig: AnyFieldConfig[] = [
    this.toolsTableConfig,
    this.criterionTableConfig,
    this.indicatorsTableConfig,
  ];

  constructor(
    fb: FormBuilder,
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {
    super(fb);
    this.buildForm(this.fieldsConfig);
  }

  ngOnInit() {
    //When the validity of the form changes, I throw EventEmitter
    this.form.statusChanges.pipe(distinctUntilChanged()).subscribe((status) => {
      this.outputEvent.emit({ status: status });
    });
    this.outputEvent.emit({ status: this.form.status });

    const formCode = this.route.snapshot.paramMap.get('code');
    if (!formCode)
      throw new Error('Please create a new evaluation from the beginning'); //should never trigger

    //Whenever I make a change to this form, I save it in the storage
    this.form.valueChanges.subscribe((val) => {
      this.evalService.update(
        formCode as string,
        EvaluationProperties['eval-design'],
        val
      );
    });

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.evalService.get(formCode)?.[EvaluationProperties['eval-design']];
    if (savedValue) this.form.patchValue(savedValue, { emitEvent: true });
  }
}
