import { Component } from '@angular/core';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public ts: TranslationService) {}
}
