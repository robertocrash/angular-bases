import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { ServicioDbz } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor(public dbzService: ServicioDbz){}


  get personajes(): Personaje[]{
    return [...this.dbzService.personajes];
  }

  borrarPersonaje(id: string){
    this.dbzService.borrarPersonajePorId(id);
  }

  agregarPersonaje(personaje: Personaje){
    this.dbzService.agregarPersonaje(personaje);
  }

}
