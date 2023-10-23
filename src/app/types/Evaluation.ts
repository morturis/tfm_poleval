import { AnyFieldConfig } from './FieldConfig';

type CustomDateType = string;

export type Delimitation = {
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
  type: 'intervention' | 'evaluation';
};

type Intervention = {
  name: string;
  problemToFix: string;
  strategicPlan: string;
  otherInterventions: string;
  blockers: string;
};
type ConclusionRecomendation = {
  text: string;
  reason: string;
};

export type Evaluation = {
  code: string;
  published: boolean;
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
  published: boolean;
  delimitations_geo: string;
  delimitations_time_period: {
    start: any;
    end: any;
  };
  actor_table: {
    [k: number]: { actor_name: string };
  };
  other_delimitations: string;
  evaluation_utility: string;
  evaluation_reasoning: string;
  evaluation_objective: string;
  intervention_life_cycle: string;
  evaluation_org: string;
  intervention_unexpected_interruptions: string;
  intervention_simultaneous: string;
  intervention_upper_level_strategy: string;
  intervention_problem_to_solve: string;
  intervention_name: string;
  recomendation_table: any;
  conclusion_table: any;
  intervention_indicators: any;
  eval_indicators_table: any;
  criterion_table: any;
  techniques_table: any;
  tools_table: any;
  other_participants_table: any;
  team_member_table: any;
  team_manager_table: any;
  responses: any;
  form: any;
};
