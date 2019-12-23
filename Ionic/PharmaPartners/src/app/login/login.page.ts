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
        return this.dataService.login()
            .then(data => {
                console.log(data);
            }).catch(err => {
                window.console.log(err);
            })
    }

  ngOnInit() {
  }

}
