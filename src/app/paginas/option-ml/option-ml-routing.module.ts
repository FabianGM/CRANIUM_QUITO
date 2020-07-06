import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionMlPage } from './option-ml.page';

const routes: Routes = [
  {
    path: '',
    component: OptionMlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionMlPageRoutingModule {}
