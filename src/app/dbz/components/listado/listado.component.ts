import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  @Input()
  public personajeList: Personaje[] = [
    {
      nombre: "Trunks",
      poder: 500
    }
  ]

  //Emitir un evento
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id: string){
    //TODO: Emitir el ID del personaje
    this.onDelete.emit(id);

  }

}
