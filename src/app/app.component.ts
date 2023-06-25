import { Component } from '@angular/core';
import { Stage } from './types/Stage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tfm';
  info = 'abc';

  stages: Stage[] = [
    {
      name: 'fase1',
      isDone: true,
    },
    {
      name: 'fase2',
      isDone: true,
    },
    {
      name: 'doc-fase2',
      isDone: true,
      isDocument: true,
    },
    {
      name: 'fase3',
      isDone: false,
    },
    {
      name: 'doc-fase3',
      isDone: false,
      isDocument: true,
    },
    {
      name: 'fase4',
      isDone: false,
    },
  ];
}
