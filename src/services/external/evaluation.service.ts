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
    return this.http.put<Evaluation>(
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
      e?.['team_manager_table'] || []
    ).map((m) => {
      return {
        name: ((m as any).manager_name as string) || undefined,
        role: ((m as any).manager_role as string) || undefined,
        type: 'leader' as 'leader' | 'member' | 'other',
      };
    });
    const mappedTeamMembers = Object.values(e?.['team_member_table'] || []).map(
      (m) => {
        return {
          name: ((m as any).team_member_name as string) || undefined,
          role: ((m as any).team_member_role as string) || undefined,
          type: 'member' as 'leader' | 'member' | 'other',
        };
      }
    );
    const mappedTeamOthers = Object.values(
      e?.['other_participants_table'] || []
    ).map((m) => {
      return {
        name: ((m as any).other_participants_name as string) || undefined,
        role: ((m as any).other_participants_role as string) || undefined,
        type: 'other' as 'leader' | 'member' | 'other',
      };
    });
    const mappedDelimitationActors = Object.values(e?.actor_table || {}).map(
      (actor) => {
        actor.actor_name;
      }
    );
    const mappedDelimitations = {
      other: e?.other_delimitations,
      timePeriod: {
        startDate: e.delimitations_time_period?.start,
        endDate: e.delimitations_time_period?.end,
      },
      geo: e?.delimitations_geo,
      actors: mappedDelimitationActors,
    };

    const mappedTools = Object.values(e?.['tools_table'] || []).map((tool) => {
      return {
        name: (tool as any).tools_name || undefined,
        description: (tool as any).tools_brief_description || undefined,
        useCase: (tool as any).tools_use_case || undefined,
      };
    });
    const mappedTechniques = Object.values(e?.['techniques_table'] || []).map(
      (technique) => {
        return {
          name: (technique as any).tools_name || undefined,
          description: (technique as any).tools_brief_description || undefined,
          useCase: (technique as any).tools_use_case || undefined,
        };
      }
    );
    const mappedCriteria = Object.values(e?.['criterion_table'] || []).map(
      (criteria) => {
        return {
          text: (criteria as any).criterion_description || undefined,
        };
      }
    );
    const mappedEvalIndicators = Object.values(
      e?.['eval_indicators_table'] || []
    ).map((indicator) => {
      return {
        name: (indicator as any).eval_indicator_name,
        targetValue: (indicator as any).eval_indicators_startvalue, //TODO remove
        type: 'evaluation',
      };
    });

    const mappedInterventionIndicators = Object.values(
      e?.['intervention_indicators'] || []
    ).map((indicator) => {
      return {
        name: (indicator as any).intervention_indicators_name,
        targetValue: (indicator as any).intervention_indicators_targetvalue,
        type: 'intervention',
      };
    });

    const mappedConclusions = Object.values(e?.['conclusion_table'] || []).map(
      (conclusion) => {
        return {
          text: (conclusion as any).conclusion_description,
          reason: (conclusion as any).conclusion_based_on,
        };
      }
    );
    const mappedRecomendations = Object.values(
      e?.['recomendation_table'] || []
    ).map((reason) => {
      return {
        text: (reason as any).recomendation_description,
        reason: (reason as any).recomendation_based_on,
      };
    });

    const result = {
      code: e.code,
      published: e.published,
      intervention: {
        name: e?.['intervention_name'] || undefined,
        problemToFix: e?.['intervention_problem_to_solve'] || undefined,
        strategicPlan: e?.['intervention_upper_level_strategy'] || undefined,
        otherInterventions: e?.['intervention_simultaneous'] || undefined,
        blockers: e?.['intervention_unexpected_interruptions'] || undefined,
      },

      org: e?.['evaluation_org'] || undefined,
      lifeCycle: e?.['intervention_life_cycle'] || undefined,
      goal: e?.['evaluation_objective'] || undefined,
      reason: e?.['evaluation_reasoning'] || undefined,
      utility: e?.['evaluation_utility'] || undefined,

      delimitation: mappedDelimitations,

      teamMembers: [
        ...mappedTeamLeaders,
        ...mappedTeamMembers,
        ...mappedTeamOthers,
      ],
      form: e.form || [],
      responses: e?.responses || [],

      tools: [...mappedTools],
      techniques: [...mappedTechniques],
      criteria: [...mappedCriteria],
      indicators: [...mappedEvalIndicators, ...mappedInterventionIndicators],

      conclusions: [...mappedConclusions],
      recomendations: [...mappedRecomendations],
    };

    return result as any;
  }

  public transformFromApiObject(
    e: Evaluation
  ): Partial<OldEvaluation> & Pick<OldEvaluation, 'code'> {
    const result = {
      code: e.code,
      published: e.published,
      form: e.form,
      responses: e.responses,
      //analysis planning
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

      actor_table: e.delimitation?.actors?.reduce((accum, curr, index) => {
        return {
          ...accum,
          [index]: {
            actor_name: curr,
          },
        };
      }, {}),
      delimitations_geo: e.delimitation?.geo,
      delimitations_time_period: {
        start: new Date(e.delimitation?.timePeriod?.startDate),
        end: new Date(e.delimitation?.timePeriod?.endDate),
      },
      other_delimitations: e.delimitation?.other,

      //intervention context
      intervention_name: e.intervention.name,
      intervention_life_cycle: e.lifeCycle,
      evaluation_org: e.org,
      evaluation_objective: e.goal,
      evaluation_reasoning: e.reason,
      evaluation_utility: e.utility,

      intervention_problem_to_solve: e.intervention.problemToFix,
      intervention_upper_level_strategy: e.intervention.strategicPlan,
      intervention_simultaneous: e.intervention.otherInterventions,
      intervention_unexpected_interruptions: e.intervention.blockers,
      intervention_indicators: e.indicators
        .filter((indicator) => indicator.type === 'intervention')
        .reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              intervention_indicators_name: curr.name,
              intervention_indicators_targetvalue: curr.targetValue,
            },
          };
        }, {}),

      //eval-design
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
      eval_indicators_table: e.indicators
        .filter((indicator) => indicator.type === 'evaluation')
        .reduce((accum, curr, index) => {
          return {
            ...accum,
            [index]: {
              eval_indicator_name: curr.name,
            },
          };
        }, {}),

      //eval-conclusions
      conclusion_table: e.conclusions?.reduce((accum, curr, index) => {
        return {
          ...accum,
          [index]: {
            conclusion_based_on: curr.reason,
            conclusion_description: curr.text,
          },
        };
      }, {}),
      recomendation_table: e.recomendations?.reduce((accum, curr, index) => {
        return {
          ...accum,
          [index]: {
            recomendation_based_on: curr.reason,
            recomendation_description: curr.text,
          },
        };
      }, {}),
    };

    return result;
  }
}
