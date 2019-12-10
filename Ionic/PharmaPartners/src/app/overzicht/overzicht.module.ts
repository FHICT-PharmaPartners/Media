import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverzichtPageRoutingModule } from './overzicht-routing.module';

import { OverzichtPage } from './overzicht.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverzichtPageRoutingModule
  ],
  declarations: [OverzichtPage]
})
export class OverzichtPageModule {}
