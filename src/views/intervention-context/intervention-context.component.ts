import { Component } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { ColumnConfig } from 'src/app/types/FieldConfig';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-intervention-context',
  templateUrl: './intervention-context.component.html',
  styleUrls: ['./intervention-context.component.scss'],
})
export class InterventionContextComponent {
  columnsConfig: ColumnConfig[] = [
    {
      header: 'intervention_objective',
      field: 'intervention_objective',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_objective_placeholder',
      info: 'intervention_objective_info',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
    //Tabla indicadores TODO
    //Label contexto TODO

    {
      header: 'intervention_problem_to_solve',
      field: 'intervention_problem_to_solve',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_problem_to_solve_placeholder',
      info: 'intervention_problem_to_solve_info',
    },
    {
      header: 'intervention_upper_level_strategy',
      field: 'intervention_upper_level_strategy',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_upper_level_strategy_placeholder',
      info: 'intervention_upper_level_strategy_info',
    },
    {
      header: 'intervention_simultaneous_opposed',
      field: 'intervention_simultaneous_opposed',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_simultaneous_opposed_placeholder',
      info: 'intervention_simultaneous_opposed_info',
    },
    //Actores tabla TODO
    //Ciclo de vida multiselector TODO

    {
      header: 'intervention_unexpected_interruptions',
      field: 'intervention_unexpected_interruptions',
      defaultValue: undefined,
      viewOnly: false,
      placeholder: 'intervention_unexpected_interruptions_placeholder',
      info: 'intervention_unexpected_interruptions_info',
    },
  ];

  form!: FormGroup; //definite assignment

  constructor(public ts: TranslationService, private fb: FormBuilder) {
    this.form = this.fb.group(
      this.columnsConfig.reduce((accum, column: ColumnConfig) => {
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
