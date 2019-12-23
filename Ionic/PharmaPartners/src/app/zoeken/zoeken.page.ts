import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoeken',
  templateUrl: './zoeken.page.html',
  styleUrls: ['./zoeken.page.scss'],
})
export class ZoekenPage implements OnInit {
  public items: any = []; //added

  constructor() {   //alles in constructor
    this.items = [
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false },
    { expanded: false }
  ];
}

expandItem(item): void {
  if (item.expanded) {
    item.expanded = false;
  } else {
    this.items.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}

	ngOnInit() {
	}
}
