import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationProperties } from 'src/app/types/Evaluation';
import {
  AnyFieldConfig,
  DropdownConfig,
  InputConfig,
} from 'src/app/types/FieldConfig';
import { EvaluationService } from 'src/services/evaluation.service';
import { v4 as uuidv4 } from 'uuid';

interface DragDropDivConfig<T> {
  text: string;
  componentType: Type<T>;
  componentInstance?: T;
}
@Component({
  selector: 'app-form-drag-and-drop',
  templateUrl: './form-drag-and-drop.component.html',
  styleUrls: ['./form-drag-and-drop.component.scss'],
})
export class FormDragAndDropComponent {
  @Output() statusOutput = new EventEmitter<any>();
  options: DragDropDivConfig<DragDropBaseComponent>[] = [
    {
      text: 'drag_drop_input',
      componentType: DragDropInputComponent,
    },
    {
      text: 'drag_drop_dropdown',
      componentType: DragDropDropdownComponent,
    },
  ];

  result: DragDropDivConfig<DragDropBaseComponent>[] = [
    {
      text: 'drag_drop_input',
      componentType: DragDropInputComponent,
    },
  ];

  constructor(
    private evalService: EvaluationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.statusOutput.emit({ status: 'INVALID' });
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
    }
  }

  setInResult = (comp: DragDropBaseComponent) => {
    comp.isInResult = true;
  };

  saveForm() {
    try {
      const createdForm: AnyFieldConfig[] = this.result.map((div) => {
        if (!div.componentInstance) throw new Error('component not instanced'); //should never trigger
        return div.componentInstance.getForm(); //could throw errors
      });
      //5 random chars, starting with 36 ('a')
      const formCode = this.route.snapshot.paramMap.get('code');
      if (!formCode)
        throw new Error('Please create a new evaluation from the beginning'); //should never trigger
      this.evalService.update(
        formCode as string,
        EvaluationProperties.form,
        createdForm
      );
      this.statusOutput.emit({ status: 'SAVED' });
    } catch (e) {
      //Catch possible errors in the form
      alert(e);
    }
  }
}

//Sub components for all types of questions + text fields
abstract class DragDropBaseComponent {
  isInResult: boolean = false;
  error: boolean = false;
  getForm!: () => AnyFieldConfig;
}
@Component({
  selector: 'drag-and-drop-input',
  template: `
    <div class="d-flex flex-column">
      <div class="d-flex">
        <input
          class="col w-50 border"
          [ngClass]="{ 'border-danger': error }"
          [readOnly]="!isInResult"
          [(ngModel)]="header"
          [placeholder]="'d&d_input_placeholder' | translate"
        />
        <input
          class="col w-50"
          value="______________________________________________________________________________"
          readonly="true"
        />
      </div>
    </div>
  `,
  styleUrls: ['./form-drag-and-drop.component.scss'],
})
export class DragDropInputComponent extends DragDropBaseComponent {
  header = '';
  override getForm = () => {
    if (this.header.length < 1) {
      this.error = true;
      throw new Error('field not filled');
    }
    const fc: InputConfig = {
      fieldType: 'input',
      header: this.header,
      placeholder: undefined,
      labelOnLeftSide: true,
      field: uuidv4(),
    };
    return fc;
  };
}

@Component({
  selector: 'drag-and-drop-text',
  template: `
    <div class="d-flex flex-column">
      <div class="d-flex">
        <input
          class="col border"
          [ngClass]="{ 'border-danger': error }"
          [readOnly]="!isInResult"
          [placeholder]="'d&d_text_placeholder' | translate"
        />
      </div>
    </div>
  `,
  styleUrls: ['./form-drag-and-drop.component.scss'],
})
export class DragDropTextComponent extends DragDropBaseComponent {
  override getForm = () => {
    const fc: InputConfig = {
      fieldType: 'input',
      header: '',
      field: uuidv4(),
    };
    return fc;
  };
}

@Component({
  selector: 'drag-and-drop-dropdown',
  template: `
    <div class="d-flex flex-column">
      <div class="d-flex">
        <input
          class="col w-50 border"
          [ngClass]="{ 'border-danger': error }"
          [readOnly]="!isInResult"
          [(ngModel)]="header"
          [placeholder]="'d&d_input_placeholder' | translate"
        />
        <div class="d-flex flex-column col w-50">
          <p>Introduzca opciones en líneas separadas</p>
          <textarea
            class="col w-50 border"
            [ngClass]="{ 'border-danger': error }"
            [readOnly]="!isInResult"
            [(ngModel)]="items"
            [placeholder]="'d&d_dropdown_placeholder' | translate"
          ></textarea>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./form-drag-and-drop.component.scss'],
})
export class DragDropDropdownComponent extends DragDropBaseComponent {
  header: string = '';
  items: string = '';
  override getForm = () => {
    if (this.header.length < 1 || this.items.length < 1) {
      this.error = true;
      throw new Error('field not filled');
    }
    const fc: DropdownConfig = {
      fieldType: 'dropdown',
      header: this.header,
      labelOnLeftSide: true,
      field: uuidv4(),
      items: this.items.split('\n').filter((str) => str && str.length > 0), //removes empties
    };
    return fc;
  };
}
