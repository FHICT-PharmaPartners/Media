import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoekPage } from './zoek.page';

const routes: Routes = [
  {
    path: '',
    component: ZoekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoekPageRoutingModule {}
