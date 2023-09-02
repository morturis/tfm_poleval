import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';

@Component({
  selector: 'app-field-work',
  templateUrl: './field-work.component.html',
  styleUrls: ['./field-work.component.scss'],
})
export class FieldWorkComponent {
  @Output() outputEvent = new EventEmitter<any>();
  form_code_to_show!: string;

  formQuestions!: (AnyFieldConfig & { responses?: string[] })[];

  constructor(
    private route: ActivatedRoute,
    private evalService: EvaluationService
  ) {}

  ngOnInit() {
    this.outputEvent.emit({ status: 'VALID' }); //so I can always go to the next step

    const form_code = this.route.snapshot.paramMap.get('code'); //defaults to null
    this.form_code_to_show = form_code || 'field_work_no_code';

    if (!form_code) {
      this.formQuestions = [];
      return;
    }
    const evaluation = this.evalService.get(form_code);
    if (!evaluation) return;

    this.formQuestions = evaluation.form || [];

    if (!evaluation.responses) return;

    const responses: Record<string, any> = {};
    evaluation.responses?.forEach((response) => {
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
}
