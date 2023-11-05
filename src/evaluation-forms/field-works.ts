import { TableConfig } from 'src/app/types/FieldConfig';
import { allIndicatorTables } from './all';

const measurementColumn: TableConfig = {
  fieldType: 'table',
  itemName: 'measurement',
  canAddRemove: true,
  columns: [
    {
      fieldType: 'datepicker',
      header: 'measurement_date',
      field: 'measurement_date',
    },
    {
      fieldType: 'input',
      header: 'measurement_value',
      field: 'measurement_value',
    },
  ],
  header: 'measurement_table',
  field: 'measurement_table',
};
export const allIndicatorTablesWithMeasurements = allIndicatorTables.map(
  (table) => {
    return {
      ...table,
      canAddRemove: false,
      canEdit: true,
      columns: [...table.columns, measurementColumn],
    };
  }
);
