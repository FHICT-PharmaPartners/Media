import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { ZoekPageRoutingModule } from './zoek-routing.module';

import { ZoekPage } from './zoek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ZoekPageRoutingModule
  ],
  declarations: [ZoekPage]
})
export class ZoekPageModule {}
