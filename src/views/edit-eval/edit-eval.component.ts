import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { InputConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/external/evaluation.service';

@Component({
  selector: 'app-edit-eval',
  templateUrl: './edit-eval.component.html',
  styleUrls: ['./edit-eval.component.scss'],
})
export class EditEvalComponent extends DynamicFormView {
  selectFormCodeInputConfig: InputConfig = {
    fieldType: 'input',
    header: 'code',
    field: 'code',
    placeholder: 'code_placeholder',
    info: 'code_info',
    labelOnLeftSide: true,
    viewOnly: false,

    validators: [Validators.required],
    errorMessages: {
      ...CustomErrorMessages.required,
    },
  };

  constructor(
    fb: FormBuilder,
    private router: Router,
    private evalService: EvaluationService
  ) {
    super(fb);
    this.buildForm([this.selectFormCodeInputConfig]);
  }

  selectCode() {
    const codeOfTheFormToEdit = this.form.value.code;

    this.evalService
      .get(codeOfTheFormToEdit)
      .subscribe((res) =>
        this.router.navigate([`/eval/${codeOfTheFormToEdit}`])
      );
  }
}
