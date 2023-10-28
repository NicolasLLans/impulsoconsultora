import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {

  constructor() {}

  ngAfterViewInit(): void {
    const culturaLink = document.getElementById('cultura-link');
    const valoresLink = document.getElementById('valores-link');
    const rolLink = document.getElementById('rol-link');
    if (culturaLink) {
      culturaLink.addEventListener('click', () => {
        const culturaSection = document.getElementById('cultura');
        if (culturaSection) {
          culturaSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    if (valoresLink) {
      valoresLink.addEventListener('click', () => {
        const valoresSection = document.getElementById('valores');
        if (valoresSection) {
          valoresSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
    if (rolLink) {
      rolLink.addEventListener('click', () => {
        const rolSection = document.getElementById('rol');
        if (rolSection) {
          rolSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
}
