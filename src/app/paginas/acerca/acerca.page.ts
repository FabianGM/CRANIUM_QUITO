import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {
  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor(public alertCtr: AlertController) { 
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  ngOnInit() {
  }

  componentes: componentes[]=[
    {
    src: './assets/icon/churos.jpeg',
    name: 'Fabián Sebastián Garrido Mena',
    correo: 'fgarrido.videojuegos@gmail.com',
    telefono: '0982800451'
  },
  {
    src: './assets/icon/anthony.jpeg',
    name: 'Anthony Xavier Cárdenas Tuza',
    correo: 'ac07ecu@gmail.com',
    telefono: '0995689611'
  },
  {
    src: './assets/icon/vero1.jpg',
    name: 'Verónica Estefania Pillajo Nogales',
    correo: 'verostefa2010@gmail.com',
    telefono: '0987416510'
  }
  ,
  {
    src: './assets/icon/sebas.jpg',
    name: 'Sebastián Danilo Guandinango de la Cruz',
    correo: 'wonder1652@gmail.com',
    telefono: '0998452740'
  }
];

async presentAlert(personas) {
  const alert = await this.alertCtr.create({
  
    message: `<ion-card>
    <ion-img src=${personas.src} style="width: 60%;"></ion-img>
    <p>Nombre:</p>
    <p>${personas.name}</p>
    <p>Correo:</p>
    <p>${personas.correo}</p>
    <p>Teléfono:</p>
    <p>${personas.telefono}</p>
    </ion-card>`,
    backdropDismiss: false,
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Aceptar',
        handler: () => {
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

}

interface componentes{
  src: String;
  name: String;
  correo: String;
  telefono: String;
}
