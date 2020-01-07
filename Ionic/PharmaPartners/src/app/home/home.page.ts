import {Component, OnInit} from '@angular/core';
import {PatientMedicines, PatientMedicine} from '../models/models-list';
import {PatientMedicineService} from '../services/patient-medicine-service';
import {AuthenticationService} from "../services/authentication-service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    patientMedicines: PatientMedicines = new PatientMedicines();
    authenticationService: AuthenticationService = new AuthenticationService();

    constructor(private dataService: PatientMedicineService) {
        this.patientMedicines.items = new Array<PatientMedicine>();
    }

    ngOnInit() {
        this.authenticationService.authenticate();
        return this.dataService.getPatientMedicine()
            .then(data => {
                this.patientMedicines.items = data;
            });
    }
}
