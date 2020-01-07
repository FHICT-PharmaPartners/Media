import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    authenticate() {
        const jwt = localStorage.getItem(`Token`);

        if (!jwt) {
            location.href = `/login`;
        } else {
            return 'ok';
        }
    }
}
