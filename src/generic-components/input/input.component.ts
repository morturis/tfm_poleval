import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputConfig } from 'src/app/types/FieldConfig';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input({ required: true }) formControl!: FormControl; //Definite assignment
  @Input({ required: true }) fieldConfig!: InputConfig; //definite assignment

  fieldIsRequired: boolean = false;

  constructor(public ts: TranslationService) {}

  ngOnInit() {
    this.fieldIsRequired =
      this.fieldConfig.validators?.includes(Validators.required) || false;
  }

  listOfErrors() {
    if (!this.formControl.errors || !this.fieldConfig.errorMessages) return [];

    const k = { a: 'abc', d: 'def' };
    const j = Object.keys(k);

    const errors = Object.keys(this.formControl.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.formControl.getError(err)
      )
    );
    return Object.keys(this.formControl.errors).map((err) =>
      (this.fieldConfig.errorMessages as Record<string, Function>)[err](
        this.formControl.getError(err)
      )
    );
  }
}
