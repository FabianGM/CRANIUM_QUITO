import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { DefaultUrlSerializer } from '@angular/router';
import { RangeValueAccessor } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.page.html',
  styleUrls: ['./view-target.page.scss'],
})
export class ViewTargetPage implements OnInit {

  
  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  color = '';
  timer: number;
  interval;

  state: 'start' | 'stop' = 'stop';

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, private storage: Storage) { 
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  startTimer(duration: number){
    this.storage.get('tiempos').then((val) => {
      parseInt(val);
      console.log( val); 
      this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * val;
    this.updateTimeValue;
    this.interval =  setInterval( () =>{
      this.updateTimeValue();
    }, 1000)   
    });
  }

  async stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Perdiste',
      subHeader: 'Más suerte la próxima :( ...',
      buttons: ['Listo']
    });

    await alert.present();
  }

  updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2); 
    seconds = String('0' + Math.floor(seconds)).slice(-2); 

    const text = minutes+':'+seconds;
    this.time.next(text);

    --this.timer;

    if (this.timer < 0){
      this.startTimer(0);
    }
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `<ion-img src="./assets/icon/relog_de_arena.gif"></ion-img>`,
      buttons: [
        {
          text: 'Cancelar',
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


  async presentAlert1() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Incorrecto',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.navCtrl.navigateForward(
              `/juego-principal`
            );
          }
        }, {
          text: 'Correcto',
          handler: () => {
            console.log('Correcto');
            this.alertCorrecto();
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
}
