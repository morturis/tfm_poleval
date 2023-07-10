import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputConfig } from 'src/app/types/FieldConfig';
import { DialogData } from 'src/app/types/DialogData';

@Component({
  selector: 'app-tabla-dialog',
  templateUrl: './tabla-dialog.component.html',
  styleUrls: ['./tabla-dialog.component.scss'],
})
export class TablaDialogComponent {
  form!: FormGroup; //definite assignment operator
  fieldsConfig: InputConfig[] = [];
  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private fb: FormBuilder
  ) {
    //Creating form
    this.form = this.fb.group(
      data.inputsConfig.reduce((accum, column: InputConfig) => {
        return {
          ...accum,
          [column.field]: [
            column.defaultValue,
            { validators: column.validators },
          ],
        };
      }, {} as any)
    );

    this.fieldsConfig = data.inputsConfig;
    this.title = data.title;
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
