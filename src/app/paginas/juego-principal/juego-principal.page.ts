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
      message: `
      <ion-list>
          <ion-list-header>
            <ion-label>
             ¿GANADOR EL EQUIPO 1?
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
            console.log('Cancelar');
          },
        },
      ],
    });

    await alert.present();
  }

}
