import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPurplePageRoutingModule } from './view-purple-routing.module';

import { ViewPurplePage } from './view-purple.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPurplePageRoutingModule
  ],
  declarations: [ViewPurplePage]
})
export class ViewPurplePageModule {}
