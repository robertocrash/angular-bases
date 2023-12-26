import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

import { v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class ServicioDbz {

  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: "Krilin",
      poder: 300
    },
    {
      id: uuid(),
      nombre:"Goku",
      poder:1000
    },
    {
      id: uuid(),
      nombre: "Vegeta",
      poder: 8000
    }
  ];

  //Metodo para añadir personaje a la lista (cuando pulsemos boton guardar)
  agregarPersonaje(personaje: Personaje){
   const newPersonaje: Personaje ={id: uuid(), ...personaje};
   this.personajes.push(newPersonaje);

  }

  //Metodo para eliminar personaje de la lista( en base al indice al pulsar el boton X)
  // onDeletePersonaje(index: number){
  //   this.personajes.splice(index,1);
  // }

  borrarPersonajePorId(id:string){
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  }


}
