import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evaluation } from 'src/app/types/Evaluation';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';
import { ExportService } from 'src/services/export.service';

@Component({
  selector: 'app-field-work',
  templateUrl: './field-work.component.html',
  styleUrls: ['./field-work.component.scss'],
})
export class FieldWorkComponent {
  @Output() outputEvent = new EventEmitter<any>();
  form_code_to_show!: string;
  evaluation?: Evaluation;

  formQuestions!: (AnyFieldConfig & { responses?: string[] })[];

  constructor(
    private route: ActivatedRoute,
    private evalService: EvaluationService,
    private exportAs: ExportService
  ) {}

  ngOnInit() {
    this.outputEvent.emit({ status: 'VALID' }); //so I can always go to the next step

    //check if we have a form code
    const form_code = this.route.snapshot.paramMap.get('code'); //defaults to null
    this.form_code_to_show = form_code || 'field_work_no_code';

    if (!form_code) {
      this.formQuestions = [];
      return;
    }

    //check if the form code has an evaluation
    this.evaluation = this.evalService.get(form_code);
    if (!this.evaluation) return;

    //check if the evaluation has questions and responses
    this.formQuestions = this.evaluation.form || [];
    if (!this.evaluation.responses) return;

    //parse responses
    const responses: Record<string, any> = {};
    this.evaluation.responses?.forEach((response) => {
      Object.entries(response).forEach(([questionCode, response]) => {
        if (!responses[questionCode]) responses[questionCode] = [];

        if (Array.isArray(response)) {
          responses[questionCode].push(...response);
        } else {
          responses[questionCode].push(response);
        }
      });
    });

    this.formQuestions.map(
      (question) => (question.responses = responses[question.field])
    );
  }

  getQuestionType(config: AnyFieldConfig): string {
    if (config.fieldType == 'input') return 'drag_drop_input';

    if (config.fieldType == 'dropdown')
      return config.multiple
        ? 'drag_drop_multiple_dropdown'
        : 'drag_drop_dropdown';

    return 'ERROR';
  }

  getNumberOfResponses(config: AnyFieldConfig): number {
    let numberOfResponses = 0;
    this.evaluation?.responses?.map((resp) => {
      if (resp[config.field]) numberOfResponses++;
    });
    return numberOfResponses;
  }

  downloadCsv() {
    if (!this.evaluation?.responses?.length) return;

    const fieldToHeaderMap = new Map<string, string>();
    this.formQuestions.forEach((question) => {
      fieldToHeaderMap.set(question.field, question.header);
    });

    const responsesByHeader: Record<string, any>[] = [];
    this.evaluation.responses.forEach((response) => {
      const transformedResponse: Record<string, any> = {};
      Object.entries(response).forEach(([questionField, responseValue]) => {
        transformedResponse[fieldToHeaderMap.get(questionField) || ''] =
          responseValue;
      });

      responsesByHeader.push(transformedResponse);
    });

    this.exportAs.csv(responsesByHeader);
  }
}
