import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import {
  AnyFieldConfig,
  DropdownConfig,
  InputConfig,
  TableConfig,
} from 'src/app/types/FieldConfig';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-intervention-context',
  templateUrl: './intervention-context.component.html',
  styleUrls: ['./intervention-context.component.scss'],
})
export class InterventionContextComponent {
  @Output() outputEvent = new EventEmitter<any>();

  interventionIndicatorsTableConfig: TableConfig = {
    header: 'intervention_indicators',
    field: 'intervention_indicators',
    fieldType: 'table',
    itemName: 'indicator_unit', //TODO translate
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
          required: () => 'This field is required',
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
          required: () => 'This field is required',
        },
      },
    ],
  };
  fieldsConfig: AnyFieldConfig[] = [
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
        required: () => 'This field is required',
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
        required: () => 'This field is required',
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
    //Actores tabla TODO ? no se qué va aquí
    this.interventionIndicatorsTableConfig,
  ];

  form!: FormGroup; //definite assignment
  constructor(private fb: FormBuilder, private storage: StorageService) {
    this.form = this.fb.group(
      this.fieldsConfig.reduce((accum, field: AnyFieldConfig) => {
        return {
          ...accum,
          [field.field]: [field.defaultValue, { validators: field.validators }],
        };
      }, {} as any)
    );
  }

  ngOnInit() {
    //When the validity of the form changes, I throw EventEmitter
    this.form.statusChanges.pipe(distinctUntilChanged()).subscribe((status) => {
      this.outputEvent.emit({ status: status });
    });
    this.outputEvent.emit({ status: this.form.status });

    //Whenever I make a change to this form, I save it in the storage
    this.form.valueChanges.subscribe((val) =>
      this.storage.setObject<typeof val>('intervention-context', val)
    );

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue = this.storage.getObject<Record<string, any>>(
      'intervention-context'
    );
    if (savedValue) this.form.patchValue(savedValue, { emitEvent: true });
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  //Publish types for template
  public TableConfig!: TableConfig;
  public InputConfig!: InputConfig;
  public DropdownConfig!: DropdownConfig;
  isInput(field: AnyFieldConfig) {
    return field.fieldType == 'input' ? (field as InputConfig) : undefined;
  }

  isTable(field: AnyFieldConfig) {
    return field.fieldType == 'table' ? (field as TableConfig) : undefined;
  }

  isDropdown(field: AnyFieldConfig) {
    return field.fieldType == 'dropdown'
      ? (field as DropdownConfig)
      : undefined;
  }
}
