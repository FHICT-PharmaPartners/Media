import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { JWT } from '../models/models-list';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // private apiURL = '/user/token/';
    // private user = Object;
    //
    // constructor(private http: HttpClient) { }
    //
    // getUser(token): Promise<any> {
    //
    //     const opts = {
    //         headers: new HttpHeaders({
    //             Authorization: `Bearer ` + localStorage.getItem(`Token`)
    //         })
    //     };
    //
    //     return new Promise((resolve) => {
    //         this.http.get(this.apiURL + token, opts)
    //             .subscribe((response) => {
    //                 this.user = response;
    //                 console.log(this.user);
    //                 resolve(this.user);
    //             });
    //     });
    }
}
