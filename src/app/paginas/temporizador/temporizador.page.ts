import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-temporizador',
  templateUrl: './temporizador.page.html',
  styleUrls: ['./temporizador.page.scss'],
})
export class TemporizadorPage implements OnInit {

  tiempo=[];
  tiempo1:any;
  porcentaje = 0.05;
  rangeVal: String;
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;
  

  constructor(public platform: Platform, private storage: Storage) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
   }
   
  ngOnInit() {
    
  }
  
  cambioRango(event){
    console.log(event)
    this.tiempo=event.detail.value;
    this.storage.set('tiempos', this.tiempo);
    console.log(this.tiempo);
  }
}
