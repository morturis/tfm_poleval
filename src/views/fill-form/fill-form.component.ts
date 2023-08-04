import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig, InputConfig } from 'src/app/types/FieldConfig';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss'],
})
export class FillFormComponent extends DynamicFormView {
  code: string | null; //undefined when selecting form

  selectFormCodeInputConfig: InputConfig = {
    fieldType: 'input',
    header: 'code',
    field: 'code',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      required: () => 'This field is required',
    },
  };

  constructor(
    fb: FormBuilder,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super(fb);
    this.code = this.route.snapshot.paramMap.get('code'); //defaults to null
  }

  ngOnInit() {
    const formJson = this.storage.getObject<AnyFieldConfig[]>(
      `created-form-${this.code}`
    );

    if (formJson) {
      this.buildForm(formJson);
      return;
    }

    this.buildForm([this.selectFormCodeInputConfig]);
  }

  selectCode() {
    const codeOfTheFormToFill = this.form.value.code;
    this.router.navigate([`/fill-form/${codeOfTheFormToFill}`]);
  }

  saveResponse() {
    const allResponses =
      this.storage.getObject<any[]>(`response-${this.code}`) || [];

    const newResponse = this.form.value;
    allResponses.push(newResponse);
    this.storage.setObject(`response-${this.code}`, allResponses);
  }
}
