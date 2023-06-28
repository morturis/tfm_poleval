import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnConfig } from 'src/app/types/ColumnConfig';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  //@Input({ required: true }) title: string = 'Missing title';
  @Input({ required: true }) formControl!: FormControl; //Definite assignment
  //@Input({ required: false }) info: string | undefined;
  //@Input({ required: false }) hint: string | undefined;
  //@Input({ required: false }) placeholder: string | undefined;
  @Input({ required: true }) fieldConfig!: ColumnConfig; //definite assignment

  listOfErrors() {
    if (!this.formControl.errors || !this.fieldConfig.errorMessages) return [];

    const k = { a: 'abc', d: 'def' };
    const j = Object.keys(k);

    return Object.keys(this.formControl.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.formControl.getError(err)
      )
    );
  }
}
