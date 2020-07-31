import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor() {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  val = 0;
  public ocultar1 = false;
accion1(){

this.val = this.val + 1;

if (this.val === 15){
  this.ocultar1 = !this.ocultar1;
}



console.log(this.val);
}

}
