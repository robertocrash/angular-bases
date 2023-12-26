import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})
export class AgregarPersonajeComponent {

 @Output()
 public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

    public personaje: Personaje = {
      nombre : "SOY ROBER",
      poder: 0
    };

    emitirPersonaje(){

      //Si el nombre del personaje esta vacio, no devuelve nada
      if(this.personaje.nombre.length === 0) return;

      //Emitimos el personaje
      this.onNewPersonaje.emit(this.personaje);

      this.personaje = {
        nombre : "",
        poder : 0
      };

    }
}
