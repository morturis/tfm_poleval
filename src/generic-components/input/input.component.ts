import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputConfig } from 'src/app/types/FieldConfig';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input({ required: true }) control!: FormControl; //Definite assignment //Cant use formControl as name
  @Input({ required: true }) fieldConfig!: InputConfig; //definite assignment

  fieldIsRequired: boolean = false;

  constructor() {
    const k = 1;
  }

  ngOnInit() {
    this.fieldIsRequired =
      this.fieldConfig.validators?.includes(Validators.required) || false;
  }

  listOfErrors() {
    if (!this.control.errors || !this.fieldConfig.errorMessages) return [];

    return Object.keys(this.control.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.control.getError(err)
      )
    );
  }
}
