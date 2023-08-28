import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import {
  AnyFieldConfig,
  DropdownConfig,
  InputConfig,
} from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';
import { v4 as uuidv4 } from 'uuid';

class DragDropDivConfig<T> {
  text!: string;
  componentType!: Type<T>;
  componentInstance?: T;
  buildFromConfig!: (componentInstance: any) => void; //TODO should be (any extension of T)=> void
}
@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.scss'],
})
export class FormMakerComponent {
  @Output() outputEvent = new EventEmitter<any>();
  options: DragDropDivConfig<DragDropBaseComponent>[] = [
    {
      text: 'drag_drop_input',
      componentType: DragDropInputComponent,
      buildFromConfig: (componentInstance: DragDropInputComponent) =>
        (componentInstance.isInResult = false),
    },

    {
      text: 'drag_drop_dropdown',
      componentType: DragDropDropdownComponent,
      buildFromConfig: (componentInstance: DragDropDropdownComponent) =>
        (componentInstance.isInResult = false),
    },

    {
      text: 'drag_drop_multiple_dropdown',
      componentType: DragDropMultipleDropdownComponent,
      buildFromConfig: (componentInstance: DragDropMultipleDropdownComponent) =>
        (componentInstance.isInResult = false),
    },
  ];

  result: DragDropDivConfig<DragDropBaseComponent>[] = [
    {
      text: 'drag_drop_input',
      componentType: DragDropInputComponent,
      buildFromConfig: (componentInstance: DragDropInputComponent) =>
        (componentInstance.isInResult = true),
    },
  ];

  constructor(
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.outputEvent.emit({ status: 'INVALID' });
  }

  ngAfterViewInit() {
    const formCode = this.route.snapshot.paramMap.get('code');
    if (!formCode)
      throw new Error('Please create a new evaluation from the beginning'); //should never trigger

    //Whenever I enter this form, I check for previously saved values
    //NOTE: this does not get the value from storage when moving between stages
    const savedValue =
      this.evalService.get(formCode)?.[EvaluationProperties['form']];
    if (!savedValue) return;

    //Empty results. This is to avoid contamination
    this.result.splice(0, this.result.length);

    //Fill form with previously saved values
    savedValue.forEach((fieldConfig: AnyFieldConfig) => {
      if (fieldConfig.fieldType === 'input') {
        this.result.push({
          text: 'drag_drop_input',
          componentType: DragDropInputComponent,
          buildFromConfig: DragDropInputComponent.buildFromConfig(
            fieldConfig,
            true
          ),
        });
      } else if (fieldConfig.fieldType === 'dropdown') {
        this.result.push({
          text: 'drag_drop_dropdown',
          componentType: DragDropDropdownComponent,
          buildFromConfig: DragDropDropdownComponent.buildFromConfig(
            fieldConfig,
            true
          ),
        });
      }
    });
    //Tell parent component we are valid to go to next step
    this.outputEvent.emit({ status: 'VALID' });
  }

  droppedInOptionsList(event: CdkDragDrop<any>) {
    //Options -> Options means reorder
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    //Result -> Options means remove from Result
    if (event.previousContainer !== event.container && this.result.length > 1) {
      //event.previousContainer.removeItem(event.item);
      this.result.splice(event.previousIndex, 1);
    }
  }

  droppedInResultList(event: CdkDragDrop<any>) {
    //Result -> Result means reorder
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    //Options -> Result means add new copy to Result
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let k = event.container.data[event.currentIndex];
      //k.buildFromConfig = () => {};
      k.componentInstance = undefined;
      console.log(k);
    }
  }
  setInResult = (comp: DragDropBaseComponent) => {
    comp.isInResult = true;
  };
  saveForm() {
    try {
      const createdForm: AnyFieldConfig[] = this.result.map((div) => {
        if (!div.componentInstance) throw new Error('Component not instanced'); //should never trigger
        return div.componentInstance.getForm(); //could throw errors
      });
      const formCode = this.route.snapshot.paramMap.get('code');
      if (!formCode)
        throw new Error('Please create a new evaluation from the beginning'); //should never trigger
      this.evalService.update(
        formCode as string,
        EvaluationProperties.form,
        createdForm
      );
      //Tell parent component we are valid to go to next step
      this.outputEvent.emit({ status: 'VALID' });
    } catch (e) {
      //Catch possible errors in the form
      alert(e);
    }
  }
}

//Sub components for all types of questions + text fields
abstract class DragDropBaseComponent {
  form!: FormGroup;
  fb!: FormBuilder;
  isInResult: boolean = false;
  error: boolean = false;
  getForm!: () => AnyFieldConfig;
  static buildFromConfig: (
    config: any,
    isInResult: boolean
  ) => (component: any) => void;
  constructor(fb: FormBuilder) {}
}
@Component({
  selector: 'drag-and-drop-input',
  template: `
    <form [formGroup]="this.form" class="d-flex flex-column border rounded">
      <div class="d-flex flex-column align-items-center">
        <div class="input-group">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_input_header' | translate }}
          </div>
          <input
            [ngClass]="{
              'border-danger':
                this.form.controls['header'].status === 'INVALID' && isInResult
            }"
            class="border text-center form-control"
            [readonly]="!isInResult"
            matInput
            formControlName="header"
            [placeholder]="'drag_drop_input_placeholder' | translate"
          />
        </div>

        <div class="input-group mt-2">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_input_answer' | translate }}
          </div>
          <input
            class="border text-center form-control bg-light"
            value="______________________________________________________________________________"
            readonly="true"
            matInput
          />
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./form-maker.component.scss'],
})
export class DragDropInputComponent extends DragDropBaseComponent {
  constructor(fb: FormBuilder) {
    super(fb);
    this.form = fb.group({
      ['header']: ['', { validators: Validators.required }],
    });
  }
  static override buildFromConfig =
    (config: InputConfig, isInResult: boolean) =>
    (componentInstance: DragDropInputComponent) => {
      componentInstance.isInResult = isInResult;
      componentInstance.form.patchValue({
        ['header']: config.header,
      });
    };

  override getForm = () => {
    if (this.form.controls['header'].errors)
      throw new Error('error_required_field');
    const fc: InputConfig = {
      fieldType: 'input',
      header: this.form.value['header'],
      placeholder: undefined,
      labelOnLeftSide: true,
      field: uuidv4(),
      disableTranslation: true,
    };
    return fc;
  };
}

@Component({
  selector: 'drag-and-drop-dropdown',
  template: `
    <form [formGroup]="this.form" class="border rounded">
      <div class="d-flex flex-column align-items-center">
        <div class="input-group">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_input_header' | translate }}
          </div>
          <input
            class="border text-center form-control"
            matInput
            [ngClass]="{
              'border-danger':
                this.form.controls['header'].status === 'INVALID' && isInResult
            }"
            [readonly]="!isInResult"
            matInput
            formControlName="header"
            [placeholder]="'drag_drop_input_placeholder' | translate"
          />
        </div>
        <span class="text-center">
          {{ 'drag_drop_dropdown_separate_lines' | translate }}
        </span>
        <div class="input-group">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_dropdown_options' | translate }}
          </div>
          <textarea
            class="text-center form-control"
            [ngClass]="{
              'border-danger':
                this.form.controls['items'].status === 'INVALID' && isInResult
            }"
            [readonly]="!isInResult"
            matInput
            formControlName="items"
            [placeholder]="'drag_drop_dropdown_placeholder' | translate"
          ></textarea>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./form-maker.component.scss'],
})
export class DragDropDropdownComponent extends DragDropBaseComponent {
  constructor(fb: FormBuilder) {
    super(fb);
    this.form = fb.group({
      ['header']: ['', { validators: Validators.required }],
      ['items']: ['', { validators: Validators.required }],
    });
  }
  static override buildFromConfig =
    (config: DropdownConfig, isInResult: boolean) =>
    (componentInstance: DragDropDropdownComponent) => {
      componentInstance.isInResult = isInResult;
      componentInstance.form.patchValue({
        ['header']: config.header,
        ['items']: config.items.join('\n'),
      });
    };
  override getForm = () => {
    if (
      this.form.controls['header'].errors ||
      this.form.controls['items'].errors
    )
      throw new Error('error_required_field');
    const fc: DropdownConfig = {
      fieldType: 'dropdown',
      header: this.form.value['header'],
      labelOnLeftSide: true,
      field: uuidv4(),
      disableTranslation: true,
      items: this.form.value['items']
        .split('\n')
        .filter((str: string | any[]) => str && str.length > 0), //removes empties
    };
    return fc;
  };
}

@Component({
  selector: 'drag-and-drop-multiple-dropdown',
  template: `
    <form [formGroup]="this.form" class="border rounded">
      <div class="d-flex flex-column align-items-center">
        <div class="input-group">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_input_header' | translate }}
          </div>
          <input
            class="border text-center form-control"
            matInput
            [ngClass]="{
              'border-danger':
                this.form.controls['header'].status === 'INVALID' && isInResult
            }"
            [readonly]="!isInResult"
            matInput
            formControlName="header"
            [placeholder]="'drag_drop_input_placeholder' | translate"
          />
        </div>
        <span class="text-center">
          {{ 'drag_drop_multiple_dropdown_separate_lines' | translate }}
        </span>
        <div class="input-group">
          <div class="input-group-prepend input-group-text">
            {{ 'drag_drop_dropdown_options' | translate }}
          </div>
          <textarea
            class="text-center form-control"
            [ngClass]="{
              'border-danger':
                this.form.controls['items'].status === 'INVALID' && isInResult
            }"
            [readonly]="!isInResult"
            matInput
            formControlName="items"
            [placeholder]="'drag_drop_dropdown_placeholder' | translate"
          ></textarea>
        </div>
      </div>
    </form>
  `,
  styleUrls: ['./form-maker.component.scss'],
})
export class DragDropMultipleDropdownComponent extends DragDropBaseComponent {
  constructor(fb: FormBuilder) {
    super(fb);
    this.form = fb.group({
      ['header']: ['', { validators: Validators.required }],
      ['items']: ['', { validators: Validators.required }],
    });
  }
  static override buildFromConfig =
    (config: DropdownConfig, isInResult: boolean) =>
    (componentInstance: DragDropDropdownComponent) => {
      componentInstance.isInResult = isInResult;
      componentInstance.form.patchValue({
        ['header']: config.header,
        ['items']: config.items.join('\n'),
      });
    };
  override getForm = () => {
    if (
      this.form.controls['header'].errors ||
      this.form.controls['items'].errors
    )
      throw new Error('error_required_field');
    const fc: DropdownConfig = {
      fieldType: 'dropdown',
      header: this.form.value['header'],
      labelOnLeftSide: true,
      field: uuidv4(),
      disableTranslation: true,
      multiple: true,
      items: this.form.value['items']
        .split('\n')
        .filter((str: string | any[]) => str && str.length > 0), //removes empties
    };
    return fc;
  };
}
