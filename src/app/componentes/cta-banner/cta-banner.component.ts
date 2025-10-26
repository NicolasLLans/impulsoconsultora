import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.css'
})
export class CtaBannerComponent  {

   @Input() textoBotonCta:string = 'Solicitá una reunión para desarrollar tu plan estratégico';

   @Input() enlaceBotonCta:string = 'https://wa.link/y67gh1';

   @Input() tituloCta:string = 'Definí el rumbo de tu empresa con claridad y convertí tus objetivos en resultados concretos.';

}
