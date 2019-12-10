import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoekenPageRoutingModule } from './zoeken-routing.module';

import { ZoekenPage } from './zoeken.page';
import { ExpandableComponent } from '../components/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoekenPageRoutingModule
  ],
  declarations: [ZoekenPage, ExpandableComponent]
})
export class ZoekenPageModule {}
