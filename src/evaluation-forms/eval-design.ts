import { Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { CustomValidators } from 'src/app/types/CustomValidators';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';

const toolsTableConfig: TableConfig = {
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

const criterionTableConfig: TableConfig = {
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

const indicatorsTableConfig: TableConfig = {
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
    /*
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
      */
  ],
};

export const evalDesignFields: AnyFieldConfig[] = [
  toolsTableConfig,
  criterionTableConfig,
  indicatorsTableConfig,
];
