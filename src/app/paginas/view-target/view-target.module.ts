import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, AlertController } from '@ionic/angular';

import { ViewTargetPageRoutingModule } from './view-target-routing.module';

import { ViewTargetPage } from './view-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTargetPageRoutingModule
  ],
  providers: [
   
    AlertController, 
   
  ],
  declarations: [ViewTargetPage]
})
export class ViewTargetPageModule {}
