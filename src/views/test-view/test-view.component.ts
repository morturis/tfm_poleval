import { Component } from '@angular/core';
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ColumnConfig } from 'src/app/types/FieldConfig';
import { Stage } from 'src/app/types/Stage';
import { TestViewDosComponent } from '../test-view-dos/test-view-dos.component';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss'],
})
export class TestViewComponent {
  constructor(private ts: TranslationService) {}

  title = 'tfm';
  info = 'abc';

  stages: Stage[] = [
    {
      name: 'fase1',
      isDone: true,
      contents: TestViewDosComponent,
    },
    {
      name: 'fase2',
      isDone: true,
      contents: TestViewDosComponent,
    },
    {
      name: 'doc-fase2',
      isDone: true,
      isDocument: true,
      contents: TestViewDosComponent,
    },
    {
      name: 'fase3',
      isDone: true,
      contents: TestViewDosComponent,
    },
    {
      name: 'doc-fase3',
      isDone: false,
      isDocument: true,
      contents: TestViewDosComponent,
    },
    {
      name: 'fase4',
      isDone: false,
      contents: TestViewDosComponent,
    },
  ];

  titleTabla = 'Actores';
  itemNameTabla = 'actor';
  itemsTabla = [
    {
      nombre: 'Cosa grande',
      cantidad: 2,
      tamaño: 'Muy grande',
    },
    {
      nombre: 'Cosa chica',
      cantidad: 222,
      tamaño: 'Diminuto',
    },
  ];

  columnsTabla: ColumnConfig[] = [
    {
      header: 'Nombre',
      field: 'nombre',
      defaultValue: 'Nombre por defecto',
      info: 'info de nombre',
      validators: [
        Validators.required,
        Validators.minLength(2),
        (control: AbstractControl): ValidationErrors | null => {
          return control.value == 'algo'
            ? { neverAlgo: "No puede ser 'algo'" }
            : null;
        },
      ],
      errorMessages: {
        required: () => 'This field is required',
        minlength: (err) => `Min ${err.requiredLength} chars are required`,
        neverAlgo: () => 'No puede ser "algo"',
      },
    },
    {
      header: 'Cantidad',
      field: 'cantidad',
      placeholder: 'alguna cantidad',
      info: 'info de cantidad',
      validators: [Validators.required],
      errorMessages: {
        required: () => 'This field is required',
      },
    },
  ];

  inputData = {
    title: 'Titulo',
    info: 'Info',
    hint: 'hint',
    placeholder: 'placeholder',
    id: 'id',
  };
}
