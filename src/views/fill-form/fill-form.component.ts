import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomErrorMessages } from 'src/app/types/CustomErrorMessages';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import { InputConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

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
    private evalService: EvaluationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super(fb);
    this.code = this.route.snapshot.paramMap.get('code'); //defaults to null
  }

  ngOnInit() {
    //Case where no code is selected
    if (!this.code) {
      this.buildForm([this.selectFormCodeInputConfig]);
      return;
    }

    const formJson = this.evalService.get(this.code)?.[
      EvaluationProperties['form']
    ];
    if (formJson) {
      //Add required to all fields
      const processedForm = formJson.map((field) => {
        return {
          ...field,
          validators: [Validators.required],
          errorMessages: {
            ...CustomErrorMessages.required,
          },
        };
      });
      this.buildForm(processedForm);
      return;
    }
    this.buildForm([this.selectFormCodeInputConfig]);
  }

  selectCode() {
    const codeOfTheFormToFill = this.form.value.code;

    if (!this.evalService.get(codeOfTheFormToFill)) {
      alert('There is no evaluation with that code');
      return;
    }
    this.router.navigate([`/fill-form/${codeOfTheFormToFill}`]);
  }

  saveResponse() {
    if (!this.code) return; //should never trigger
    const allResponses = this.evalService.get(this.code)?.responses;
    if (!allResponses) return; //should never trigger, responses defaults to []

    const newResponse = this.form.value;
    allResponses.push(newResponse);
    this.evalService.update(
      this.code,
      EvaluationProperties.responses,
      allResponses
    );
    alert('saved');
    this.router.navigate(['']);
  }
}
