import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  porcentaje = 0.05;
  rangeVal: String;
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor(public platform: Platform) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
    this.platform.ready().then( ()=>{
      this.rangeVal="60";
    })
   }

  ngOnInit() {
  }

  cambioRango(event){
    console.log(event)
  }

}
