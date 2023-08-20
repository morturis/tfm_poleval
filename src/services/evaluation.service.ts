import { Injectable } from '@angular/core';
import { Evaluation, EvaluationProperties } from 'src/app/types/Evaluation';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  defaultEval = {
    'analysis-planning': {
      intervention_name: 'Ley 45 /23 sobre Luces Halógenas',
      evaluation_org: 'Equipo A',
      intervention_life_cycle: 'intervention_life_cycle_3',
      evaluation_objective: 'Evaluar posibles incumplimientos',
      evaluation_reasoning: 'Se pretende extenderla a otros tipos de luces',
      evaluation_utility: 'Aportar evidencias sobre posibles incumplimientos',
      delimitations_geo: null,
      delimitations_time_period: null,
      actor_table: null,
      other_delimitations: null,
      eval_strategy: 'Park the bus',
      team_manager_table: null,
      team_member_table: null,
      other_participants_table: null,
      tools_table: null,
    },
    'intervention-context': {
      intervention_objective: 'Prohibir el uso de Luces Halógenas',
      intervention_problem_to_solve: 'Las luces halógenas son muy feas',
      intervention_upper_level_strategy: 'Ninguna',
      intervention_simultaneous_opposed: null,
      intervention_implementation_level: 'intervention_implementation_level_2',
      intervention_unexpected_interruptions:
        'Sentencia 24 / 87 del Tribunal Constitucional',
      intervention_indicators: null,
    },
    'eval-design': {
      tools_table: {
        '0': {
          tools_name: 'Herramienta bonita',
          tools_brief_description: 'Es una herramienta bonita que quiero usar',
          tools_use_case: 'Uso misceláneo',
        },
      },
      criterion_table: null,
      eval_indicators_table: null,
    },
    form: [
      {
        fieldType: 'input',
        labelOnLeftSide: true,
        header: 'Pregunta 1',
        field: '544c1b22-9003-4454-be24-8639cc6061ed',
      },
      {
        fieldType: 'input',
        labelOnLeftSide: true,
        header: 'Pregunta 2',
        field: 'dd20447f-a24b-49b9-9eab-72538ca0d022',
      },
      {
        fieldType: 'input',
        labelOnLeftSide: true,
        header: 'Pregunta 3',
        field: 'b12ffbcb-5b3b-4f47-af4f-8343d82dcadc',
      },
    ],
    responses: [],
    'field-work': {},
    'eval-conclusions': {},
  };

  constructor(private storage: StorageService) {
    if (!this.storage.getObject('DEFAULT'))
      this.storage.setObject('DEFAULT', this.defaultEval);
  }

  get(code: string): Evaluation | undefined {
    const evaluation = this.storage.getObject<Evaluation>(code);
    return evaluation;
  }

  create(code: string): Evaluation {
    const evaluation: Evaluation = {
      'analysis-planning': {},
      'intervention-context': {},
      'eval-design': {},
      form: [],
      responses: [],
      'field-work': {},
      'eval-conclusions': {},
    };
    this.storage.setObject(code, evaluation);
    return evaluation;
  }

  update(
    code: string,
    field: EvaluationProperties,
    value: any
  ): Evaluation | undefined {
    const evaluation = this.get(code);
    if (!evaluation) return;

    evaluation[field] = value;
    this.storage.setObject(code, evaluation);

    return evaluation;
  }
}
