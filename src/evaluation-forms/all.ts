import { OtherFieldConfig } from 'src/app/types/FieldConfig';
import { analysisPlanningFields } from './analysis-planning';
import { evalDesignFields } from './eval-design';
import { finalReportFields } from './final-report';
import { interventionContextFields } from './intervention-context';

const questionnaireField: OtherFieldConfig = {
  fieldType: 'other',
  header: 'form',
  field: 'form',
};
const responsesField: OtherFieldConfig = {
  fieldType: 'other',
  header: 'responses',
  field: 'responses',
};
export const allEvaluationFormFields = [
  ...analysisPlanningFields,
  ...interventionContextFields,
  ...evalDesignFields,
  ...finalReportFields,
  questionnaireField,
  responsesField,
];
