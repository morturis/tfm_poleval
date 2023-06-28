import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColumnConfig } from 'src/app/types/ColumnConfig';
import { DialogData } from 'src/app/types/DialogData';

@Component({
  selector: 'app-tabla-dialog',
  templateUrl: './tabla-dialog.component.html',
  styleUrls: ['./tabla-dialog.component.scss'],
})
export class TablaDialogComponent {
  form!: FormGroup; //definite assignment operator
  columnConfig: ColumnConfig[] = [];
  title: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) data: DialogData,
    private fb: FormBuilder
  ) {
    //Creating form
    this.form = this.fb.group(
      data.columnsConfig.reduce((accum, column: ColumnConfig) => {
        return {
          ...accum,
          [column.field]: [
            column.defaultValue,
            { validators: column.validators },
          ],
        };
      }, {} as any)
    );

    this.columnConfig = data.columnsConfig;
    this.title = data.title;
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
