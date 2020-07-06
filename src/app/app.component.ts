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

  componentes: componentes[]=[
    {
    icono: 'settings-outline',
    name: 'Configuracion',
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
    icono: 'people-circle-outline',
    name: 'Equipos',
    redirecTo: '/equipos'
  },
  {
    icono: 'newspaper-outline',
    name: 'Home',
    redirecTo: '/home'
  }
];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
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
  
}

interface componentes{
  icono: String;
  name: String;
  redirecTo: String
}