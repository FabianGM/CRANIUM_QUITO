import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-without-to-reveal',
  templateUrl: './view-without-to-reveal.page.html',
  styleUrls: ['./view-without-to-reveal.page.scss'],
})
export class ViewWithoutToRevealPage implements OnInit {

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
          text: "Bien",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Cancelar");
          },
        },
      ],
    });

    await alert.present();
  }


 

}
