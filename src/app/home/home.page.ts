import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;
  cards: Observable<any>;

  constructor(private storage: Storage) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  val = 0;
  public ocultar1 = false;
accion1(){

this.val = this.val + 1;

if (this.val === 15){
  this.ocultar1 = !this.ocultar1;
}



console.log(this.val);
}

datos=[{
  card:'Verde',
  descripcion:'Dibujo',
  pregunta:'Dibuja algo característico de Eugenio Espejo',
  pista:'Un prominente investigador, científico, médico, historiador, escritor, abogado, periodista',
  respuesta:'Un revolucionario de la libertad'
  },
  {
    card:'Rojo',
  descripcion:'Moldear con plastilins',
  pregunta:'Intenta hacer la Cruz del Papa con la plastilina Cranium',
  pista:'Cargo jesus en sus hombros',
  respuesta:'Cruz del Papa'
    },
    {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Actúa como un soldado en la época colonial de Quito',
    pista:'',
    respuesta:''
      },
      {
        card:'Azul',
      descripcion:'Significado',
      pregunta:'¿Qué significa Quito luz de América? ',
      pista:'',
      respuesta:'si'
        }] ;

ngOnInit() {
  this.storage.get('tiempos').then((val) => {
    console.log( val);
    this.cards=val;
    if (val==null){
      this.storage.set('tiempos', 60);
    }
    
   });
   
  this.storage.get('datosg.json').then((val) => {
   console.log( val);
   this.cards=val;
   if (val==null){
     this.storage.set('datosg.json', this.datos);

   }
   
  });
}

}
