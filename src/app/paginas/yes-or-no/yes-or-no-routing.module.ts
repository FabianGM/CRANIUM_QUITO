import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesOrNoPage } from './yes-or-no.page';

const routes: Routes = [
  {
    path: '',
    component: YesOrNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesOrNoPageRoutingModule {}
