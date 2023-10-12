import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { SeccionServiciosComponent } from './componentes/seccion-servicios/seccion-servicios.component';
import { SeccionTestimoniosComponent } from './componentes/seccion-testimonios/seccion-testimonios.component';
import { ZFooterComponent } from './componentes/z-footer/z-footer.component';
import { BotonWhatsappComponent } from './componentes/boton-whatsapp/boton-whatsapp.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { BotonSubirComponent } from './componentes/boton-subir/boton-subir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SeccionServiciosComponent,
    SeccionTestimoniosComponent,
    ZFooterComponent,
    BotonWhatsappComponent,
    QuienesSomosComponent,
    InicioComponent,
    ContactoComponent,
    BotonSubirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
