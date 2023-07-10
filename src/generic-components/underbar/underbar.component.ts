import { Component } from '@angular/core';

@Component({
  selector: 'app-underbar',
  templateUrl: './underbar.component.html',
  styleUrls: ['./underbar.component.scss'],
})
export class UnderbarComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
