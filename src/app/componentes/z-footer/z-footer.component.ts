import { Component } from '@angular/core';

@Component({
  selector: 'app-z-footer',
  templateUrl: './z-footer.component.html',
  styleUrls: ['./z-footer.component.css'],
})
export class ZFooterComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
