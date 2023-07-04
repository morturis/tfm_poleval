import { ValidatorFn } from '@angular/forms';

interface BaseFieldConfig {
  header: string; //Title
  field: string; //Identifier for the form they are part in
}

//For table columns
export interface ColumnConfig extends BaseFieldConfig {
  defaultValue?: any;
  viewOnly?: boolean;
  placeholder?: string;
  info?: string;
  validators?: ValidatorFn[];
  errorMessages?: Record<string, (error?: any) => string>;
}

//For inputs
export interface InputConfig extends BaseFieldConfig {
  labelOnLeftSide?: boolean;
  defaultValue?: any;
  viewOnly?: boolean;
  placeholder?: string;
  info?: string;
  validators?: ValidatorFn[];
  errorMessages?: Record<string, (error?: any) => string>;
}

export type AnyFieldConfig = InputConfig | ColumnConfig;
