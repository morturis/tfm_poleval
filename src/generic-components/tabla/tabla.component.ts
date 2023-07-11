import { Component, Input, ViewChild } from '@angular/core';
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
  @Input({ required: true }) config!: TableConfig; //definite assignment
  @ViewChild(MatTable) table!: MatTable<any>; //Definitive assignment operator, compiler trust me

  title: string = '';
  items: any[] = [];
  itemName: string = '';
  fieldsConfig: InputConfig[] = [];
  canAddRemove: boolean = false;

  displayedColumns: string[] = [];
  id: string = '';

  constructor(public dialog: MatDialog, public ts: TranslationService) {}

  ngOnInit() {
    this.title = this.config.header;
    this.items = this.config.defaultValue || [];
    this.itemName = this.config.itemName;
    this.fieldsConfig = this.config.columns;
    this.canAddRemove = this.config.canAddRemove;
    this.id = `table-${uuidv4()}`;
    this.displayedColumns = this.fieldsConfig.map((c) => c.field);
  }

  async addItem() {
    //Open a dialog to create a new item
    const dialogData: DialogData = {
      inputsConfig: this.fieldsConfig,
      title: `${this.ts.translate('button_add')} ${this.itemName}`,
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
    this.table.renderRows();
  }

  removeItem() {
    this.items.pop();
    this.table.renderRows();
  }
}
