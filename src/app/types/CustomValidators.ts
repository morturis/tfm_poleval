import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as jQuery from 'jquery';

export class CustomValidators {
  static requiredTable: ValidatorFn = (control: AbstractControl) => {
    if (
      !control.value ||
      jQuery.isEmptyObject(control.value) ||
      Object.keys(control.value).length <= 0
    )
      return { required: true };

    return null;
  };
}
