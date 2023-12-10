import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { AnyFieldConfig } from 'src/app/types/FieldConfig';
import { allEvaluationFormFields } from 'src/evaluation-forms/all';
import { analysisPlanningFields } from 'src/evaluation-forms/analysis-planning';
import { EvaluationService } from 'src/services/external/evaluation.service';

@Component({
  selector: 'app-terms-of-reference',
  templateUrl: './terms-of-reference.component.html',
  styleUrls: ['./terms-of-reference.component.scss'],
})
export class TermsOfReferenceComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();

  override fieldsConfig: AnyFieldConfig[] = [...analysisPlanningFields];
  alreadyHasResponses: boolean = false;

  constructor(
    fb: FormBuilder,
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {
    super(fb);
    this.buildForm(allEvaluationFormFields);
  }

  ngOnInit() {
    //When the validity of the form changes, I throw EventEmitter
    this.form.statusChanges.pipe(distinctUntilChanged()).subscribe((status) => {
      this.outputEvent.emit({ status: status });
    });
    this.outputEvent.emit({ status: this.form.status });

    const formCode = this.route.snapshot.paramMap.get('code');
    if (!formCode)
      throw new Error('Please create a new evaluation from the beginning');

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    this.evalService.get(formCode).subscribe((res) => {
      const transformedValue = this.evalService.transformFromApiObject(res);
      this.form.patchValue(transformedValue, {
        emitEvent: true,
      });
      //This stage should always be disabled
      this.form.disable();
    });
  }
}
