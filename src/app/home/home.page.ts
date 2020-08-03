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

datos=[
  {
    card:'Verde',
  descripcion:'Dibujar',
  pregunta:'Dibuje la característica principal  sobre leyenda de iglesia de la catedral de Quito',
  pista:'El gallo, El pingüino, Las monjas',
  respuesta:'El gallo'
    }, {
      card:'Verde',
    descripcion:'Dibujar',
    pregunta:'Dibuje al ser de la leyenda que contruyó la iglesia de San Francisco de Quito',
    pista:'El arquitecto,  Las monjas, El cura, El diablo',
    respuesta:'El diablo'
      }, {
        card:'Verde',
      descripcion:'Dibujar',
      pregunta:'Dibuje al ser de la leyenda que contruyó la iglesia de San Francisco de Quito',
      pista:'El arquitecto,  Las monjas, El cura, El diablo',
      respuesta:'El diablo'
        }, {
          card:'Verde',
        descripcion:'Dibujar',
        pregunta:'Dibuje el unico lugar en donde el huevo puede permancer parado',
        pista:'En la linea Ecuatorial,  En la pñaza de sanfrancisco , En la mitad del mundo',
        respuesta:'En la mitad del mundo'
          }, {
            card:'Verde',
          descripcion:'Dibujar',
          pregunta:'Dibuje algo que resalte mas entro del turismo en quito ',
          pista:'La arquitectura,  Utilizado como un santuario , Lugar donde se predica la palabra',
          respuesta:'Iglesia'
            }, {
              card:'Amarillo',
            descripcion:'Actuar',
            pregunta:'Actúa como un soldado en la época colonial de Quito',
            pista:'Guerra,  Muerte , Esapada, Bandera',
            respuesta:'Guerra,  Muerte , Esapada, Bandera'
              }, {
                card:'Amarillo',
              descripcion:'Actuar',
              pregunta:'Actúa como si hubieras ganado la batalla contra los españoles',
              pista:'',
              respuesta:''
                }, {
                  card:'Amarillo',
                descripcion:'Actuar',
                pregunta:'Represente la pose de la Virgen del Panecillo',
                pista:'',
                respuesta:''
                  }, {
                    card:'Rojo',
                  descripcion:'Moldear',
                  pregunta:'Intenta hacer la Cruz del Papa con la plastilina Cranium',
                  pista:'',
                  respuesta:''
                    }, {
                      card:'Rojo',
                    descripcion:'Moldear',
                    pregunta:'Intenta representar el Panecillo con la plastilina Cranium',
                    pista:'',
                    respuesta:''
                      }, {
                        card:'Rojo',
                      descripcion:'Moldear',
                      pregunta:'Intenta representar el estadio olímpico con la plastilina Cranium',
                      pista:'',
                      respuesta:''
                        }, {
                          card:'Rojo',
                        descripcion:'Moldear',
                        pregunta:'Intenta representar los túneles de San Diego con la plastilina Cranium',
                        pista:'',
                        respuesta:''
                          }, {
                            card:'Rojo',
                          descripcion:'Moldear',
                          pregunta:'Intenta representar la virgen del Panecillo',
                          pista:'',
                          respuesta:''
                            },{
              card:'Azul',
    descripcion:'Significado',
    pregunta:' Escriba su respuesta en minúscula ¿Quito es la capital más antigua de Sudamérica? 1. Si 2. No',
    pista:'',
    respuesta:'si'
      },
    {
      card:'Azul',
    descripcion:'Significado',
    pregunta:' Escriba el número de opción correcta ¿Qué significa Quito la Carita de Dios? 1. Es una de las ciudades más cerca del cielo 2. Es una ciudad iluminada',
    pista:'',
    respuesta:'1'
      },
      {
      card:'Azul',
    descripcion:'Significado',
    pregunta:' Escriba el número de opción correcta ¿Cuál es el nombre completo de Quito? 1.Quito del segundo amanecer  2. San Francisco de Quito',
    pista:'',
    respuesta:'2'
      },
    
     {
      card:'Azul',
    descripcion:'Significado',
    pregunta:' Escriba el número de opción correcta ¿Cuándo se celebra la fundación de Quito? 1. En Septiembre 24  2. En Diciembre 6',
    pista:'',
    respuesta:'2'
      },
    {
      card:'Azul',
    descripcion:'Significado',
    pregunta:' Escriba su respuesta en minúscula ¿Que leyenda es conocida como el atrio de San Francisco?',
    pista:'añutnaC',
    respuesta:'cantuña'
      },
    
    {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Has como si ya no jalaras',
    pista:'En Quito ya no jalo significa que estás cansado',
    respuesta:''
      },
    
    
     {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Actua como si pidieras un taxi en Quito diciendo Jefe una carrerita',
    pista:'En Quito se llama al Chofer y Guardia Jefe',
    respuesta:''
      },
    
    
      {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Actua como un Quiteño mide el tiempo con sus amigos',
    pista:'En Quito a un tiempo largo se dice a se fuuuuuuuu intentalo con una frase que se te ocurra y hazlo con dos personas como una covnersación',
    respuesta:''
      },
       {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Actua como un Quiteño dice chulla vida en un situación peligrosa',
    pista:'El Quiteño dice chulla vida haciendo referencia a lo que se conoce como YOLO',
    respuesta:''
      },
        {
      card:'Amarillo',
    descripcion:'Actuar',
    pregunta:'Actua de manera acholada con un persona',
    pista:'Acholada/o en un expresión quiteña que significa que siente timidez',
    respuesta:''
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
