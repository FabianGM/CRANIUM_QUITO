import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTargetPage } from './view-target.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTargetPageRoutingModule {}
