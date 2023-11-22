import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHeaderScrolled: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2,private route: ActivatedRoute, private router: Router) {
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

  ngOnInit(): void {
    this.initializeEventHandlers();
  }

  private initializeEventHandlers() {
    const mobileNavToggle = this.elementRef.nativeElement.querySelector('.mobile-nav-toggle');
    const navbar = this.elementRef.nativeElement.querySelector('#navbar');
    const navLinks = this.elementRef.nativeElement.querySelectorAll('.navbar ul li a');
  
    if (mobileNavToggle && navbar) {
      mobileNavToggle.addEventListener('click', () => {
        navbar.classList.toggle('navbar-mobile');
        mobileNavToggle.classList.toggle('bi-list');
        mobileNavToggle.classList.toggle('bi-x');
      });
  
      navLinks.forEach((link: HTMLElement) => {
        link.addEventListener('click', (e: Event) => {
          if (navbar.classList.contains('navbar-mobile')) {
            // Cierra el menú móvil si se hace clic en un enlace con la clase 'scrollto' o en un <span> dentro de elementos con la clase 'dropdown'
            if (link.classList.contains('scrollto') || (e.target instanceof Element && e.target.tagName === 'SPAN' && link.classList.contains('dropdown'))) {
              navbar.classList.remove('navbar-mobile');
              mobileNavToggle.classList.toggle('bi-list');
              mobileNavToggle.classList.toggle('bi-x');
            }
          }
        });
      });
  
      const dropdownLinks = this.elementRef.nativeElement.querySelectorAll('.navbar .dropdown > a');
      dropdownLinks.forEach((link: HTMLElement) => {
        link.addEventListener('click', (e: Event) => {
          if (navbar.classList.contains('navbar-mobile')) {
            e.preventDefault();
            const dropdownMenu = link.nextElementSibling as HTMLElement;
            dropdownMenu.classList.toggle('dropdown-active');
          }
        });
      });
    }
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isHeaderScrolled = true;
    } if (window.scrollY = 98) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
  }
}
