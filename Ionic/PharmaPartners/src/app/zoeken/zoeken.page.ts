import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MedaddComponent} from '../medadd/medadd.component';
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
        return this.dataService.getMedicine()
            .then(data => {
                this.medicines.items = data;
                this.setFilteredItems();
            });
    }

    async showModal(id) {
        const modal = await this.modalCtrl.create({
            component: MedaddComponent,
        });

        localStorage.setItem("medicine", id);

        await modal.present();
    }

    setFilteredItems() {
        this.medicines.items = this.dataService.filterItems(this.searchTerm);
    }
}
