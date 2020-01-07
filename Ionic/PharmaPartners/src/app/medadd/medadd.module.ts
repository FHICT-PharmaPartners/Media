import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MedaddComponent } from './medadd.component';

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [MedaddComponent],
  entryComponents: [MedaddComponent],
  exports: [MedaddComponent]
})
export class MedaddComponentModule{}
