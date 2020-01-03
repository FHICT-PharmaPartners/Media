import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../models/models-list';

@Injectable({
  providedIn: 'root'
})
export class MedicineService{

  private apiURL = '/api/medicine';
  private medicine: any;

  constructor(private http: HttpClient){}

  getMedicine(): Promise<any>{

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
