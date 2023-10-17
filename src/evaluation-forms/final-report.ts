import { Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { CustomValidators } from 'src/app/types/CustomValidators';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';

const conclusionsTableConfig: TableConfig = {
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

const recomendationsTableConfig: TableConfig = {
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

export const finalReportFields: AnyFieldConfig[] = [
  conclusionsTableConfig,
  recomendationsTableConfig,
];
