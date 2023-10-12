import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { ServicioComponent } from './servicios/servicio/servicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: InicioComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
