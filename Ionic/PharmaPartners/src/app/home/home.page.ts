import { Component } from '@angular/core';

import { Medicines, Medicine } from '../models/models-list';
import { MedicineService } from '../Services/medicine-services';
import { UserService } from '../Services/user-services';

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

  ngOnInit() {
    let user = this.userService.getUser(localStorage.jwt);

    return this.dataService.getMedicine()
      .then(data => {
        this.medicines.items = data;
      })
  }

}
