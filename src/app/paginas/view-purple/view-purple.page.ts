import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-purple',
  templateUrl: './view-purple.page.html',
  styleUrls: ['./view-purple.page.scss'],
})
export class ViewPurplePage implements OnInit {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor() {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  ngOnInit() {
  }

}
