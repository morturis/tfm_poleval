import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evaluation } from 'src/app/types/Evaluation';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
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

  create(evaluation: Partial<Evaluation>): Observable<Evaluation> {
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.post<Evaluation>(
      `${baseUrl}:${basePort}/evaluation`,
      evaluation,
      { headers }
    );
  }

  update(evaluation: Partial<Evaluation>): Observable<Evaluation> {
    const { code } = evaluation;
    const token = this.localStorage.getObject<string>('token');
    const headers: HttpHeaders = new HttpHeaders().set('x-access-token', token);
    return this.http.patch<Evaluation>(
      `${baseUrl}:${basePort}/evaluation/${code}`,
      evaluation,
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
}
