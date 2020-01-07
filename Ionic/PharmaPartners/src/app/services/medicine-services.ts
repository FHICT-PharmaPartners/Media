import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MedicineService {

    private apiURL = '/api/medicine';
    private medicine: any;

    constructor(private http: HttpClient) {
    }

    getMedicine(): Promise<any> {

        const opts = {
            headers: new HttpHeaders({
                Authorization: `Bearer ` + localStorage.getItem(`Token`)
            })
        };

        return new Promise((resolve) => {
            this.http.get(this.apiURL, opts)
                .subscribe((response) => {

                    this.medicine = response;
                    resolve(this.medicine);
                });
        });
    }
}
