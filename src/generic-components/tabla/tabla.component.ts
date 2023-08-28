import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { DialogData } from 'src/app/types/DialogData';
import { InputConfig, TableConfig } from 'src/app/types/FieldConfig';
import { TranslationService } from 'src/services/translation-service.service';
import { v4 as uuidv4 } from 'uuid';
import { TablaDialogComponent } from '../tabla-dialog/tabla-dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  @Input({ required: true }) control!: FormControl; //Definite assignment //Cant use formControl as name
  @Input({ required: true }) config!: TableConfig; //definite assignment
  @ViewChild(MatTable) table!: MatTable<any>; //Definitive assignment operator, compiler trust me

  title: string = '';
  items: any[] = [];
  itemName: string = '';
  fieldsConfig: InputConfig[] = [];
  canAddRemove: boolean = false;
  info?: string;

  displayedColumns: string[] = [];
  id: string = '';

  constructor(public dialog: MatDialog, public ts: TranslationService) {}

  ngOnInit() {
    this.title = this.config.header;
    this.items = this.config.defaultValue || [];
    this.itemName = this.config.itemName;
    this.fieldsConfig = this.config.columns;
    this.canAddRemove = this.config.canAddRemove;
    this.info = this.config.info;
    this.id = `table-${uuidv4()}`;
    this.displayedColumns = this.fieldsConfig.map((c) => c.field);
  }

  ngAfterViewInit() {
    if (this.control.value) {
      Object.entries(this.control.value).forEach(([key, value]) =>
        this.items.push(value)
      );
      this.table.renderRows();
    }
  }

  listOfErrors() {
    if (!this.control.errors || !this.config.errorMessages) return [];

    return Object.keys(this.control.errors).map((err) =>
      (this.config.errorMessages as Record<string, Function>)[err](
        this.control.getError(err)
      )
    );
  }

  async addItem() {
    //Open a dialog to create a new item
    const dialogData: DialogData = {
      inputsConfig: this.fieldsConfig,
      itemName: this.itemName,
      //title: `button_add ${this.itemName}`,
    };
    const dialogRef = this.dialog.open(TablaDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: dialogData,
    });

    //On dialog close
    const addedItem = await firstValueFrom(dialogRef.afterClosed());
    if (addedItem) this.items.push(addedItem); //returns false if no item was added
    this.control.setValue({ ...this.items }, { emitEvent: true });
    this.table.renderRows();
  }

  removeItem() {
    this.items.pop();
    this.control.setValue({ ...this.items }, { emitEvent: true });
    this.table.renderRows();
  }
}
