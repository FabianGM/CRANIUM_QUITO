import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporizadorPageRoutingModule } from './temporizador-routing.module';

import { TemporizadorPage } from './temporizador.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporizadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TemporizadorPage]
})
export class TemporizadorPageModule {}
