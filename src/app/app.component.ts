import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  componentes: componentes[] = [
    {
    icono: 'settings-outline',
    name: 'Configuración',
    redirecTo: '/configuracion'
  },
  {
    icono: 'logo-reddit',
    name: 'Objetivo',
    redirecTo: '/objetivo'
  },
  {
    icono: 'document-text-outline',
    name: 'Acerca de',
    redirecTo: '/acerca'
  },
  {
    icono: 'newspaper-outline',
    name: 'Home',
    redirecTo: '/home'
  }
];
  fondo_base: string;
  encabezado_base: string;
  // tslint:disable-next-line: variable-name
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.fondo_base = localStorage.getItem('fondo');
    this.encabezado_base = localStorage.getItem('encabezado');
    this.pie_base = localStorage.getItem('pie');
    this.fuente_base = localStorage.getItem('fuente');
  }

  closeMenu() {
    this.menu.close();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  almacenar(){
    localStorage.setItem('fondo', this.fondo_base);
    localStorage.setItem('encabezado', this.encabezado_base);
    localStorage.setItem('pie', this.pie_base);
    localStorage.setItem('fuente', this.fuente_base);
  }

  OnChange(event){
    window.location.reload();
    const valor = event.detail.value;

    if (valor === 'tema1'){
     console.log(this.encabezado_base);
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


}

// tslint:disable-next-line: class-name
interface componentes{
  icono: string;
  name: string;
  redirecTo: string;
}
