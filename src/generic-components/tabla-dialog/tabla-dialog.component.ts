import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/types/DialogData';
import { InputConfig } from 'src/app/types/FieldConfig';

@Component({
  selector: 'app-tabla-dialog',
  templateUrl: './tabla-dialog.component.html',
  styleUrls: ['./tabla-dialog.component.scss'],
})
export class TablaDialogComponent {
  form!: FormGroup; //definite assignment operator
  fieldsConfig: InputConfig[] = [];
  itemName: string = '';
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
    this.itemName = data.itemName;
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
