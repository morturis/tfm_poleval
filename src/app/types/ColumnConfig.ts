import { ValidatorFn } from '@angular/forms';

export type ColumnConfig = {
  header: string;
  field: string;
  defaultValue?: any;
  viewOnly?: boolean;
  placeholder?: string;
  info?: string;
  validators?: ValidatorFn | ValidatorFn[];
  errorMessages?: Record<string, (error?: any) => string>;
};
