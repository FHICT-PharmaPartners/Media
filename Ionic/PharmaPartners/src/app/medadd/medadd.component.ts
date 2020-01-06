import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-medadd',
  templateUrl: './medadd.component.html',
  styleUrls: ['./medadd.component.scss'],
})
export class MedaddComponent implements OnInit {
  // @Input() data: any;
  constructor(private modalCtrl: ModalController) { }
  async close(){
  await this.modalCtrl.dismiss();
}
  ngOnInit() {}

}
