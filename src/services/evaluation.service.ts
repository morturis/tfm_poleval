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
      intervention_life_cycle: 'intervention_life_cycle_1',
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
      intervention_problem_to_solve: 'Las luces halógenas son muy feas',
      intervention_upper_level_strategy: 'Ninguna',
      intervention_simultaneous: null,
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
      criterion_table: {
        '0': {
          criterion_description: 'Evitar mencionar la palabra "accidente"',
        },
      },
      eval_indicators_table: null,
    },
    form: [
      {
        fieldType: 'input',
        header: '¿Nombre?',
        labelOnLeftSide: true,
        field: '5147ba84-f1ed-4de1-b8d9-3b28dc48173a',
        disableTranslation: true,
      },
      {
        fieldType: 'input',
        header: '¿Color favorito?',
        labelOnLeftSide: true,
        field: 'aad929e1-5418-4c05-9f77-860bbca5b5cd',
        disableTranslation: true,
      },
      {
        fieldType: 'dropdown',
        header: '¿Día de la semana favorito?',
        labelOnLeftSide: true,
        field: '78d6bce7-b962-43d4-bde0-a554830b7adf',
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
      {
        fieldType: 'dropdown',
        header: '¿Día de la semana favorito? (Múltiples opciones)',
        labelOnLeftSide: true,
        field: 'ca1daaa0-e225-462b-8752-241cb906145f',
        disableTranslation: true,
        multiple: true,
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
        '5147ba84-f1ed-4de1-b8d9-3b28dc48173a': 'Pepe',
        'aad929e1-5418-4c05-9f77-860bbca5b5cd': 'Rojo',
        '78d6bce7-b962-43d4-bde0-a554830b7adf': 'Lunes',
        'ca1daaa0-e225-462b-8752-241cb906145f': [
          'Miércoles',
          'Jueves',
          'Viernes',
        ],
      },
      {
        '5147ba84-f1ed-4de1-b8d9-3b28dc48173a': 'Miguel',
        'aad929e1-5418-4c05-9f77-860bbca5b5cd': 'Azul',
        '78d6bce7-b962-43d4-bde0-a554830b7adf': 'Martes',
        'ca1daaa0-e225-462b-8752-241cb906145f': [
          'Lunes',
          'Martes',
          'Miércoles',
        ],
      },
      {
        '5147ba84-f1ed-4de1-b8d9-3b28dc48173a': 'Juan',
        'aad929e1-5418-4c05-9f77-860bbca5b5cd': 'Azul',
        '78d6bce7-b962-43d4-bde0-a554830b7adf': 'Martes',
        'ca1daaa0-e225-462b-8752-241cb906145f': ['Martes', 'Viernes', 'Sábado'],
      },
    ],
    'field-work': {},
    'eval-conclusions': {},
  };

  constructor(
    private storage: StorageService //private loginService: LoginService
  ) {
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

  getByLoggedInUser(): any[] {
    //const user = this.loginService.getLoggedInUsername();
    //const savedEval = this.storage.getObject<Evaluation>('DEFAULT');
    //TODO
    return [{ eval_name: 'DEFAULT' }];
  }
}
