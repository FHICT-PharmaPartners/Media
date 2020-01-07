import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PatientMedicineService {

    private apiURL = '/api/patientMedicine/patient/' + localStorage.getItem(`Token`);
    private patientMedicine: any;

    constructor(private http: HttpClient) {
    }

    getPatientMedicine(): Promise<any> {

        const opts = {
            headers: new HttpHeaders({
                Authorization: `Bearer ` + localStorage.getItem(`Token`)
            })
        };

        return new Promise((resolve) => {
            this.http.get(this.apiURL, opts)
                .subscribe((response) => {
                    console.log(response);
                    this.patientMedicine = response;
                    resolve(this.patientMedicine);
                });
        });
    }
}
