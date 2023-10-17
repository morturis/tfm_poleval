import { Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';

const interventionIndicatorsTableConfig: TableConfig = {
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
        ...CustomErrorMessages.required,
      },
    },
    {
      header: 'intervention_indicators_targetvalue',
      field: 'intervention_indicators_targetvalue',
      fieldType: 'input',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_indicators_targetvalue_placeholder',
      info: 'intervention_indicators_targetvalue_info',
      validators: [Validators.required],
      errorMessages: {
        ...CustomErrorMessages.required,
      },
    },
  ],
  info: 'intervention_indicators_info',
};
export const interventionContextFields: AnyFieldConfig[] = [
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
    header: 'intervention_simultaneous',
    field: 'intervention_simultaneous',
    fieldType: 'input',
    defaultValue: undefined,
    viewOnly: false,
    labelOnLeftSide: true,
    placeholder: 'intervention_simultaneous_placeholder',
    info: 'intervention_simultaneous_info',
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
  interventionIndicatorsTableConfig,
];
