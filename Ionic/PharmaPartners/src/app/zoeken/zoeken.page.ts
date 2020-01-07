import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MedaddComponent } from '../medadd/medadd.component';
import {Medicine, Medicines} from '../models/models-list';
import {MedicineService} from '../services/medicine-services';

@Component({
  selector: 'app-zoeken',
  templateUrl: 'zoeken.page.html',
  styleUrls: ['zoeken.page.scss']
})
export class ZoekenPage implements OnInit {
  public searchTerm: string = "";
  public items: any;
    medicines: Medicines = new Medicines();

  constructor(private dataService: MedicineService, private modalCtrl: ModalController) {
      this.medicines.items = new Array<Medicine>();

  }

  ngOnInit() {
      this.setFilteredItems();
      return this.dataService.getMedicine()
          .then(data => {
              this.medicines.items = data;
              console.log(this.medicines);
          });
  }

async showModal() {
  const modal = await this.modalCtrl.create({
    component: MedaddComponent,
    // componentProps: {
    //   data: nee
    // }
  });
  await modal.present();
}

    setFilteredItems() {
        // this.items = this.dataService.filterItems(this.searchTerm);
    }
}
