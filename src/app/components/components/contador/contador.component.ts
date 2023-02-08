import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  contador: number = 0;

  constructor() {}

  sumarUno(): void {
    this.contador++;
  }

  restarUno(): void {
  this.contador--;
  }
}
