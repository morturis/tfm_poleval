import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

@Component({
  selector: 'app-intervention-context',
  templateUrl: './intervention-context.component.html',
  styleUrls: ['./intervention-context.component.scss'],
})
export class InterventionContextComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();

  interventionIndicatorsTableConfig: TableConfig = {
    header: 'intervention_indicators',
    field: 'intervention_indicators',
    fieldType: 'table',
    itemName: 'indicator_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'intervention_indicators_name',
        field: 'intervention_indicators_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_indicators_name_placeholder',
        info: 'intervention_indicators_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'intervention_indicators_value',
        field: 'intervention_indicators_value',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_indicators_value_placeholder',
        info: 'intervention_indicators_value_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
  override fieldsConfig: AnyFieldConfig[] = [
    {
      header: 'intervention_objective',
      field: 'intervention_objective',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_objective_placeholder',
      info: 'intervention_objective_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },

    {
      header: 'intervention_problem_to_solve',
      field: 'intervention_problem_to_solve',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_problem_to_solve_placeholder',
      info: 'intervention_problem_to_solve_info',
    },
    {
      header: 'intervention_upper_level_strategy',
      field: 'intervention_upper_level_strategy',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_upper_level_strategy_placeholder',
      info: 'intervention_upper_level_strategy_info',
    },
    {
      header: 'intervention_simultaneous_opposed',
      field: 'intervention_simultaneous_opposed',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_simultaneous_opposed_placeholder',
      info: 'intervention_simultaneous_opposed_info',
    },

    {
      header: 'intervention_implementation_level',
      field: 'intervention_implementation_level',
      fieldType: 'dropdown',
      viewOnly: false,
      defaultValue: undefined,
      labelOnLeftSide: true,
      info: 'intervention_implementation_level_info',
      items: [
        'intervention_implementation_level_1',
        'intervention_implementation_level_2',
        'intervention_implementation_level_3',
      ],
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },

    {
      header: 'intervention_unexpected_interruptions',
      field: 'intervention_unexpected_interruptions',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_unexpected_interruptions_placeholder',
      info: 'intervention_unexpected_interruptions_info',
    },
    this.interventionIndicatorsTableConfig,
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
        EvaluationProperties['intervention-context'],
        val
      );
    });

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.evalService.get(formCode)?.[
        EvaluationProperties['intervention-context']
      ];
    if (savedValue) this.form.patchValue(savedValue, { emitEvent: true });
  }
}
