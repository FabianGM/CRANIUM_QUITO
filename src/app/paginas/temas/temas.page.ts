import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {

  fondo_base: string;
  encabezado_base: string;
  pie_base: string;
  fuente_base: string;

  Temas = {
    tema1: {
      encabezado: 'encabezado',
      fuente: 'fuente2',
      fondo: 'fondo',
      pie: 'footer'
    },
    tema2: {
      encabezado: 'encabezado1',
      fuente: 'fuente3',
      fondo: 'fondo1',
      pie: 'footer1'
    }, 
    tema3: {
      encabezado: 'encabezado2',
      fuente: 'fuente3',
      fondo: 'fondo2',
      pie: 'footer2'
    },
  };

  constructor(public toastController: ToastController) {
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
   }

   async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

   almacenar(){
     localStorage.setItem('fondo', this.fondo_base);
     localStorage.setItem('encabezado', this.encabezado_base);
     localStorage.setItem('pie', this.pie_base);
     localStorage.setItem('fuente', this.fuente_base);
   }

   async OnChange(event){
    const toast = await this.toastController.create({
      message: 'Realizando cambios',
      duration: 2000
    });
    toast.present();
    window.location.reload();
    const valor = event.detail.value;
  
    if (valor === 'tema1'){
      console.log(this.encabezado_base)
      this.encabezado_base = this.Temas.tema1.encabezado;
      this.fuente_base = this.Temas.tema1.fuente;
      this.fondo_base = this.Temas.tema1.fondo;
      this.pie_base = this.Temas.tema1.pie;
    }
  
    if (valor === 'tema2'){
      this.encabezado_base = this.Temas.tema2.encabezado;
      this.fuente_base = this.Temas.tema2.fuente;
      this.fondo_base = this.Temas.tema2.fondo;
      this.pie_base = this.Temas.tema2.pie;
    }

    if (valor === 'tema3'){
      this.encabezado_base = this.Temas.tema3.encabezado;
      this.fuente_base = this.Temas.tema3.fuente;
      this.fondo_base = this.Temas.tema3.fondo;
      this.pie_base = this.Temas.tema3.pie;
    }

    this.almacenar();
    }

  ngOnInit() {
  }

}
