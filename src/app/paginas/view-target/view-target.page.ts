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
<<<<<<< Updated upstream
          text: 'Bien',
          role: 'cancel',
          cssClass: 'secondary',
=======
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
>>>>>>> Stashed changes
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
      message: `<ion-button   >Correcto </ion-button>  <ion-button  >Incorrecto </ion-button>`,
      buttons: [
        {
<<<<<<< Updated upstream
          text: 'Bien',
          role: 'cancel',
          cssClass: 'secondary',
=======
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
>>>>>>> Stashed changes
          handler: (blah) => {
            console.log('Cancelar');
          },
        },
      ],
    });

    await alert.present();
  }

}
