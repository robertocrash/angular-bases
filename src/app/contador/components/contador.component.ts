import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
      <h3>Contador: {{contador}}</h3>

      <button (click)="incrementar(1)">+1</button>
      <button (click)="restablecerContador()">Restablecer</button>
      <button (click)="incrementar(-1)">-1</button>
        `
})

export class ContadorComponent {
  constructor() { }

  public contador: number = 10;

  incrementar(valor: number){
    this.contador = this.contador + valor;
  }

  restablecerContador(){
    this.contador = 10;
  }


}
