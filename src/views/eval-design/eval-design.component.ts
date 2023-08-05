import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs';
import { DynamicFormView } from 'src/app/types/DynamicFormView';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import { EvaluationService } from 'src/services/evaluation.service';

@Component({
  selector: 'app-eval-design',
  templateUrl: './eval-design.component.html',
  styleUrls: ['./eval-design.component.scss'],
})
export class EvalDesignComponent extends DynamicFormView {
  @Output() outputEvent = new EventEmitter<any>();

  constructor(
    fb: FormBuilder,
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {
    super(fb);
    this.buildForm(this.fieldsConfig);
  }

  ngOnInit() {
    //When the validity of the form changes, I throw EventEmitter
    this.form.statusChanges.pipe(distinctUntilChanged()).subscribe((status) => {
      this.outputEvent.emit({ status: status });
    });
    this.outputEvent.emit({ status: this.form.status });

    const formCode = this.route.snapshot.paramMap.get('code');
    if (!formCode)
      throw new Error('Please create a new evaluation from the beginning'); //should never trigger

    //Whenever I make a change to this form, I save it in the storage
    this.form.valueChanges.subscribe((val) => {
      this.evalService.update(
        formCode as string,
        EvaluationProperties['eval-design'],
        val
      );
    });

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.evalService.get(formCode)?.[EvaluationProperties['eval-design']];
    if (savedValue) this.form.patchValue(savedValue, { emitEvent: true });
  }
}
