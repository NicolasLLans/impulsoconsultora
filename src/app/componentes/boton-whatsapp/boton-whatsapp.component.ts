import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-whatsapp',
  templateUrl: './boton-whatsapp.component.html',
  styleUrls: ['./boton-whatsapp.component.css']
})
export class BotonWhatsappComponent implements OnInit {
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
    const whatsappButton = document.getElementById("whatsapp-button");

    // Mostrar el botón cuando el usuario hace scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && this.isHidden) {
        whatsappButton?.classList.remove("hidden");
        whatsappButton?.classList.add("show");
        this.isHidden = false;
      } else if (window.scrollY <= 100 && !this.isHidden) {
        whatsappButton?.classList.remove("show");
        whatsappButton?.classList.add("hidden");
        this.isHidden = true;
      }
    });
  }
}
