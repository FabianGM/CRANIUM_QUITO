import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

 informacion = {
  equipo1: '',
  equipo2: ''
};

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

  registroDatos(){
    console.log(this.informacion);


    this.storage.set('equipos', this.informacion);

  }

}
