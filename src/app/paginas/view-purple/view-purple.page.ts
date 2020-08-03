import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-view-purple',
  templateUrl: './view-purple.page.html',
  styleUrls: ['./view-purple.page.scss'],
})
export class ViewPurplePage implements OnInit {
  arreglocartas = [];
  etiqueta = '';
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor(private storage: Storage) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  ngOnInit() {



  }

  navegar(valor: string){


    this.storage.get('datosg.json').then((val) => {
      // console.log( val.card);
      this.arreglocartas = val;
      console.log(this.arreglocartas);
      const arreglocolor = [];
      console.log('COLOR', valor);
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.arreglocartas.length; index++) {
        if (this.arreglocartas[index].card === valor) {
          arreglocolor.push(this.arreglocartas[index]);
        }


      }
      console.log(arreglocolor);
      // this.storage.set('colorCards',arreglocolor);
      const randomico1 = Math.round(Math.random() * ((arreglocolor.length - 1) - 0) + 0);
      console.log(randomico1);
      this.storage.set('cardcolor', arreglocolor[randomico1]);
    });
  }

}
