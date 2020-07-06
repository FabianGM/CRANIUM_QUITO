import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTargetPageRoutingModule } from './view-target-routing.module';

import { ViewTargetPage } from './view-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTargetPageRoutingModule
  ],
  declarations: [ViewTargetPage]
})
export class ViewTargetPageModule {}
