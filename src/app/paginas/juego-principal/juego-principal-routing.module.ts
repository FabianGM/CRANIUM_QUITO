import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoPrincipalPage } from './juego-principal.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoPrincipalPageRoutingModule {}
