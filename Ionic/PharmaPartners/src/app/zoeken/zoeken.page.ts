import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ModalController } from '@ionic/angular';
import { MedaddComponent } from '../medadd/medadd.component';

@Component({
  selector: "app-zoeken",
  templateUrl: "zoeken.page.html",
  styleUrls: ["zoeken.page.scss"]
})
export class ZoekenPage implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

async showModal(){
  const modal = await this.modalCtrl.create({
    component: MedaddComponent,
    // componentProps: {
    //   data: nee
    // }
  })
  await modal.present();
}


}
