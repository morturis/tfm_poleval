import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent extends DynamicFormView {
  availableEvalConfig: TableConfig = {
    header: 'available_eval_table',
    field: 'available_eval_table',
    fieldType: 'table',
    itemName: 'eval_unit',
    canAddRemove: false,
    columns: [
      {
        header: 'eval_name',
        field: 'eval_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'eval_name_placeholder',
        info: 'eval_name_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
    ],
  };

  override fieldsConfig: AnyFieldConfig[] = [this.availableEvalConfig];

  constructor(
    fb: FormBuilder,
    public loginService: LoginService,
    private evalService: EvaluationService
  ) {
    super(fb);
    this.buildForm(this.fieldsConfig);
  }

  ngOnInit() {
    //Whenever I enter this form, I check for previously saved values
    const userEvals = this.evalService.getByLoggedInUser();
    if (userEvals)
      this.form.patchValue(
        { [this.availableEvalConfig.field]: userEvals },
        { emitEvent: true }
      );
  }
}
