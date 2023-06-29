import { Component } from '@angular/core';
import { Stage } from './types/Stage';
import { ColumnConfig } from './types/ColumnConfig';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { TestViewComponent } from 'src/views/test-view/test-view.component';
import { TestViewDosComponent } from 'src/views/test-view-dos/test-view-dos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tfm';
  info = 'abc';

  stages: Stage[] = [
    {
      name: 'fase1',
      isDone: true,
      contents: TestViewComponent,
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
      contents: TestViewComponent,
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
      contents: TestViewComponent,
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
