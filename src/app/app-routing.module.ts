import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'equipos',
    pathMatch: 'full'
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'objetivo',
    loadChildren: () => import('./paginas/objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./paginas/acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./paginas/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'temporizador',
    loadChildren: () => import('./paginas/temporizador/temporizador.module').then( m => m.TemporizadorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
