import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../models/models-list';

@Injectable({
  providedIn: 'root'
})
export class MedicineService{

  private apiURL = 'http://145.93.142.110:81/api/medicine';
  private medicine: Medicine;

  constructor(private http: HttpClient){}

  getMedicine(): Promise<Medicine>{

    return new Promise((resolve) => {
      this.http.get(this.apiURL)
          .subscribe((response) => {
            window.console.log(response);
            this.medicine = response;
            resolve(this.medicine);
      });
    });
  }
}