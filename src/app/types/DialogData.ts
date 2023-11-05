import { AnyFieldConfig } from './FieldConfig';

export type DialogData = {
  inputsConfig: AnyFieldConfig[];
  itemName: string;
  item?: Record<string, unknown>;
};
