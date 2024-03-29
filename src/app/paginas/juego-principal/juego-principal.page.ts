import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Camera, MediaType } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-juego-principal',
  templateUrl: './juego-principal.page.html',
  styleUrls: ['./juego-principal.page.scss'],
})
export class JuegoPrincipalPage implements OnInit {
  arreglocartas = [];
  image: string;
  // tslint:disable-next-line: variable-name
  mostrar_dado = true;
  // tslint:disable-next-line: variable-name
  mostrar_texto = true;
  src = './assets/icon/dado.png';
  texto = 'GANADOR EQUIPO: ';
  url = './assets/icon/anthony.jpeg';

  equipo = [];
  color = '';
  etiqueta = '';

  contador = 0;
  // tslint:disable-next-line: variable-name
  fondo_base: string;
  // tslint:disable-next-line: variable-name
  encabezado_base: string;
  // tslint:disable-next-line: variable-name
  pie_base: string;
  // tslint:disable-next-line: variable-name
  fuente_base: string;

  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private camera: Camera, private storage: Storage,
              private socialSharing: SocialSharing,
              private file: File) {
                this.fondo_base = localStorage.getItem('fondo');
                this.encabezado_base = localStorage.getItem('encabezado');
                this.pie_base = localStorage.getItem('pie');
                this.fuente_base = localStorage.getItem('fuente');



              }

  async validar(){
    await this.storage.get('equipo').then((val) => {

      this.equipo = val;
      console.log('AAA', val);
    });

  }


  ngOnInit() {
    setTimeout(() => {
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


        this.storage.set('equipo', this.equipo);
        // console.log(this.equipo['equipo2']);
      });

    }, 500);

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
            <h2> ¿Ganador equipo ${this.equipo}?
            </h2>
            </ion-label>
          </ion-list-header>
          <ion-img src="./assets/icon/winner.gif"></ion-img>
        </ion-list>
  `,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Continuar',
          handler: () => {

            this.getCamera();
          }
        }

      ],
    });

    await alert.present();

  }
  async alertCard() {

    const randomico = Math.round(Math.random() * (5 - 1) + 1);
    // console.log('VALOR:', randomico);

    if (randomico === 1 ){ // 1 SERÁ PARA EL COLOR VERDE
      this.color = './assets/icon/verde.jpg';
      this.etiqueta = 'Verde';
    }
    if (randomico === 2){ // 2 SERÁ PARA EL COLOR AZUL
      this.color = './assets/icon/azul.png';
      this.etiqueta = 'Azul';
    }
    if (randomico === 3){ // 3 SERÁ PARA EL COLOR AMARILLO
      this.color = './assets/icon/amarillo.png';
      this.etiqueta = 'Amarillo';
    }
    if (randomico === 4){ // 4 SERÁ PARA EL COLOR ROJO
      this.color = './assets/icon/rojo.png';
      this.etiqueta = 'Rojo';
    }
    if (randomico === 5){ // 5 SERÁ PARA EL COLOR ROJO
      this.color = './assets/icon/morado.png';
      this.etiqueta = 'Morado';
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

    <ion-label>Color ${this.etiqueta } </ion-label>

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
            // actuar-amarillo
            // dibujar-verde
            // esas van con revelar
            // moldear-rojo
            let navegar = '';

            this.ver();
            this.storage.set('equipo', this.equipo);
            this.storage.get('equipos').then((val ) => {
              if (val.equipo1 === this.equipo){
                  this.equipo = val.equipo2;
               }else{
                this.equipo = val.equipo1;
             }


  });
            if (this.etiqueta === 'Amarillo' || this.etiqueta === 'Verde' || this.etiqueta === 'Rojo' ){
              navegar = '/view-target';
            }
            if (this.etiqueta === 'Morado') {
              navegar = '/view-purple';
            }
            if (this.etiqueta === 'Azul') {
              navegar = '/view-without-to-reveal';
            }
            this.navCtrl.navigateForward(
              `${navegar}`
            );
          },
        },
      ],
    });

    await alert.present();
  }
  ver(){
    this.storage.get('datosg.json').then((val) => {
      // console.log( val.card);
      this.arreglocartas = val;
      console.log(this.arreglocartas);
      const arreglocolor = [];
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < this.arreglocartas.length; index++) {
        if (this.arreglocartas[index].card === this.etiqueta) {
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

  async shareWhatsapp(){

    if ( this.image === ''){
      this.image = null;
    }
    this.socialSharing.shareViaWhatsApp((this.texto + this.equipo + '!!!'), this.image).then(() => {

    }).catch(e => {
      console.log('Error whatsapp');
    });
  }

  async shareFacebook(){

    if ( this.image === ''){
      this.image = null;
    }
    this.socialSharing.shareViaFacebook((this.texto + this.equipo + '!!!'), this.image).then(() => {

    }).catch(e => {
      console.log('ERROR FACEBOOK');
    });

  }


   getCamera(){

    this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.FILE_URI,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: false,
    encodingType: this.camera.EncodingType.JPEG,
    targetHeight: 1024,
    targetWidth: 1024,
    correctOrientation: true,
    saveToPhotoAlbum: true
  }).then((res) => {
    this.image = res;
  }).catch(e => {
    console.log(e);
  });

  }
}
