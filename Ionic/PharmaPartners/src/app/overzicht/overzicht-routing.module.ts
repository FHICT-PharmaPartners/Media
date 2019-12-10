import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverzichtPage } from './overzicht.page';

const routes: Routes = [
  {
    path: '',
    component: OverzichtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverzichtPageRoutingModule {}
