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

  constructor(public platform: Platform) {
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
