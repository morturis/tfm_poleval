import { Injectable } from '@angular/core';
import { Evaluation, EvaluationProperties } from 'src/app/types/Evaluation';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  constructor(private storage: StorageService) {}

  get(code: string): Evaluation | undefined {
    const evaluation = this.storage.getObject<Evaluation>('code');
    return evaluation;
  }

  create(code: string): Evaluation {
    const evaluation: Evaluation = {
      'analysis-planning': {},
      'intervention-context': {},
      'eval-design': {},
      form: [],
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

    return evaluation;
  }
}
