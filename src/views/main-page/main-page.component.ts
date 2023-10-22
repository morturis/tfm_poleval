import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig, TableConfig } from 'src/app/types/FieldConfig';
import { Permissions } from 'src/app/types/Permissions.enum';
import { TranslatePipe } from 'src/pipes/translate.pipe';
import { EvaluationService } from 'src/services/external/evaluation.service';
import { LoginService } from 'src/services/external/login.service';

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
    action: true,
    columns: [
      {
        header: 'code',
        field: 'code',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'code_placeholder',
        info: 'code_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'intervention_name',
        field: 'intervention_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_name_placeholder',
        info: 'intervention_name_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'state',
        field: 'state',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'state_placeholder',
        info: 'state_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
    ],
  };
  availableFormConfig: TableConfig = {
    header: 'available_form_table',
    field: 'available_form_table',
    fieldType: 'table',
    itemName: 'eval_unit',
    canAddRemove: false,
    action: true,
    actionAvailability: (element: { published: boolean }) => !element.published,
    columns: [
      {
        header: 'code',
        field: 'code',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'code_placeholder',
        info: 'code_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'intervention_name',
        field: 'intervention_name',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'intervention_name_placeholder',
        info: 'intervention_name_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
      {
        header: 'state',
        field: 'state',
        fieldType: 'input',
        defaultValue: undefined,
        viewOnly: false,
        placeholder: 'state_placeholder',
        info: 'state_info',
        validators: [Validators.required],
        errorMessages: {
          ...CustomErrorMessages.required,
        },
      },
    ],
  };

  override fieldsConfig: AnyFieldConfig[] = [
    this.availableEvalConfig,
    this.availableFormConfig,
  ];

  constructor(
    fb: FormBuilder,
    public loginService: LoginService,
    private evalService: EvaluationService,
    private router: Router,
    private translate: TranslatePipe
  ) {
    super(fb);
    this.buildForm(this.fieldsConfig);
  }

  ngOnInit() {
    const thereIsAUserLoggedIn = this.loginService.isLoggedIn();
    if (!thereIsAUserLoggedIn) return;

    //Whenever I enter this form, I check for previously saved values
    const observable = this.evalService.getByLoggedInUser();
    observable.subscribe((userEvals) => {
      userEvals[Permissions.EDIT_EVAL] = Object.values(
        userEvals[Permissions.EDIT_EVAL]
      ).map((ev) => {
        return {
          ...ev,
          state: this.translate.transform(ev['state']),
        };
      });
      userEvals[Permissions.FILL_FORM] = Object.values(
        userEvals[Permissions.FILL_FORM]
      ).map((ev) => {
        return {
          ...ev,
          state: this.translate.transform(ev['state']),
        };
      });
      this.form.patchValue(
        {
          [this.availableEvalConfig.field]: userEvals[Permissions.EDIT_EVAL],
          [this.availableFormConfig.field]: userEvals[Permissions.FILL_FORM],
        },
        { emitEvent: true }
      );
      this.form.updateValueAndValidity();
    });
  }

  navigateToEvaluation(element: unknown) {
    this.router.navigate([`/eval/${(element as { code: string }).code}`]);
  }
  navigateToForm(element: unknown) {
    this.router.navigate([`/fill-form/${(element as { code: string }).code}`]);
  }
}
