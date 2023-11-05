import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { DialogData } from 'src/app/types/DialogData';
import {
  AnyFieldConfig,
  FieldConfigDetectorMethods,
  TableConfig,
} from 'src/app/types/FieldConfig';
import { v4 as uuidv4 } from 'uuid';
import { TablaDialogComponent } from '../tabla-dialog/tabla-dialog.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent extends FieldConfigDetectorMethods {
  @Input({ required: true }) control!: FormControl; //Definite assignment //Cant use formControl as name
  @Input({ required: true }) config!: TableConfig; //definite assignment
  @Output() actionEvent = new EventEmitter<unknown>();
  @ViewChild(MatTable) table!: MatTable<any>; //Definitive assignment operator, compiler trust me

  title: string = '';
  items: any[] = [];
  itemName: string = '';
  fieldsConfig: AnyFieldConfig[] = [];
  canAddRemove: boolean = false;
  info?: string;
  Object = Object;

  displayedColumns: string[] = [];
  id: string = '';

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit() {
    this.title = this.config.header;
    this.items = this.config.defaultValue || [];
    this.itemName = this.config.itemName;
    this.fieldsConfig = this.config.columns;
    this.canAddRemove = this.config.canAddRemove;
    this.info = this.config.info;
    this.id = `table-${uuidv4()}`;
    this.displayedColumns = this.fieldsConfig.map((c) => c.field);
    if (this.config.action || this.config.canEdit)
      this.displayedColumns.push('actions');

    if (this.items.length === 0 && this.control.value) {
      this.items = [...Object.values(this.control.value)];
      this.table.renderRows();
    }
  }

  ngAfterViewInit() {
    this.control.valueChanges.subscribe((newVal) => {
      if (!newVal) return;
      this.items = [...Object.values(newVal)];
      this.table.renderRows();
    });
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
    };
    const dialogRef = this.dialog.open(TablaDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: dialogData,
    });

    //On dialog close
    const addedItem = await firstValueFrom(dialogRef.afterClosed());
    if (addedItem) this.items.push(addedItem); //returns false if no item was added
    this.updateFormControl();
  }

  async editItem(
    selectedItemIndex: number,
    selectedItem: Record<string, unknown>
  ) {
    const dialogData: DialogData = {
      inputsConfig: this.fieldsConfig,
      itemName: this.itemName,
      item: selectedItem,
    };
    const dialogRef = this.dialog.open(TablaDialogComponent, {
      width: 'auto',
      disableClose: true,
      data: dialogData,
    });

    //On dialog close
    const editedItem = await firstValueFrom(dialogRef.afterClosed());
    if (editedItem) this.items[selectedItemIndex] = editedItem;
    this.updateFormControl();
  }

  removeItem() {
    this.items.pop();
    this.updateFormControl();
  }

  private updateFormControl() {
    this.control.setValue({ ...this.items }, { emitEvent: true });
    this.table.renderRows();
  }

  getNumberOfElements(element, column) {
    if (!element[column.field]) return 0;

    return Object.keys(element[column.field]).length;
  }

  getDate(element, column) {
    if (!element[column.field]) return '-';

    return new Date(element[column.field]).toLocaleDateString();
  }

  getDateRange(element, column) {
    if (!element[column.field]) return '-';

    return 'NOT IMPLEMENTED'; //TODO
  }
}
