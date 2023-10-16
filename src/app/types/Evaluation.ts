import { AnyFieldConfig } from './FieldConfig';

type CustomDateType = string;

type Delimitation = {
  other: string;
  timePeriod: {
    startDate: CustomDateType;
    endDate: CustomDateType;
  };
  geo: string;
  actors: string[];
};

type EvalTeamMember = {
  name: string;
  role: string;
  type: 'leader' | 'member' | 'other';
};

type ToolTechnique = {
  name: string;
  description: string;
  useCase: string;
};

type Criteria = {
  text: string;
};

type Measurement = {
  date: CustomDateType;
  value: string | number;
};

type Indicator = {
  name: string;
  measurements: Measurement[];
  targetValue?: string;
};

type Intervention = {
  name: string;
  problemToFix: string;
  strategicPlan: string;
  otherInterventions: string;
  blockers: string;
  indicators: Indicator[];
};
type ConclusionRecomendation = {
  text: string;
  reason: string;
};

export type Evaluation = {
  code: string;
  intervention: Intervention;

  org: string;
  lifeCycle: string;
  goal: string;
  reason: string;
  utility: string;
  delimitation: Delimitation;

  teamMembers: EvalTeamMember[];

  form: AnyFieldConfig[];
  responses: Record<string, string>[];

  tools: ToolTechnique[];
  techniques: ToolTechnique[];
  criteria: Criteria[];
  indicators: Indicator[];

  conclusions: ConclusionRecomendation[];
  recomendations: ConclusionRecomendation[];
};

export type OldEvaluation = {
  code: string;
  form?: AnyFieldConfig[];
  responses?: Record<string, string>[];
  'analysis-planning': Record<string, any>;
  'intervention-context': Record<string, any>;
  'eval-design': Record<string, any>;
  'field-work': Record<string, any>;
  'eval-conclusions': Record<string, any>;
};
