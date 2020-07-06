import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
  {
    path: 'administrador',
    loadChildren: () => import('./paginas/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },

  {

    path: 'temas',
    loadChildren: () => import('./paginas/temas/temas.module').then( m => m.TemasPageModule)
  },
  {
    path: 'estilos',
    loadChildren: () => import('./paginas/estilos/estilos.module').then( m => m.EstilosPageModule)
  },
  {
    path: 'view-target',
    loadChildren: () => import('./paginas/view-target/view-target.module').then( m => m.ViewTargetPageModule)
  },
  {
    path: 'view-without-to-reveal',
    loadChildren: () => import('./paginas/view-without-to-reveal/view-without-to-reveal.module').then( m => m.ViewWithoutToRevealPageModule)
  },
  {
    path: 'view-purple',
    loadChildren: () => import('./paginas/view-purple/view-purple.module').then( m => m.ViewPurplePageModule)
  },
  {
    path: 'anagram',
    loadChildren: () => import('./paginas/anagram/anagram.module').then( m => m.AnagramPageModule)
  },
  {
    path: 'option-ml',
    loadChildren: () => import('./paginas/option-ml/option-ml.module').then( m => m.OptionMlPageModule)
  },
  {
    path: 'yes-or-no',
    loadChildren: () => import('./paginas/yes-or-no/yes-or-no.module').then( m => m.YesOrNoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
