import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-juego-principal',
  templateUrl: './juego-principal.page.html',
  styleUrls: ['./juego-principal.page.scss'],
})
export class JuegoPrincipalPage implements OnInit {

  arreglocartas=[];

  // tslint:disable-next-line: variable-name
  mostrar_dado = true;
  // tslint:disable-next-line: variable-name
  mostrar_texto = true;
  src = './assets/icon/dado.jpeg';


  equipo = [];
  color = '';
  etiqueta = '';


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
              private camera: Camera, private storage: Storage) {
                this.fondo_base = localStorage.getItem('fondo');
                this.encabezado_base = localStorage.getItem('encabezado');
                this.pie_base = localStorage.getItem('pie');
                this.fuente_base = localStorage.getItem('fuente');
              }

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
             ¿GANADOR EQUIPO LEONES?
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
            console.log(this.etiqueta);
            this.ver();
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
      //console.log( val.card);  
      this.arreglocartas=val;   
      console.log(this.arreglocartas); 
      let arreglocolor=[];
      for (let index = 0; index < this.arreglocartas.length; index++) {
        if (this.arreglocartas[index].card===this.etiqueta) {
          arreglocolor.push(this.arreglocartas[index]);          
        }
        
      }
      console.log(arreglocolor);
    });
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
