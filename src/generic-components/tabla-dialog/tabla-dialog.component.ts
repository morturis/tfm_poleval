import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/types/DialogData';
import { DynamicFormView } from 'src/app/types/DynamicFormView';

@Component({
  selector: 'app-tabla-dialog',
  templateUrl: './tabla-dialog.component.html',
  styleUrls: ['./tabla-dialog.component.scss'],
})
export class TablaDialogComponent extends DynamicFormView {
  itemName: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) data: DialogData, fb: FormBuilder) {
    super(fb);
    this.fieldsConfig = data.inputsConfig;
    this.itemName = data.itemName;
    //Creating form
    this.buildForm(data.inputsConfig);

    if (data.item)
      this.form.patchValue(data.item, {
        emitEvent: true,
      });

    this.form.valueChanges.subscribe((v) => {
      const w = this.form;
      console.log(w);
      console.log(v);
    });
  }
}
