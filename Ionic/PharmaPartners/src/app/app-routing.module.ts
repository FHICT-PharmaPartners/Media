import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  { 
    path: 'profiel',
    loadChildren: () => import('./profiel/profiel.module').then( m => m.ProfielPageModule)
  },
  {
    path: 'overzicht',
    loadChildren: () => import('./overzicht/overzicht.module').then( m => m.OverzichtPageModule)
  },
  {
    path: 'zoeken',
    loadChildren: () => import('./zoeken/zoeken.module').then( m => m.ZoekenPageModule)
  },
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registreren',
    loadChildren: () => import('./registreren/registreren.module').then( m => m.RegistrerenPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
