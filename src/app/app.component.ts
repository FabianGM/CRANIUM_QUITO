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

      encabezado: 'encabezado',
      fuente: 'fuente2',
      fondo: 'fondo',
      pie: 'footer'

  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,

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

      this.darkTheme();



    });
  }

  darkTheme(){
    const prefersL = window.matchMedia('(prefers-color-scheme: light)');
    const prefersD = window.matchMedia('(prefers-color-scheme: dark)');


    if (localStorage.getItem('c') === null){
  if (prefersL.matches || prefersD.matches ){
    console.log(localStorage.getItem('fondo'));
    if (localStorage.getItem('fondo') === null){
     window.location.reload();
    }
    localStorage.setItem('fondo', this.Temas.fondo);
    localStorage.setItem('encabezado', this.Temas.encabezado);
    localStorage.setItem('pie', this.Temas.pie);
    localStorage.setItem('fuente', this.Temas.fuente);
 // document.body.classList.toggle('dark');
    localStorage.setItem('c', 'a');
  }

}

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



    this.almacenar();

   }


}

// tslint:disable-next-line: class-name
interface componentes{
  icono: string;
  name: string;
  redirecTo: string;
}
