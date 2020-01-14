import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PatientMedicineService} from '../services/patient-medicine-service';
import {Diagnose} from '../models/models-list';

@Component({
  selector: 'app-show-conflict',
  templateUrl: './show-conflict.component.html',
  styleUrls: ['./show-conflict.component.scss'],
})
export class ShowConflictComponent implements OnInit {
  diagnose: Diagnose = new Diagnose();
  constructor(private modalCtrl: ModalController, private dataService: PatientMedicineService) { }
  async close() {
    await this.modalCtrl.dismiss();

  }

  ngOnInit() {
    return this.dataService.getDiagnose()
        .then(data => {
          this.diagnose = data;
        });
  }
}
