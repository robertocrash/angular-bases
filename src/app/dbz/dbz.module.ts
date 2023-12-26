import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AgregarPersonajeComponent } from './components/agregarPersonaje/agregar-personaje/agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
   exports:[
    MainPageComponent,
    ListadoComponent,
    AgregarPersonajeComponent
   ]
})
export class DbzModule { }
