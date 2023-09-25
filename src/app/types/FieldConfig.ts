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
  defaultValue?: any[];
  //Configs for each field of the table
  columns: InputConfig[];

  action?: boolean;
}

export interface DropdownConfig extends BaseFieldConfig {
  fieldType: 'dropdown';
  items: string[];
  labelOnLeftSide?: boolean;
  placeholder?: string;
  multiple?: boolean;
}

export type AnyFieldConfig = InputConfig | TableConfig | DropdownConfig;
