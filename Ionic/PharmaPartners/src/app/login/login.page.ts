import { Component, OnInit } from '@angular/core';
import { JWT } from '../models/models-list';
import { LoginService } from '../services/login-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private dataService: LoginService) { }

  logCredentials(emailAddress){
    window.console.log(emailAddress);
  }

  login() {
      let username = this.username;
      let password = this.password;

      return this.dataService.login(username, password)
          .then(data => {
              let jwt = data.jwt;
              localStorage.setItem("jwt", jwt);

              location.href = "/home";
          }).catch(err => {
              alert (err)
          })
    }

  ngOnInit() {
  }

}
