import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagramPage } from './anagram.page';

const routes: Routes = [
  {
    path: '',
    component: AnagramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnagramPageRoutingModule {}
