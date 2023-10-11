import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHeaderScrolled: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

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
        link.addEventListener('click', () => {
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            mobileNavToggle.classList.toggle('bi-list');
            mobileNavToggle.classList.toggle('bi-x');
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
        }, true);
      });
    }
  }
  

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
  }
}
