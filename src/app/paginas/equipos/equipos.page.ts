import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.page.html',
  styleUrls: ['./equipos.page.scss'],
})
export class EquiposPage implements OnInit {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;
  
informacion = {
  equipo1: '',
  equipo2: ''
};
  constructor( private storage: Storage,public toastController: ToastController, public navCtrl: NavController) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
   }

  ngOnInit() {
  }

  async registroDatos(){
    console.log(this.informacion.equipo1);
    await this.storage.set('equipos', this.informacion);
  
    if(this.informacion.equipo1.length===0 || this.informacion.equipo2.length===0){
      this.presentToast();
      this.navCtrl.navigateForward(
        `/equipos`
      );   
    }else{
      this.navCtrl.navigateForward(
        `/juego-principal`
      );   

    }
  }

  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Llene todos los equipos por favor',
      duration: 2000
    });
    toast.present();
  }

}
