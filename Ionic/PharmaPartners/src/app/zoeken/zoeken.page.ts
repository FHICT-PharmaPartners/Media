import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-zoeken",
  templateUrl: "zoeken.page.html",
  styleUrls: ["zoeken.page.scss"]
})
export class ZoekenPage implements OnInit {
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
