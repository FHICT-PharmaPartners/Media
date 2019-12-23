import { Component, OnInit } from '@angular/core';
import { Medicines, Medicine } from '../models/models-list';
import { MedicineService } from '../services/medicine-services';

@Component({
    selector: 'app-zoeken',
    templateUrl: './zoeken.page.html',
    styleUrls: ['./zoeken.page.scss'],
})
export class ZoekenPage implements OnInit {

    medicines: Medicines = new Medicines;
    constructor(private dataService: MedicineService) {
        this.medicines.items = new Array;
    }


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

        return this.dataService.getMedicine()
            .then(data => {
                this.medicines.items = data;
            }).catch(err => {
                window.console.log(err);
            })
    }


}
