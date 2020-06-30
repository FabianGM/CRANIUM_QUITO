import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  componentes: componentes[]=[
    {
    src: './assets/icon/churos.jpeg',
    name: 'Fabián Sebastián Garrido Mena'
  },
  {
    src: './assets/icon/anthony.jpeg',
    name: 'Anthony Xavier Cárdenas Tuza'
  },
  {
    src: './assets/icon/vero1.jpg',
    name: 'Verónica Estefania Pillajo Nogales'
  }
  ,
  {
    src: 'color-palette-outline',
    name: 'Sebastián Danilo Guandinango de la Cruz'
  }
];

  constructor() { }

  ngOnInit() {
  }

}

interface componentes{
  src: String;
  name: String
}
