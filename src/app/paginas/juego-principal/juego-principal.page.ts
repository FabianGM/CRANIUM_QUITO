import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
  src = './assets/icon/dado.jpg';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.mostrar_texto = false;
    this.src = './assets/icon/dado-color.gif';


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

}
