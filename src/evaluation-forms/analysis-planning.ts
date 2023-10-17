import { Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';

const delimitationActorsTableConfig: TableConfig = {
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
        ...CustomErrorMessages.required,
      },
    },
  ],
};
const teamManagersTableConfig: TableConfig = {
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
        ...CustomErrorMessages.required,
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
        ...CustomErrorMessages.required,
      },
    },
  ],
};
const teamMembersTableConfig: TableConfig = {
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
        ...CustomErrorMessages.required,
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
        ...CustomErrorMessages.required,
      },
    },
  ],
};
const otherParticipantsTableConfig: TableConfig = {
  header: 'other_participants_table',
  field: 'other_participants_table',
  fieldType: 'table',
  itemName: 'other_participants_unit',
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
        ...CustomErrorMessages.required,
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
        ...CustomErrorMessages.required,
      },
    },
  ],
};
export const analysisPlanningFields: AnyFieldConfig[] = [
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
      ...CustomErrorMessages.required,
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
      ...CustomErrorMessages.required,
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
      ...CustomErrorMessages.required,
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
      ...CustomErrorMessages.required,
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
      ...CustomErrorMessages.required,
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
      ...CustomErrorMessages.required,
    },
  },
  //Delimitaciones
  {
    header: 'delimitations_geo',
    field: 'delimitations_geo',
    fieldType: 'input',
    defaultValue: undefined,
    viewOnly: false,
    labelOnLeftSide: true,
    placeholder: 'delimitations_geo_placeholder',
    info: 'delimitations_geo_info',
  },
  {
    header: 'delimitations_time_period',
    field: 'delimitations_time_period',
    fieldType: 'input',
    defaultValue: undefined,
    viewOnly: false,
    labelOnLeftSide: true,
    placeholder: 'delimitations_time_period_placeholder',
    info: 'delimitations_time_period_info',
  },
  delimitationActorsTableConfig,
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
  /*
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
*/
  teamManagersTableConfig,
  teamMembersTableConfig,
  otherParticipantsTableConfig,
];
