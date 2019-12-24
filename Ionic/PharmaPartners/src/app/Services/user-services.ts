import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { JWT } from '../models/models-list';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiURL = 'http://10.10.10.1:81/api/user/token/';

    constructor(private http: HttpClient) { }

    getUser(token): Promise<any> {

        let opts = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + localStorage.jwt
            })
        };

        return new Promise((resolve) => {
            this.http.get(this.apiURL + token, opts)
                .subscribe((response) => {
                    this.user = response;
                    // console.log(this.user);
                    resolve(this.user.id);
                });
        });
    }
}
