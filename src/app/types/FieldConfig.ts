import { ValidatorFn } from '@angular/forms';

interface BaseFieldConfig {
  header: string; //Title
  field: string; //Identifier for the form they are part in
  disableTranslation?: boolean;
  fieldType: string;
  viewOnly?: boolean;
  defaultValue?: any;
  info?: string;
  validators?: ValidatorFn[];
  errorMessages?: Record<string, (error?: string) => string>;
}

//For inputs
export interface InputConfig extends BaseFieldConfig {
  fieldType: 'input';
  labelOnLeftSide?: boolean;
  placeholder?: string;
  inputType?: 'date' | 'password' | 'time';
}

export interface TableConfig extends BaseFieldConfig {
  fieldType: 'table';
  itemName: string;
  canAddRemove: boolean;
  canEdit?: boolean;
  defaultValue?: any[];

  //Configs for each field of the table
  columns: AnyFieldConfig[];

  action?: boolean;
  actionAvailability?: (obj: any) => boolean;
}

export interface DropdownConfig extends BaseFieldConfig {
  fieldType: 'dropdown';
  items: string[];
  labelOnLeftSide?: boolean;
  placeholder?: string;
  multiple?: boolean;
}

export interface OtherFieldConfig extends BaseFieldConfig {
  fieldType: 'other';
}

export interface DatePickerConfig extends BaseFieldConfig {
  fieldType: 'datepicker';
  range?: boolean;
}

export type AnyFieldConfig =
  | InputConfig
  | TableConfig
  | DropdownConfig
  | DatePickerConfig
  | OtherFieldConfig;

export abstract class FieldConfigDetectorMethods {
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

  isDatepicker(field: AnyFieldConfig) {
    return field.fieldType == 'datepicker' && !field.range
      ? (field as DatePickerConfig)
      : undefined;
  }
  isDaterange(field: AnyFieldConfig) {
    return field.fieldType == 'datepicker' && field.range
      ? (field as DatePickerConfig)
      : undefined;
  }
}
