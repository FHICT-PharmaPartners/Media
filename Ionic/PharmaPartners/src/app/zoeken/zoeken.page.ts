import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MedaddComponent} from '../medadd/medadd.component';
import {Medicine, Medicines} from '../models/models-list';
import {MedicineService} from '../services/medicine-services';
import {AuthenticationService} from "../services/authentication-service";

@Component({
    selector: 'app-zoeken',
    templateUrl: 'zoeken.page.html',
    styleUrls: ['zoeken.page.scss']
})
export class ZoekenPage implements OnInit {
    public searchTerm: string = "";

    medicines: Medicines = new Medicines();
    authenticationService: AuthenticationService = new AuthenticationService();

    constructor(private dataService: MedicineService, private modalCtrl: ModalController) {
        this.medicines.items = new Array<Medicine>();
        console.log(this.medicines);
    }

    ngOnInit() {
        this.authenticationService.authenticate();
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
