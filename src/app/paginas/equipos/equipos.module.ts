import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposPageRoutingModule } from './equipos-routing.module';

import { EquiposPage } from './equipos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquiposPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EquiposPage]
})
export class EquiposPageModule {}
