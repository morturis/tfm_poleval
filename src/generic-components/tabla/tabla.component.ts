import { Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ColumnConfig } from 'src/app/types/ColumnConfig';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { TablaDialogComponent } from '../tabla-dialog/tabla-dialog.component';
import { DialogData } from 'src/app/types/DialogData';
import { firstValueFrom } from 'rxjs';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) items: any[] = [];
  @Input({ required: true }) itemName: string = '';
  @Input({ required: true }) columnsConfig: ColumnConfig[] = [];
  @Input({ required: false }) dynamic: boolean = false;
  @ViewChild(MatTable) table!: MatTable<any>; //Definitive assignment operator, compiler trust me

  displayedColumns: string[] = [];
  id: string = '';

  constructor(public dialog: MatDialog, public ts: TranslationService) {}

  ngOnInit() {
    this.id = `table-${uuidv4()}`;
    this.displayedColumns = this.columnsConfig.map((c) => c.field);
  }

  async addItem() {
    //Open a dialog to create a new item
    const dialogData: DialogData = {
      columnsConfig: this.columnsConfig,
      title: `${this.ts.translate('button_add')} ${this.itemName}`,
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
