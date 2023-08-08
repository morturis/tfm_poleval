import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { InputConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

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
      required: () => 'error_required_field',
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
    if (!this.evalService.get(codeOfTheFormToEdit)) {
      alert('There is no evaluation with that code');
      return;
    }
    this.router.navigate([`/eval/${codeOfTheFormToEdit}`]);
  }
}
