import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(public alertCtr: AlertController) { }

  ngOnInit() {
  }

  componentes: componentes[]=[
    {
    src: './assets/icon/churos.jpeg',
    name: 'Fabián Sebastián Garrido Mena',
    correo: 'fgarridom@est.ups.edu.ec',
    telefono: '0982800451'
  },
  {
    src: './assets/icon/anthony.jpeg',
    name: 'Anthony Xavier Cárdenas Tuza',
    correo: 'acardenast@est.ups.edu.ec',
    telefono: '0995689611'
  },
  {
    src: './assets/icon/vero1.jpg',
    name: 'Verónica Estefania Pillajo Nogales',
    correo: 'vpillajon@est.ups.edu.ec',
    telefono: '0987416510'
  }
  ,
  {
    src: './assets/icon/sebas.jpg',
    name: 'Sebastián Danilo Guandinango de la Cruz',
    correo: 'sguandinangod@est.ups.edu.ec',
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
