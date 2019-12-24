import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { ZoekenPageRoutingModule } from './zoeken-routing.module';

import { ZoekenPage } from './zoeken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ZoekenPageRoutingModule
  ],
  declarations: [ZoekenPage]
})
export class ZoekenPageModule {}
