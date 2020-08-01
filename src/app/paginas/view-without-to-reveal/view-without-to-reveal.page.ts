import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-view-without-to-reveal',
  templateUrl: './view-without-to-reveal.page.html',
  styleUrls: ['./view-without-to-reveal.page.scss'],
})
export class ViewWithoutToRevealPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number;
  interval;

  state: 'start' | 'stop' = 'stop';

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  constructor(public alertCtrl: AlertController) { 
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 60;
    this.updateTimeValue;
    this.interval =  setInterval( () =>{
      this.updateTimeValue();
    }, 1000)
  }

  async stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
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
      header: `Respuesta: Panecillo`,
      backdropDismiss: false,
      subHeader: ``,
      message: `<h4>52 segundos restantes</h4><ion-img src="./assets/icon/relog_de_arena.gif"></ion-img> `
 ,
      buttons: [
     
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ],
    });

    await alert.present();
  }


  

}
