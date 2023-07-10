import { Component } from '@angular/core';
import {
  AnyFieldConfig,
  TableConfig,
  InputConfig,
  DropdownConfig,
} from '../../app/types/FieldConfig';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-analysis-planning',
  templateUrl: './analysis-planning.component.html',
  styleUrls: ['./analysis-planning.component.scss'],
})
export class AnalysisPlanningComponent {
  studiedActorsTableConfig: TableConfig = {
    header: 'actor_table',
    field: 'actor_table',
    fieldType: 'table',
    itemName: 'actor',
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
          required: () => 'This field is required',
        },
      },
    ],
  };
  teamManagersTableConfig: TableConfig = {
    header: 'team_manager_table',
    field: 'team_manager_table',
    fieldType: 'table',
    itemName: 'Manager',
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
          required: () => 'This field is required',
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
          required: () => 'This field is required',
        },
      },
    ],
  };

  teamMembersTableConfig: TableConfig = {
    header: 'team_member_table',
    field: 'team_member_table',
    fieldType: 'table',
    itemName: 'member', //TODO translate
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
          required: () => 'This field is required',
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
          required: () => 'This field is required',
        },
      },
    ],
  };

  otherParticipantsTableConfig: TableConfig = {
    header: 'other_participants_table',
    field: 'other_participants_table',
    fieldType: 'table',
    itemName: 'member', //TODO translate
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
          required: () => 'This field is required',
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
          required: () => 'This field is required',
        },
      },
    ],
  };

  toolsTableConfig: TableConfig = {
    header: 'tools_table',
    field: 'tools_table',
    fieldType: 'table',
    itemName: 'tool', //TODO translate
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
          required: () => 'This field is required',
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
          required: () => 'This field is required',
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
        required: () => 'This field is required',
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
        required: () => 'This field is required',
      },
    },
    //TODO fase del ciclo
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
        required: () => 'This field is required',
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
        required: () => 'This field is required',
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
        required: () => 'This field is required',
      },
    },
    this.studiedActorsTableConfig,
    //Delimitar TODO
    //zona geografica
    this.studiedActorsTableConfig,
    //tiempo

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
    //Estrategia TODO
    this.teamManagersTableConfig,
    this.teamMembersTableConfig,
    this.otherParticipantsTableConfig,
    this.toolsTableConfig,
  ];

  form!: FormGroup; //definite assignment

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      this.fieldsConfig.reduce((accum, field: AnyFieldConfig) => {
        return {
          ...accum,
          [field.field]: [field.defaultValue, { validators: field.validators }],
        };
      }, {} as any)
    );
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
