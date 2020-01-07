import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) {
    }

    private apiURL = `/user/token`;
    private user = Object;


    authenticate(username, password) {

        const opts = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        const jwt = localStorage.getItem(`Token`);

        if (!jwt) {
            location.href = `/login`;
        } else {
            return new Promise((resolve) => {
                this.http.post(this.apiURL + `/` + jwt, JSON.stringify(username, password), opts)
                    .subscribe((response) => {
                        this.user = response;
                        resolve(this.user);
                    });
            });
        }
    }
}
