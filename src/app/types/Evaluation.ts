import { AnyFieldConfig } from './FieldConfig';

export type Evaluation = {
  'analysis-planning': Record<string, any>;
  'intervention-context': Record<string, any>;
  'eval-design': Record<string, any>;
  form: AnyFieldConfig[];
  responses: any[];
  'field-work': Record<string, any>;
  'eval-conclusions': Record<string, any>;
};

export enum EvaluationProperties {
  'analysis-planning' = 'analysis-planning',
  'intervention-context' = 'intervention-context',
  'eval-design' = 'eval-design',
  form = 'form',
  responses = 'responses',
  'field-work' = 'field-work',
  'eval-conclusions' = 'eval-conclusions',
}
