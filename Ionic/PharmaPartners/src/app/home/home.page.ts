import { Component } from '@angular/core';

import { Medicines, Medicine } from '../models/models-list';
import { MedicineService } from '../Services/medicine-services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  medicines: Medicines = new Medicines;
  constructor(private dataService: MedicineService) { }


  ngOnInit() {
    return this.dataService.getMedicine()
      .then(data => {
        this.medicines.items = data;
        debugger;
      })
  }

}
