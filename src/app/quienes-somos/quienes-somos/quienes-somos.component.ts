import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {

  constructor(private route: ActivatedRoute, private router: Router) {
    // Detectar cambios de ruta para realizar el scroll
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  ngOnInit(): void {}

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
