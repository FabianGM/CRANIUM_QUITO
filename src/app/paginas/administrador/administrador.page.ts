import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;
  cards: Observable<any>;
  allcards=[]
  constructor(private modalCtrl:ModalController,private storage: Storage,public toastController: ToastController) { 
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

 data1:any
 d=0
 
  ngOnInit() {

  
     this.storage.get('datosg.json').then((val) => {
      console.log( val);
      this.cards=val;
      this.allcards=val
      if (val==null){
        this.storage.set('datosg.json', this.datos);

      }
      
     });
  }
  cartas=[
    
    {
    card:'Card Red',
    src:'https://static.vecteezy.com/system/resources/previews/000/570/319/non_2x/red-geometric-background-vector.jpg',

    },
    {
      card:'Card Amarillo',
      src:'https://www.pedroamador.com/wp-content/uploads/2014/01/campana-fondo-amarillo-en-redes-sociales.jpg',
      
      }
      ,{
        card:'Card Azul',
        src:'https://static.vecteezy.com/system/resources/previews/000/245/155/non_2x/elegant-blue-wave-background-vector.jpg',
        
        },
        {
          card:'Card Verde',
          src:'https://www.laparisina.mx/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/2/1/2101l46.jpg',
          
          }
  
  ]
  datos=[
    {
      card:'Verde',
      color:'success',
    descripcion:'Dibujar',
    pregunta:'Dibuje la característica principal  sobre leyenda de iglesia de la catedral de Quito',
    pista:'El gallo, El pingüino, Las monjas',
    respuesta:'El gallo'
      }, {
        card:'Verde',
        color:'success',
      descripcion:'Dibujar',
      pregunta:'Dibuje al ser de la leyenda que contruyó la iglesia de San Francisco de Quito',
      pista:'El arquitecto,  Las monjas, El cura, El diablo',
      respuesta:'El diablo'
        }, {
          card:'Verde',
          color:'success',
        descripcion:'Dibujar',
        pregunta:'Dibuje al ser de la leyenda que contruyó la iglesia de San Francisco de Quito',
        pista:'El arquitecto,  Las monjas, El cura, El diablo',
        respuesta:'El diablo'
          }, {
            card:'Verde',
            color:'success',
          descripcion:'Dibujar',
          pregunta:'Dibuje el unico lugar en donde el huevo puede permancer parado',
          pista:'En la linea Ecuatorial,  En la pñaza de sanfrancisco , En la mitad del mundo',
          respuesta:'En la mitad del mundo'
            }, {
              card:'Verde',
              color:'success',
            descripcion:'Dibujar',
            pregunta:'Dibuje algo que resalte mas entro del turismo en quito ',
            pista:'La arquitectura,  Utilizado como un santuario , Lugar donde se predica la palabra',
            respuesta:'Iglesia'
              }, {
                card:'Amarillo',
                color:'warning',
              descripcion:'Actuar',
              pregunta:'Actúa como un soldado en la época colonial de Quito',
              pista:'Guerra,  Muerte , Esapada, Bandera',
              respuesta:'Guerra,  Muerte , Esapada, Bandera'
                }, {
                  card:'Amarillo',
                  color:'warning',
                descripcion:'Actuar',
                pregunta:'Actúa como si hubieras ganado la batalla contra los españoles',
                pista:'',
                respuesta:''
                  }, {
                    card:'Amarillo',
                    color:'warning',
                  descripcion:'Actuar',
                  pregunta:'Represente la pose de la Virgen del Panecillo',
                  pista:'',
                  respuesta:''
                    }, {
                      card:'Rojo',
                      color:'danger',
                    descripcion:'Moldear',
                    pregunta:'Intenta hacer la Cruz del Papa con la plastilina Cranium',
                    pista:'',
                    respuesta:''
                      }, {
                        card:'Rojo',
                        color:'danger',
                      descripcion:'Moldear',
                      pregunta:'Intenta representar el Panecillo con la plastilina Cranium',
                      pista:'',
                      respuesta:''
                        }, {
                          card:'Rojo',
                          color:'danger',
                        descripcion:'Moldear',
                        pregunta:'Intenta representar el estadio olímpico con la plastilina Cranium',
                        pista:'',
                        respuesta:''
                          }, {
                            card:'Rojo',
                            color:'danger',
                          descripcion:'Moldear',
                          pregunta:'Intenta representar los túneles de San Diego con la plastilina Cranium',
                          pista:'',
                          respuesta:''
                            }, {
                              card:'Rojo',
                              color:'danger',
                            descripcion:'Moldear',
                            pregunta:'Intenta representar la virgen del Panecillo',
                            pista:'',
                            respuesta:''
                              },{
                card:'Azul',
                color:'primary',
      descripcion:'Significado',
      pregunta:' Escriba su respuesta en minúscula ¿Quito es la capital más antigua de Sudamérica? 1. Si 2. No',
      pista:'',
      respuesta:'si'
        },
      {
        card:'Azul',
        color:'primary',
      descripcion:'Significado',
      pregunta:' Escriba el número de opción correcta ¿Qué significa Quito la Carita de Dios? 1. Es una de las ciudades más cerca del cielo 2. Es una ciudad iluminada',
      pista:'',
      respuesta:'1'
        },
        {
        card:'Azul',
        color:'primary',
      descripcion:'Significado',
      pregunta:' Escriba el número de opción correcta ¿Cuál es el nombre completo de Quito? 1.Quito del segundo amanecer  2. San Francisco de Quito',
      pista:'',
      respuesta:'2'
        },
      
       {
        card:'Azul',
        color:'primary',
      descripcion:'Significado',
      pregunta:' Escriba el número de opción correcta ¿Cuándo se celebra la fundación de Quito? 1. En Septiembre 24  2. En Diciembre 6',
      pista:'',
      respuesta:'2'
        },
      {
        card:'Azul',
        color:'primary',
      descripcion:'Significado',
      pregunta:' Escriba su respuesta en minúscula ¿Que leyenda es conocida como el atrio de San Francisco?',
      pista:'añutnaC',
      respuesta:'cantuña'
        },
      
      {
        card:'Amarillo',
        color:'warning',
      descripcion:'Actuar',
      pregunta:'Has como si ya no jalaras',
      pista:'En Quito ya no jalo significa que estás cansado',
      respuesta:''
        },
      
      
       {
        card:'Amarillo',
        color:'warning',
      descripcion:'Actuar',
      pregunta:'Actua como si pidieras un taxi en Quito diciendo Jefe una carrerita',
      pista:'En Quito se llama al Chofer y Guardia Jefe',
      respuesta:''
        },
      
      
        {
        card:'Amarillo',
        color:'warning',
      descripcion:'Actuar',
      pregunta:'Actua como un Quiteño mide el tiempo con sus amigos',
      pista:'En Quito a un tiempo largo se dice a se fuuuuuuuu intentalo con una frase que se te ocurra y hazlo con dos personas como una covnersación',
      respuesta:''
        },
         {
        card:'Amarillo',
        color:'warning',
      descripcion:'Actuar',
      pregunta:'Actua como un Quiteño dice chulla vida en un situación peligrosa',
      pista:'El Quiteño dice chulla vida haciendo referencia a lo que se conoce como YOLO',
      respuesta:''
        },
          {
        card:'Amarillo',
        color:'warning',
      descripcion:'Actuar',
      pregunta:'Actua de manera acholada con un persona',
      pista:'Acholada/o en un expresión quiteña que significa que siente timidez',
      respuesta:''
        }] ;
  
  data={
    card:'',
    color:'',
    descripcion:'',
    pregunta:'',
    pista:'',
    respuesta:''
  }
 

  guardar(){
    //this.datos.push(this.cartas)
     //this.storage.set('datosg.json', this.cartas);
       
    this. data1={
      card:this.data.card,
      color:this.data.color,
      descripcion:this.data.descripcion,
      pregunta:this.data.pregunta,
      
      pista:this.data.pista,
      respuesta:this.data.respuesta
    }
    
    //console.log(this.data)
    

   
  
       this.datos.push(this.data1);
    
    this.storage.set('datosg.json', this.datos);
    this.presentToastInsertCard()
    setTimeout(() => {
      window.location.reload();
    }, 500);
   //  
   
   
   
  }

  ver(){
    this.storage.get('datosg.json').then((val) => {
      console.log( val);
    });
  }

  clear() {
    this.storage.clear();
  }

  val = 0;
  public rojo = false;
  public verde = false;
  public azul = false;
  public morado = false;
  public amarillo = false;
  onChange(c){
    if(c=='Rojo'){
      this.data.descripcion='Moldear'
      this.data.color='danger'
      this.rojo = !this.rojo;
      this.verde = false;
      this.azul = false;
      this.morado = false;
      this.amarillo = false;
    }

    if(c=='Verde'){
      this.data.descripcion='Dibujo'
      this.data.color='success'
      this.verde = !this.verde;
      this.rojo = false;
      this.azul = false;
      this.morado = false;
      this.amarillo = false;
      console.log(c)
    }
    if(c=='Azul'){
      this.data.descripcion='Significado'
      this.data.color='primary'
      this.azul = !this.azul;
      this.verde = false;
      this.rojo = false;
      this.morado = false;
      this.amarillo = false;
      console.log(c)
    }
    if(c=='Amarillo'){
      this.data.descripcion='Actuar'
      this.data.color='warning'
      this.amarillo = !this.rojo;
      this.verde = false;
      this.azul = false;
      this.morado = false;
      this.rojo = false;
    }
    


 

console.log(this.val);
console.log(c);
}
async presentToastInsertCard() {
  const toast = await this.toastController.create({
    message: 'Tarjeta ingresada correctamente',
    duration: 3000
  });
  toast.present();
}
  
}
