import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiURL = '/login';
    private jwt: any;

    constructor(private http: HttpClient) { }

    login(username, password): Promise<any> {

        const bodyArray = {
            username,
            password
        };

        const opts = {
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
