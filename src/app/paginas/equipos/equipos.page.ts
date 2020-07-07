import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  

informacion={
  equipo1: '',
  equipo2:''
}
  constructor() { }

  ngOnInit() {
  }

  registroDatos(){
    console.log(this.informacion)
  }

}
