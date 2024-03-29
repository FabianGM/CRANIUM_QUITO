import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstilosPageRoutingModule } from './estilos-routing.module';

import { EstilosPage } from './estilos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstilosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstilosPage]
})
export class EstilosPageModule {}
