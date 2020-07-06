import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPurplePage } from './view-purple.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPurplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPurplePageRoutingModule {}
