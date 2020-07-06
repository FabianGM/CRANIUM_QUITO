import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesOrNoPageRoutingModule } from './yes-or-no-routing.module';

import { YesOrNoPage } from './yes-or-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YesOrNoPageRoutingModule
  ],
  declarations: [YesOrNoPage]
})
export class YesOrNoPageModule {}
