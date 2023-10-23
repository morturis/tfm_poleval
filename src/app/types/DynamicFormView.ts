import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  AnyFieldConfig,
  DatePickerConfig,
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
  public DatePickerConfig!: DatePickerConfig;

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

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
  getFormGroup(name: string) {
    return this.form.get(name) as FormGroup;
  }

  buildForm(fieldsConfig: AnyFieldConfig[]) {
    const localFieldsConfig = [...fieldsConfig];
    localFieldsConfig.map((field) => {
      if (!this.fieldsConfig.includes(field)) {
        delete field.validators;
      }
      return field;
    });

    this.form = this.fb.group(
      localFieldsConfig.reduce((accum, field: AnyFieldConfig) => {
        if (field.fieldType === 'datepicker' && field.range) {
          const fg = new FormGroup(
            {
              start: new FormControl<Date | null>(null),
              end: new FormControl<Date | null>(null),
            },
            { validators: field.validators }
          );
          return {
            ...accum,
            [field.field]: fg,
          };
        }

        return {
          ...accum,
          [field.field]: [field.defaultValue, { validators: field.validators }],
        };
      }, {})
    );
  }

  whenFormChanges(fun: (val: any) => void) {
    this.form.valueChanges.subscribe((val) => {
      if (!this.form.valid) return;
      fun(val);
    });
  }
}
