import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
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
  data={
    descripcion:'',
    palabraclave:'',
    respuesta:''
  }

  guardar(){
    console.log(this.data)
  }

  val = 0;
  public rojo = false;
  public verde = false;
  public azul = false;
  public morado = false;
  public amarillo = false;
  onChange(c){
    if(c=='r'){
      this.rojo = !this.rojo;
      this.verde = false;
      this.azul = false;
      this.morado = false;
      this.amarillo = false;
    }

    if(c=='g'){
      this.verde = !this.verde;
      this.rojo = false;
      this.azul = false;
      this.morado = false;
      this.amarillo = false;
      console.log(c)
    }
    if(c=='b'){
      this.azul = !this.azul;
      this.verde = false;
      this.rojo = false;
      this.morado = false;
      this.amarillo = false;
      console.log(c)
    }
    if(c=='y'){
      this.amarillo = !this.rojo;
      this.verde = false;
      this.azul = false;
      this.morado = false;
      this.rojo = false;
    }
    if(c=='m'){
      this.morado = !this.morado;
      this.verde = false;
      this.azul = false;
      this.rojo = false;
      this.amarillo = false;
    }


 

console.log(this.val);
console.log(c);
}
  
}
