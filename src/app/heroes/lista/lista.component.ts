import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public heroesNombres: string[] = ["Spiderman", "Ironman","Hulk", "Capitan America"];

  public heroeBorrado?: string;


  borrarUltimoHeroe(){
  this.heroeBorrado = this.heroesNombres.pop();
  }

}
