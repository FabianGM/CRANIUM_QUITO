import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.page.html',
  styleUrls: ['./view-target.page.scss'],
})
export class ViewTargetPage implements OnInit {
  cards: any =  [];
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  color = '';
  timer: number;
  interval;
  va;
  equipo = '';

  state: 'start' | 'stop' = 'stop';

  // tslint:disable-next-line: variable-name
  fondo_base: string;
  // tslint:disable-next-line: variable-name
  encabezado_base: string;
  // tslint:disable-next-line: variable-name
  pie_base: string;
  // tslint:disable-next-line: variable-name
  fuente_base: string;

  // tslint:disable-next-line: max-line-length
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private storage: Storage, public toastController: ToastController
    ) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
    this.storage.get('equipo').then((val) => {
        this.equipo = val;
    });
  }
  public ocultar = false;

  startTimer(duration: number){
    this.storage.get('tiempos').then((val) => {
      // tslint:disable-next-line: radix
      parseInt(val);
      // console.log( val);
      this.state = 'start';
      clearInterval(this.interval);
      this.timer = duration * val;
      if (this.timer > 0){

      this.ocultar = !this.ocultar;
      // tslint:disable-next-line: no-shadowed-variable
      this.storage.get('cardcolor').then((val) => {
        console.log( val);
        this.cards = val;


      });
    }


      this.updateTimeValue();
      this.interval =  setInterval( () => {
      this.updateTimeValue();
    }, 1000);
    });
  }

  async stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';

  }

  detener(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

   // console.log(this.timer);
    if (this.timer === 1){
    //  console.log("incorrect ")
      this.navCtrl.navigateForward(
        `/juego-principal`
      );
      this.presentToastIncorrecto();
      this.detener();
    }

    if (this.timer < 0){
      this.startTimer(0);
    }
  }

  ngOnInit() {
  }

  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: ``,
  //     backdropDismiss: false,
  //     subHeader: ``,
  //     message: `<ion-img src="./assets/icon/relog_de_arena.gif"></ion-img>`,
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Cancelar');
  //           this.stopTimer();
  //         },
  //       },
  //     ],
  //   });

  //   await alert.present();
  // }


  async presentAlert1(c) {


    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Respuesta',
      message: `<strong>${c}</strong>`,
      buttons: [
        {
          text: 'Incorrecto',
          role: 'cancel',
          cssClass: 'secondary',

          handler: async (blah) => {
            this.presentToastIncorrecto();
            this.stopTimer();
            await this.storage.get('equipo').then((val) => {
              

              this.equipo = val;

            });


            this.navCtrl.navigateForward(
              `/juego-principal`
            );
          }
        }, {
          text: 'Correcto',
          handler: () => {
            console.log('Correcto');
            this.alertCorrecto();
            this.stopTimer();
            this.navCtrl.navigateForward(
              `/juego-principal`
            );
          }
        }
      ]
    });

    await alert.present();
  }

  async alertCorrecto(){

    const randomico = Math.round(Math.random() * (4 - 1) + 1);
    // console.log('VALOR:', randomico);

    if (randomico === 1 ){ // 1 SERÁ PARA EL COLOR VERDE
      this.color = './assets/icon/verde.jpg';

    }
    if (randomico === 2){ // 2 SERÁ PARA EL COLOR AZUL
      this.color = './assets/icon/azul.png';

    }
    if (randomico === 3){ // 3 SERÁ PARA EL COLOR AMARILLO
      this.color = './assets/icon/amarillo.png';

    }
    if (randomico === 4){ // 4 SERÁ PARA EL COLOR ROJO
      this.color = './assets/icon/rojo.png';

    }

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Ganador !!!',
      subHeader: 'Sigue por el camino ',
      message: ` </ion-item>
      <ion-img src=${this.color}>
      </ion-img>`,
      buttons: ['Listo']
    });

    await alert.present();
  }


  async presentToastIncorrecto() {
    const toast = await this.toastController.create({
      message: 'Perdiste suerte en el próximo turno',
      duration: 3000
    });
    toast.present();
  }


}


