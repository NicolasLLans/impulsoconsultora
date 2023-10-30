import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-z-footer',
  templateUrl: './z-footer.component.html',
  styleUrls: ['./z-footer.component.css'],
})
export class ZFooterComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
}
