import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShowConflictComponent } from './show-conflict.component';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule],
    declarations: [ShowConflictComponent],
    entryComponents: [ShowConflictComponent],
    exports: [ShowConflictComponent]
})
export class ShowConflictComponentModule{}
