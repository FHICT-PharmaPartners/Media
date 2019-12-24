import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-zoek",
  templateUrl: "zoek.page.html",
  styleUrls: ["zoek.page.scss"]
})
export class ZoekPage implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
}
