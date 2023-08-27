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
      intervention_simultaneous: null,
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
        header: '¿Nombre?',
        labelOnLeftSide: true,
        field: 'a0dc8735-b173-4ad0-8b12-7352d80e7e99',
        disableTranslation: true,
      },
      {
        fieldType: 'input',
        header: '¿Color favorito?',
        labelOnLeftSide: true,
        field: '073594b9-03f9-417b-96c0-38c527805da9',
        disableTranslation: true,
      },
      {
        fieldType: 'dropdown',
        header: '¿Día de la semana favorito?',
        labelOnLeftSide: true,
        field: '207e68a9-c825-4b51-8534-1d15ae99cbe1',
        disableTranslation: true,
        items: [
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
          'Domingo',
        ],
      },
    ],
    responses: [
      {
        'a0dc8735-b173-4ad0-8b12-7352d80e7e99': 'Mr. Dev',
        '073594b9-03f9-417b-96c0-38c527805da9': 'Gris',
        '207e68a9-c825-4b51-8534-1d15ae99cbe1': 'Lunes',
      },
      {
        'a0dc8735-b173-4ad0-8b12-7352d80e7e99': 'Pepito',
        '073594b9-03f9-417b-96c0-38c527805da9': 'Azul',
        '207e68a9-c825-4b51-8534-1d15ae99cbe1': 'Viernes',
      },
    ],
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
