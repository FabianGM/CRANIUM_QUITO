import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OptionMlPageRoutingModule } from './option-ml-routing.module';

import { OptionMlPage } from './option-ml.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionMlPageRoutingModule
  ],
  declarations: [OptionMlPage]
})
export class OptionMlPageModule {}
