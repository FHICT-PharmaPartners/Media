import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PatientMedicineService} from '../services/patient-medicine-service';

@Component({
  selector: 'app-medadd',
  templateUrl: './medadd.component.html',
  styleUrls: ['./medadd.component.scss'],
})
export class MedaddComponent implements OnInit {
  @Input() data: any;
  endDate: any;
  startDate: any;
  dosage: any;
  constructor(private modalCtrl: ModalController, private dataService: PatientMedicineService) { }
  async close() {
    await this.modalCtrl.dismiss();
  }
  submit() {
    this.dataService.saveMedicine(this.dosage, this.startDate, this.endDate);
    location.href = '/home';
  }
  ngOnInit() {}

}
