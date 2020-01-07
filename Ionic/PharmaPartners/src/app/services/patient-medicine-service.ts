import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PatientMedicineService {

    private patientMedicine: any;
    private diagnose: any;

    constructor(private http: HttpClient) {
    }

    getPatientMedicine(): Promise<any> {
        const url = '/api/patientMedicine/patient/' + localStorage.getItem(`Token`);
        const opts = {
            headers: new HttpHeaders({
                Authorization: `Bearer ` + localStorage.getItem(`Token`)
            })
        };

        return new Promise((resolve) => {
            this.http.get(url, opts)
                .subscribe((response) => {
                    this.patientMedicine = response;
                    resolve(this.patientMedicine);
                });
        });
    }

    saveMedicine(dosage, startDate, endDate): Promise<any> {
        // const url = '/api/patientMedicine/addMedicine';
        const id = localStorage.getItem("medicine");
        const url = '/api/patientMedicine/addMedicine/' + localStorage.getItem(`Token`);

        const opts = {
            headers: new HttpHeaders({
                Authorization: `Bearer ` + localStorage.getItem(`Token`),
                'Content-Type': 'application/json',
                'medicine': id
            })
        };

        const bodyArray = {
            "dosage": dosage,
            "startDate": startDate,
            "endDate": endDate
        };

        return new Promise((resolve) => {
            this.http.post(url, JSON.stringify(bodyArray), opts)
                .subscribe((response) => {
                    this.patientMedicine = response;
                    resolve(this.patientMedicine);
                });
        });
    }

    getDiagnose(): Promise<any> {
        const url = '/api/patientMedicine/diagnosis';
        const opts = {
            headers: new HttpHeaders({
                Authorization: `Bearer ` + localStorage.getItem(`Token`)
            })
        };

        return new Promise((resolve) => {
            this.http.get(url, opts)
                .subscribe((response) => {
                    console.log(response);
                    this.diagnose = response;
                    resolve(this.diagnose);
                });
        });
    }
}
