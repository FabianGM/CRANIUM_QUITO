import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  componentes: componentes[]=[
    {
    icono: 'settings-outline',
    name: 'Configuracion',
    redirecTo: '/configuracion'
  },
  {
    icono: 'logo-reddit',
    name: 'Objetivo',
    redirecTo: '/objetivo'
  }
  ,
  {
    icono: 'document-text-outline',
    name: 'Acerca de',
    redirecTo: '/acerca'
  }
];

informacion={
  equipo1: '',
  equipo2:''
}
  constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
  ngOnInit() {
  }

  registroDatos(){
    console.log(this.informacion)
  }

}

interface componentes{
  icono: String;
  name: String;
  redirecTo: String
}