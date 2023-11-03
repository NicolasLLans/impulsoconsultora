import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-z-footer',
  templateUrl: './z-footer.component.html',
  styleUrls: ['./z-footer.component.css'],
})
export class ZFooterComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map((tooltipTriggerEl) => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
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
