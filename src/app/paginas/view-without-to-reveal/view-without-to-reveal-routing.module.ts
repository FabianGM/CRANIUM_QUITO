import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWithoutToRevealPage } from './view-without-to-reveal.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWithoutToRevealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWithoutToRevealPageRoutingModule {}
