import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.page.html',
  styleUrls: ['./view-target.page.scss'],
})
export class ViewTargetPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `<h4>52 segundos restantes</h4><ion-img src="./assets/icon/relog_de_arena.gif"></ion-img>`,
      buttons: [
        {
          text: 'Bien',
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
      header: ``,
      backdropDismiss: false,
      subHeader: ``,
      message: `<ion-button fill="outline" slot="end">Correcto </ion-button>  <ion-button fill="outline" slot="end">Incorrecto </ion-button>`,
      buttons: [
        {
          text: 'Bien',
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

}
