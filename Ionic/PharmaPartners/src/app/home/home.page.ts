import {Component, OnInit} from '@angular/core';
import {Diagnose, PatientMedicine, PatientMedicines} from '../models/models-list';
import {PatientMedicineService} from '../services/patient-medicine-service';
import {ModalController} from '@ionic/angular';
import {ShowConflictComponent} from '../show-conflict/show-conflict.component';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    diagnose: Diagnose = new Diagnose();
    patientMedicines: PatientMedicines = new PatientMedicines();
    delete(medicine){

    }
    constructor(private dataService: PatientMedicineService, private modalCtrl: ModalController) {
        this.patientMedicines.items = new Array<PatientMedicine>();
    }

    ngOnInit() {
        this.dataService.getPatientMedicine()
            .then(data => {
                this.patientMedicines.items = data;
            });
        return this.dataService.getDiagnose()
            .then(data => {
                this.diagnose = data;
            });
    }

    async showModal(diagnose) {
        const modal = await this.modalCtrl.create({
            component: ShowConflictComponent,
        });

        await modal.present();
    }
}
