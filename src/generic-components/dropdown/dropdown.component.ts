import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DropdownConfig } from 'src/app/types/FieldConfig';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  id: string = 'Missing ID';
  title: string = 'Missing title';
  items: string[] = ['Missing items'];
  info: string | undefined;
  @Input({ required: true }) fieldConfig!: DropdownConfig;
  @Input({ required: true }) control!: FormControl; //Definite assignment //Cant use formControl as name

  fieldIsRequired: boolean = false;

  ngOnInit() {
    this.id = this.fieldConfig.field;
    this.title = this.fieldConfig.header;
    this.items = this.fieldConfig.items;
    this.info = this.fieldConfig.info;

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
