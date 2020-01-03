import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  password = ``;
  username = ``;

  constructor(private dataService: LoginService) { }

   login() {
    const username = this.username;
    const password = this.password;

     window.console.log(username);

    return this.dataService.login(username, password)
        .then(data => {
          const jwt = data.jwt;
          localStorage.setItem(`Token`, jwt);

          location.href = `/home`;
        }).catch(err => {
          alert (err);
        });
  }

  ngOnInit() {
  }
}
