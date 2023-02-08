import { Component } from '@angular/core';

@Component({
  selector: 'app-noche-dia',
  templateUrl: './noche-dia.component.html',
  styleUrls: ['./noche-dia.component.scss']
})
export class NocheDiaComponent {

  dia: boolean = true;
  
  constructor() {}

  selectNoche() {
    this.dia = false;
  }
  selectDia() {
    this.dia = true;
  }
}
