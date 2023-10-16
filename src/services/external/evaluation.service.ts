import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation, OldEvaluation } from 'src/app/types/Evaluation';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { NO_TOAST } from '../http-interceptor.service';
import { StorageService } from '../storage.service';

const baseUrl = 'http://localhost';
const basePort = '3000';

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

  constructor(private http: HttpClient, private localStorage: StorageService) {}

  get(code: string): Observable<Evaluation> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.get<Evaluation>(
      `${baseUrl}:${basePort}/evaluation/${code}`,
      { headers }
    );
  }

  checkExistence(code: string): Observable<Evaluation> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.get<Evaluation>(
      `${baseUrl}:${basePort}/evaluation/${code}/exists`,
      { headers, context: new HttpContext().set(NO_TOAST, true) }
    );
  }

  create(evaluation: Partial<Evaluation>): Observable<Evaluation> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.post<Evaluation>(
      `${baseUrl}:${basePort}/evaluation`,
      evaluation,
      { headers }
    );
  }

  update(
    evaluation: Partial<OldEvaluation> & Pick<OldEvaluation, 'code'>
  ): Observable<Evaluation> {
    const { code } = evaluation;
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    const mappedEvaluation = this.transformToApiObject(evaluation);
    return this.http.patch<Evaluation>(
      `${baseUrl}:${basePort}/evaluation/${code}`,
      mappedEvaluation,
      { headers }
    );
  }

  getForm(code: string): Observable<AnyFieldConfig[]> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.get<AnyFieldConfig[]>(
      `${baseUrl}:${basePort}/evaluation/${code}/form`,
      { headers }
    );
  }

  saveAnswer(
    code: string,
    answer: Record<string, string>
  ): Observable<Record<string, string>> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.post<Record<string, string>>(
      `${baseUrl}:${basePort}/evaluation/${code}/answer`,
      answer,
      { headers }
    );
  }

  getByLoggedInUser(): Observable<Record<string, Record<string, string>[]>> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.get<Record<string, Record<string, string>[]>>(
      `${baseUrl}:${basePort}/evaluation/all`,
      { headers }
    );
  }

  private transformToApiObject(
    e: Partial<OldEvaluation> & Pick<OldEvaluation, 'code'>
  ): Partial<Evaluation> {
    const mappedTeamLeaders = Object.values(
      e['analysis-planning']?.['team_manager_table'] || []
    ).map((m) => {
      return {
        name: ((m as any).manager_name as string) || undefined,
        role: ((m as any).manager_role as string) || undefined,
        type: 'leader' as 'leader' | 'member' | 'other',
      };
    });
    const mappedTeamMembers = Object.values(
      e['analysis-planning']?.['team_member_table'] || []
    ).map((m) => {
      return {
        name: ((m as any).team_member_name as string) || undefined,
        role: ((m as any).team_member_role as string) || undefined,
        type: 'member' as 'leader' | 'member' | 'other',
      };
    });
    const mappedTeamOthers = Object.values(
      e['analysis-planning']?.['other_participants_table'] || []
    ).map((m) => {
      return {
        name: ((m as any).other_participants_name as string) || undefined,
        role: ((m as any).other_participants_role as string) || undefined,
        type: 'other' as 'leader' | 'member' | 'other',
      };
    });
    const mappedDelimitations = undefined;

    const mappedTools = Object.values(
      e['eval-design']?.['tools_table'] || []
    ).map((tool) => {
      return {
        name: (tool as any).tools_name || undefined,
        description: (tool as any).tools_brief_description || undefined,
        useCase: (tool as any).tools_use_case || undefined,
      };
    });
    const mappedTechniques = Object.values(
      e['eval-design']?.['techniques_table'] || []
    ).map((technique) => {
      return {
        name: (technique as any).tools_name || undefined,
        description: (technique as any).tools_brief_description || undefined,
        useCase: (technique as any).tools_use_case || undefined,
      };
    });
    const mappedCriteria = Object.values(
      e['eval-design']?.['criterion_table'] || []
    ).map((criteria) => {
      return {
        text: (criteria as any).criterion_description || undefined,
      };
    });
    const mappedEvalIndicators = Object.values(
      e['eval-design']?.['eval_indicators_table'] || []
    ).map((indicator) => {
      return {
        name: (indicator as any).eval_indicator_name,
        targetValue: (indicator as any).eval_indicators_startvalue, //TODO remove
      };
    });

    const mappedInterventionIndicators = Object.values(
      e['intervention-context']?.['intervention_indicators'] || []
    ).map((indicator) => {
      return {
        name: (indicator as any).intervention_indicators_name,
        targetValue: (indicator as any).intervention_indicators_targetvalue,
      };
    });

    const mappedConclusions = Object.values(
      e['eval-conclusions']?.['conclusion_table'] || []
    ).map((conclusion) => {
      return {
        text: (conclusion as any).conclusion_description,
        reason: (conclusion as any).conclusion_based_on,
      };
    });
    const mappedRecomendations = Object.values(
      e['eval-conclusions']?.['recomendation_table'] || []
    ).map((reason) => {
      return {
        text: (reason as any).recomendation_description,
        reason: (reason as any).recomendation_based_on,
      };
    });

    const result = {
      code: e.code,

      intervention: {
        name: e['analysis-planning']?.['intervention_name'] || undefined,
        problemToFix:
          e['intervention-context']?.['intervention_problem_to_solve'] ||
          undefined,
        strategicPlan:
          e['intervention-context']?.['intervention_upper_level_strategy'] ||
          undefined,
        otherInterventions:
          e['intervention-context']?.['intervention_simultaneous'] || undefined,
        blockers:
          e['intervention-context']?.[
            'intervention_unexpected_interruptions'
          ] || undefined,
        indicators: [...mappedInterventionIndicators],
      },

      org: e['analysis-planning']?.['evaluation_org'] || undefined,
      lifeCycle:
        e['analysis-planning']?.['intervention_life_cycle'] || undefined,
      goal: e['analysis-planning']?.['evaluation_objective'] || undefined,
      reason: e['analysis-planning']?.['evaluation_reasoning'] || undefined,
      utility: e['analysis-planning']?.['evaluation_utility'] || undefined,

      delimitation: mappedDelimitations,

      teamMembers: [
        ...mappedTeamLeaders,
        ...mappedTeamMembers,
        ...mappedTeamOthers,
      ],
      form: e.form || [],
      responses: e.responses || [],

      tools: [...mappedTools],
      techniques: [...mappedTechniques],
      criteria: [...mappedCriteria],
      indicators: [...mappedEvalIndicators],

      conclusions: [...mappedConclusions],
      recomendations: [...mappedRecomendations],
    };

    Object.keys(result).map((k) => {
      if (!result[k]) delete result[k];
    });

    Object.keys(result).map((k) => {
      Object.keys(result[k]).map((k2) => {
        if (!result[k][k2]) delete result[k][k2];
      });
    });
    return result as any;
  }

  public transformFromApiObject(
    e: Evaluation
  ): Partial<OldEvaluation> & Pick<OldEvaluation, 'code'> {
    const result = {
      code: e.code,
      'analysis-planning': {
        team_manager_table: e.teamMembers
          .filter((m) => m.type === 'leader')
          .reduce((accum, curr, index) => {
            return {
              ...accum,
              [index]: {
                manager_name: curr.name,
                manager_role: curr.role,
              },
            };
          }, {}),
        team_member_table: e.teamMembers
          .filter((m) => m.type === 'member')
          .reduce((accum, curr, index) => {
            return {
              ...accum,
              [index]: {
                team_member_name: curr.name,
                team_member_role: curr.role,
              },
            };
          }, {}),
        other_participants_table: e.teamMembers
          .filter((m) => m.type === 'other')
          .reduce((accum, curr, index) => {
            return {
              ...accum,
              [index]: {
                other_participants_name: curr.name,
                other_participants_role: curr.role,
              },
            };
          }, {}),
        tools_table: e.tools?.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              tools_name: curr.name,
              tools_brief_description: curr.description,
              tools_use_case: curr.useCase,
            },
          };
        }, {}),
        techniques_table: e.techniques?.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              tools_name: curr.name,
              tools_brief_description: curr.description,
              tools_use_case: curr.useCase,
            },
          };
        }, {}),

        actor_table: e.delimitation?.actors?.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              actor_name: curr,
            },
          };
        }, {}),
        delimitations_geo: e.delimitation?.geo,
        delimitations_time_period: '',
        other_delimitations: e.delimitation?.other,

        intervention_name: e.intervention.name,
        intervention_life_cycle: e.lifeCycle,
        evaluation_org: e.org,
        evaluation_objective: e.goal,
        evaluation_reasoning: e.reason,
        evaluation_utility: e.utility,
      },
      'intervention-context': {
        intervention_problem_to_solve: e.intervention.problemToFix,
        intervention_upper_level_strategy: e.intervention.strategicPlan,
        intervention_simultaneous: e.intervention.otherInterventions,
        intervention_unexpected_interruptions: e.intervention.blockers,
        intervention_indicators: e.intervention.indicators.reduce(
          (accum, curr, index) => {
            return {
              ...accum,
              [index]: {
                intervention_indicators_name: curr.name,
                intervention_indicators_targetvalue: curr.targetValue,
              },
            };
          },
          {}
        ),
      },
      'eval-design': {
        tools_table: e.tools.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              tools_name: curr.name,
              tools_use_case: curr.useCase,
              tools_brief_description: curr.description,
            },
          };
        }, {}),

        technique_table: e.techniques.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              technique_name: curr.name,
              technique_use_case: curr.useCase,
              technique_brief_description: curr.description,
            },
          };
        }, {}),
        criterion_table: e.criteria.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              criterion_description: curr.text,
            },
          };
        }, {}),
        eval_indicators_table: e.indicators.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              eval_indicator_name: curr.name,
            },
          };
        }, {}),
      },
      'eval-conclusions': {
        conclusion_table: e.conclusions.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              conclusion_based_on: curr.reason,
              conclusion_description: curr.text,
            },
          };
        }, {}),
        recomendation_table: e.recomendations.reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              recomendation_based_on: curr.reason,
              recomendation_description: curr.text,
            },
          };
        }, {}),
      },
    };

    Object.keys(result).map((k) => {
      Object.keys(result[k]).map((k2) => {
        if (!result[k][k2]) delete result[k][k2];
      });
    });
    return result;
  }
}
