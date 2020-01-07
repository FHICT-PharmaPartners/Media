import {Component, OnInit} from '@angular/core';
import {PatientMedicines, PatientMedicine} from '../models/models-list';
import {PatientMedicineService} from '../services/patient-medicine-service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

patientMedicines: PatientMedicines = new PatientMedicines();

    constructor(private dataService: PatientMedicineService) {
        this.patientMedicines.items = new Array<PatientMedicine>();
    }

    ngOnInit() {
      return this.dataService.getPatientMedicine()
          .then(data => {
            this.patientMedicines.items = data;
          });
    }
}
