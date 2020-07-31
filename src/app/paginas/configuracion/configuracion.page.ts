import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  componentes: componentes[]=[
    {
    icono: 'alarm-outline',
    name: 'Temporización',
    redirecTo: '/temporizador'
  },
  {
    icono: 'image-outline',
    name: 'Temas',
    redirecTo: '/temas'
  }
  ,
  {
    icono: 'color-palette-outline',
    name: 'Estilos',
    redirecTo: '/estilos'
  }
];

  constructor() { 
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  ngOnInit() {
  }

}

interface componentes{
  icono: String;
  name: String;
  redirecTo: String
}
