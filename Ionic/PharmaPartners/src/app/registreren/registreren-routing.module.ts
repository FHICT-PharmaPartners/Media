import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrerenPage } from './registreren.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrerenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrerenPageRoutingModule {}
