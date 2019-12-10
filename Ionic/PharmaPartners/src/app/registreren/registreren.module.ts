import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrerenPageRoutingModule } from './registreren-routing.module';

import { RegistrerenPage } from './registreren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrerenPageRoutingModule
  ],
  declarations: [RegistrerenPage]
})
export class RegistrerenPageModule {}
