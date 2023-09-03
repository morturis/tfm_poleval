import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  AnyFieldConfig,
  DropdownConfig,
  InputConfig,
  TableConfig,
} from '../../app/types/FieldConfig';

export abstract class DynamicFormView {
  fieldsConfig: AnyFieldConfig[] = [];
  form!: FormGroup; //definite assignment

  //Publish types for template
  public TableConfig!: TableConfig;
  public InputConfig!: InputConfig;
  public DropdownConfig!: DropdownConfig;

  constructor(private fb: FormBuilder) {}

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

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  buildForm(fieldsConfig: AnyFieldConfig[]) {
    this.fieldsConfig = fieldsConfig;

    this.form = this.fb.group(
      this.fieldsConfig.reduce((accum, field: AnyFieldConfig) => {
        return {
          ...accum,
          [field.field]: [field.defaultValue, { validators: field.validators }],
        };
      }, {} as any)
    );
  }
}
