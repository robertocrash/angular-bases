import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = "ironman";
  public edad: number = 45;

  get capitalizarNombre(){
    return this.nombre.toUpperCase();
  }

  getHeroeDescripcion(){
    return `${this.nombre} - ${this.edad}`;
  }

  //TODO cambiar el nombre del heroe y su edad

  cambiarNombre(): string{
   return this.nombre = "Spiderman"
  }

  cambiarEdad(): number{
   return this.edad = 25;
  }

  restablecerValores(){
    this.nombre = "ironman";
    this.edad = 45;
  }

}
