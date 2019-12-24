import { Component } from '@angular/core';

import { Medicines, Medicine } from '../models/models-list';
import { MedicineService } from '../Services/medicine-services';
import { UserService } from '../Services/user-services';
// import { AuthenticationService } from '../services/AuthenticationService'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  medicines: Medicines = new Medicines;
  constructor(private dataService: MedicineService, private userService: UserService) {
    this.medicines.items = new Array;
  }

  const user: any;

  ngOnInit() {
    this.user = this.userService.getUser(localStorage.jwt);
    console.log(this.user);
    //console.log(user);
    localStorage.setItem("User", user.id);

    return this.dataService.getMedicine()
      .then(data => {
        this.medicines.items = data;
      })
  }

}
