import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  csv(object: Record<string, any>[], filename: string = 'export.csv'): void {
    const separator = ';';
    const keys = Object.keys(object[0]).join(separator);

    const values = object
      .map((it) => {
        return Object.values(it).join(separator);
      })
      .join('\n');

    let csvContent = `${keys}\n${values}`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();

    /*
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    document.body.removeChild(link);
    */
  }
}
