import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersoonsgegevensPageRoutingModule } from './persoonsgegevens-routing.module';

import { PersoonsgegevensPage } from './persoonsgegevens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersoonsgegevensPageRoutingModule
  ],
  declarations: [PersoonsgegevensPage]
})
export class PersoonsgegevensPageModule {}
