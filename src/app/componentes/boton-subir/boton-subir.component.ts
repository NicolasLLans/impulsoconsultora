import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-boton-subir',
  templateUrl: './boton-subir.component.html',
  styleUrls: ['./boton-subir.component.css'],
})
export class BotonSubirComponent {
  showButton: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Verifica si el usuario ha hecho scroll hasta el 80% de la página
    this.showButton = window.scrollY > (0.8 * (document.documentElement.scrollHeight - window.innerHeight));
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
