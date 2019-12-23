import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { JWT } from '../models/models-list';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiURL = 'http://10.10.10.1:81/api/login';
    private jwt: any;

    constructor(private http: HttpClient) { }

    login(username, password): Promise<any> {

        let bodyArray = {
            username: username,
            password: password
        };


        let opts = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return new Promise((resolve) => {
            this.http.post(this.apiURL, JSON.stringify(bodyArray), opts)
                .subscribe((response) => {
                    this.jwt = response;
                    resolve(this.jwt);
                });
        });
    }
}
