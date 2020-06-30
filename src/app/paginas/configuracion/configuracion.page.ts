import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  componentes: componentes[]=[
    {
    icono: 'alarm-outline',
    name: 'Temporización',
    redirecTo: '/temporizador'
  },
  {
    icono: 'image-outline',
    name: 'Temas',
    redirecTo: '/configuracion'
  }
  ,
  {
    icono: 'color-palette-outline',
    name: 'Estilos',
    redirecTo: '/configuracion'
  }
];

  constructor() { }

  ngOnInit() {
  }

}

interface componentes{
  icono: String;
  name: String;
  redirecTo: String
}
