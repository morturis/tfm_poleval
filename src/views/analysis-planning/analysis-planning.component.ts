import { Component } from '@angular/core';
import { AnyFieldConfig, ColumnConfig } from '../../app/types/FieldConfig';
import { TranslationService } from 'src/services/translation-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-analysis-planning',
  templateUrl: './analysis-planning.component.html',
  styleUrls: ['./analysis-planning.component.scss'],
})
export class AnalysisPlanningComponent {
  fieldsConfig: AnyFieldConfig[] = [
    {
      header: 'intervention_name',
      field: 'intervention_name',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'intervention_name_placeholder',
      info: 'intervention_name_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    {
      header: 'evaluation_org',
      field: 'evaluation_org',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_org_placeholder',
      info: 'evaluation_org_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    {
      header: 'evaluation_objective',
      field: 'evaluation_objective',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_objective_placeholder',
      info: 'evaluation_objective_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    {
      header: 'evaluation_reasoning',
      field: 'evaluation_reasoning',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_reasoning_placeholder',
      info: 'evaluation_reasoning_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    {
      header: 'evaluation_utility',
      field: 'evaluation_utility',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'evaluation_utility_placeholder',
      info: 'evaluation_utility_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    //Delimitar TODO
    //Tabla actores intervencion TODO

    {
      header: 'other_delimitations',
      field: 'other_delimitations',
      defaultValue: undefined,
      viewOnly: false,
      labelOnLeftSide: true,
      placeholder: 'other_delimitations_placeholder',
      info: 'other_delimitations_info',
    },
    //Actores a entrevistar TODO

    //Estrategia TODO
    //Equipo TODO
    //Otros colaboradores TODO
    //Herramientas TODO
  ];

  form!: FormGroup; //definite assignment

  constructor(public ts: TranslationService, private fb: FormBuilder) {
    this.form = this.fb.group(
      this.fieldsConfig.reduce((accum, column: AnyFieldConfig) => {
        return {
          ...accum,
          [column.field]: [
            column.defaultValue,
            { validators: column.validators },
          ],
        };
      }, {} as any)
    );
  }

  getFormControl(name: string) {
    return this.form.get(name) as FormControl;
  }
}
