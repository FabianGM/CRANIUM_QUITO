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
  color = '';
  etiqueta = '';

  constructor(private alertCtrl: AlertController,
              private camera: Camera,
              private storage: Storage) { }

  ngOnInit() {
    this.storage.get('equipos').then((val) => {
      // console.log('Los equipos son: ', val);
      // this.equipo = val;

      const randomico = Math.round(Math.random() * (2 - 1) + 1);
      // console.log(randomico);
      if (randomico === 1){  // 1 pertenece al 1er Equipo
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

    const randomico = Math.round(Math.random() * (5 - 1) + 1);
    // console.log('VALOR:', randomico);

    if (randomico === 1 ){ // 1 SERÁ PARA EL COLOR VERDE
      this.color = './assets/icon/verde.jpg';
      this.etiqueta = 'Color Verde';
    }
    if (randomico === 2){ // 2 SERÁ PARA EL COLOR AZUL
      this.color = './assets/icon/azul.png';
      this.etiqueta = 'Color Azul';
    }
    if (randomico === 3){ // 3 SERÁ PARA EL COLOR AMARILLO
      this.color = './assets/icon/amarillo.png';
      this.etiqueta = 'Color Amarillo';
    }
    if (randomico === 4){ // 4 SERÁ PARA EL COLOR ROJO
      this.color = './assets/icon/rojo.png';
      this.etiqueta = 'Color Rojo';
    }
    if (randomico === 5){ // 5 SERÁ PARA EL COLOR ROJO
      this.color = './assets/icon/morado.png';
      this.etiqueta = 'Color Morado';
    }

    const alert = await this.alertCtrl.create({
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `<ion-card color="fondo">
      <ion-card-header color="primary">
        <ion-card-title><ion-icon name="paw-outline" ></ion-icon></ion-card-title>
        <ion-card-title>${this.equipo}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <ion-list>
    <ion-item>

    <ion-label>${this.etiqueta } </ion-label>

    </ion-item>

    <ion-img src=${this.color}>
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
