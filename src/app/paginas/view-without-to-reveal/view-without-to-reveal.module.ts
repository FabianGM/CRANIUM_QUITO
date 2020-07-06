import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWithoutToRevealPageRoutingModule } from './view-without-to-reveal-routing.module';

import { ViewWithoutToRevealPage } from './view-without-to-reveal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWithoutToRevealPageRoutingModule
  ],
  declarations: [ViewWithoutToRevealPage]
})
export class ViewWithoutToRevealPageModule {}
