import { Component } from '@angular/core';
import { TranslationService } from 'src/services/translation-service.service';

@Component({
  selector: 'app-underbar',
  templateUrl: './underbar.component.html',
  styleUrls: ['./underbar.component.scss'],
})
export class UnderbarComponent {
  constructor(public ts: TranslationService) {}
}
