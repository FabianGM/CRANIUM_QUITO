import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

informacion={
  equipo1: '',
  equipo2:''
}
  constructor() {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
   }

  ngOnInit() {
  }

  registroDatos(){
    console.log(this.informacion)
  }

}
