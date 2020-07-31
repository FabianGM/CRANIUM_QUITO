import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-juego-principal',
  templateUrl: './juego-principal.page.html',
  styleUrls: ['./juego-principal.page.scss'],
})
export class JuegoPrincipalPage implements OnInit {


  // tslint:disable-next-line: variable-name
  mostrar_dado = true;
  // tslint:disable-next-line: variable-name
  mostrar_texto = true;
  src = './assets/icon/dado.jpeg';


  equipo = [];


  constructor(private alertCtrl: AlertController,
              private camera: Camera,
              private storage: Storage) { }

  ngOnInit() {
    this.storage.get('equipos').then((val) => {
      console.log('Los equipos son: ', val);
      // this.equipo = val;

      const randomico = Math.floor((Math.random() * 0) + 1);

      if (randomico === 0){
        this.equipo = val.equipo1;
      }else{
        this.equipo = val.equipo2;
      }

      // console.log(randomico);
      // console.log(this.equipo['equipo2']);
    });
  }

  onClick(){
    this.mostrar_texto = false;
    this.src = './assets/icon/dado-color.gif';
    this.alertCard();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `
      <ion-list>
          <ion-list-header>
            <ion-label>
             ¿GANADOR EQUIPO ${this.equipo}?
            </ion-label>
          </ion-list-header>
          <ion-item>
            <ion-select placeholder="Seleccione">
              <ion-select-option value="yes">Si</ion-select-option>
              <ion-select-option value="no">No</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>
  `,
      buttons: [
        {
          text: 'Continuar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.getCamera();
          },
        },
      ],
    });

    await alert.present();




  }



  async alertCard() {
    const alert = await this.alertCtrl.create({
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `<ion-card color="fondo">
      <ion-card-header color="primary">
        <ion-card-title><ion-icon name="paw-outline" ></ion-icon></ion-card-title>
        <ion-card-title>EQUIPO LEONES</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <ion-list>
    <ion-item>

    <ion-label>COLOR VERDE</ion-label>

    </ion-item>

    <ion-img src="./assets/icon/verde.jpg">
    </ion-img>

    </ion-card-content>
    </ion-card>`,
      buttons: [
        {
          text: 'Continuar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          },
        },
      ],
    });

    await alert.present();
  }

  getCamera(){

  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI
  }).then((res) => {
    console.log(res);
  }).catch(e => {
    console.log(e);
  });

  }
}
