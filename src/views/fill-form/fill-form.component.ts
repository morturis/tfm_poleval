import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss'],
})
export class FillFormComponent extends DynamicFormView {
  constructor(fb: FormBuilder, private storage: StorageService) {
    super(fb);
  }

  ngOnInit() {
    const formJson = this.storage.getObject<AnyFieldConfig[]>('created-form');
    this.buildForm(formJson);
  }
}
