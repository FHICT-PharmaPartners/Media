import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicine } from '../models/models-list';

@Injectable({
  providedIn: 'root'
})
export class MedicineService{

  private apiURL = 'http://10.10.10.1:81/api/medicine';
  private medicine: any;

  constructor(private http: HttpClient){}

  getMedicine(): Promise<any>{
      let jwt = localStorage.getItem("jwt");

    let opts = {
        headers: new HttpHeaders({
            'Authorization': 'Bearer ' + jwt
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
