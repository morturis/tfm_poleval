import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { StorageService } from 'src/services/storage.service';
import {
  AnyFieldConfig,
  DropdownConfig,
  InputConfig,
  TableConfig,
} from '../../app/types/FieldConfig';

@Component({
  selector: 'app-analysis-planning',
  templateUrl: './analysis-planning.component.html',
  styleUrls: ['./analysis-planning.component.scss'],
})
export class AnalysisPlanningComponent {
  @Output() outputEvent = new EventEmitter<any>();

  delimitationActorsTableConfig: TableConfig = {
    header: 'actor_table',
    field: 'actor_table',
    fieldType: 'table',
    itemName: 'actor_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'actor_name',
        field: 'actor_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'actor_name_placeholder',
        info: 'actor_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
  teamManagersTableConfig: TableConfig = {
    header: 'team_manager_table',
    field: 'team_manager_table',
    fieldType: 'table',
    itemName: 'manager_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'manager_name',
        field: 'manager_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'manager_name_placeholder',
        info: 'manager_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'manager_role',
        field: 'manager_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'manager_role_placeholder',
        info: 'manager_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
  teamMembersTableConfig: TableConfig = {
    header: 'team_member_table',
    field: 'team_member_table',
    fieldType: 'table',
    itemName: 'member_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'team_member_name',
        field: 'team_member_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'team_member_name_placeholder',
        info: 'team_member_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'team_member_role',
        field: 'team_member_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'team_member_role_placeholder',
        info: 'team_member_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
  otherParticipantsTableConfig: TableConfig = {
    header: 'other_participants_table',
    field: 'other_participants_table',
    fieldType: 'table',
    itemName: 'member_unit',
    canAddRemove: true,
    columns: [
      {
        header: 'other_participants_name',
        field: 'other_participants_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'other_participants_name_placeholder',
        info: 'other_participants_name_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
      {
        header: 'other_participants_role',
        field: 'other_participants_role',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'other_participants_role_placeholder',
        info: 'other_participants_role_info',
        validators: [Validators.required],
        errorMessages: {
          required: () => 'error_required_field',
        },
      },
    ],
  };
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
          required: () => 'error_required_field',
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
          required: () => 'error_required_field',
        },
      },
    ],
  };

  fieldsConfig: AnyFieldConfig[] = [
    {
      header: 'intervention_name',
      field: 'intervention_name',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_name_placeholder',
      info: 'intervention_name_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_org',
      field: 'evaluation_org',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_org_placeholder',
      info: 'evaluation_org_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },

    {
      header: 'intervention_life_cycle',
      field: 'intervention_life_cycle',
      fieldType: 'dropdown',
      viewOnly: false,
      defaultValue: undefined,
      labelOnLeftSide: true,
      info: 'intervention_life_cycle_info',
      items: [
        'intervention_life_cycle_1',
        'intervention_life_cycle_2',
        'intervention_life_cycle_3',
      ],
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_objective',
      field: 'evaluation_objective',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_objective_placeholder',
      info: 'evaluation_objective_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_reasoning',
      field: 'evaluation_reasoning',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_reasoning_placeholder',
      info: 'evaluation_reasoning_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    {
      header: 'evaluation_utility',
      field: 'evaluation_utility',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_utility_placeholder',
      info: 'evaluation_utility_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'error_required_field',
      },
    },
    //Delimitar TODO
    // --zona geografica
    this.delimitationActorsTableConfig,
    // --tiempo

    {
      header: 'other_delimitations',
      field: 'other_delimitations',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'other_delimitations_placeholder',
      info: 'other_delimitations_info',
    },

    {
      header: 'eval_strategy',
      field: 'eval_strategy',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'eval_strategy_placeholder',
      info: 'eval_strategy_info',
    },

    this.teamManagersTableConfig,
    this.teamMembersTableConfig,
    this.otherParticipantsTableConfig,
    this.toolsTableConfig,
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
      this.storage.setObject<typeof val>('analysis-planning', val)
    );

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.storage.getObject<Record<string, any>>('analysis-planning');
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
