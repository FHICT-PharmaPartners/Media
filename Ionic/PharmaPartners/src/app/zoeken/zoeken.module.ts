import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoekenPageRoutingModule } from './zoeken-routing.module';

import { ZoekenPage } from './zoeken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoekenPageRoutingModule
  ],
  declarations: [ZoekenPage]
})
export class ZoekenPageModule {}
