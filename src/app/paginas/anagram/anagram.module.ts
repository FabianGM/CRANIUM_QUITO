import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnagramPageRoutingModule } from './anagram-routing.module';

import { AnagramPage } from './anagram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnagramPageRoutingModule
  ],
  declarations: [AnagramPage]
})
export class AnagramPageModule {}
