import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoPrincipalPageRoutingModule } from './juego-principal-routing.module';

import { JuegoPrincipalPage } from './juego-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoPrincipalPageRoutingModule
  ],
  declarations: [JuegoPrincipalPage]
})
export class JuegoPrincipalPageModule {}
