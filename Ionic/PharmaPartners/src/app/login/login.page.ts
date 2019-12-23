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

        //hier moet ik de waardes van input velden komen
        let username = "test@test.nl";
        let password = "P@ssw0rd";

        return this.dataService.login(username, password)
            .then(data => {
                let jwt = data.jwt;
                localStorage.setItem("jwt", jwt);
            }).catch(err => {
                window.console.log(err);
            })
    }

  ngOnInit() {
  }

}
