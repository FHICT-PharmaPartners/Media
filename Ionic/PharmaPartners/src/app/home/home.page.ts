import {Component, OnInit} from '@angular/core';
import {PatientMedicines, PatientMedicine} from '../models/models-list';
import {PatientMedicineService} from '../Services/patient-medicine-service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

patientMedicines: PatientMedicines = new PatientMedicines();
  constructor(private dataService: MedicineService) {
    this.medicines.items = new Array;
  }

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
