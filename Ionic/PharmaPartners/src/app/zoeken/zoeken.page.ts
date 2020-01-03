import {Component,} from '@angular/core';

@Component({
    selector: 'app-zoeken',
    templateUrl: './zoeken.page.html',
    styleUrls: ['./zoeken.page.scss'],
})
export class ZoekenPage {

    list_original = ['Abasaglar', 'Danatrol', 'Faslodex', 'Paracetamol']; //items in de list
    list_to_show = this.list_original;
    selected_index = -1;
    show_list = true;

    constructor() {
    }

    onCancel(val) {
        this.show_list = false;

    }


    click_bar() {
        this.show_list = true;
    }

    click_item(val) {
        for (let i = 0; i < this.list_original.length; i++) {
            if (this.list_to_show[val].toUpperCase() === this.list_original[i].toUpperCase()) {
                this.selected_index = i;
                break;
            }
        }
        this.show_list = false;
    }

    change_query(query) {
        let k = 0;
        this.list_to_show = [];
        for (let i = 0; i < this.list_original.length; i++) {
            if (this.list_original[i].toUpperCase().includes(query.toUpperCase())) {
                this.list_to_show[k] = this.list_original[i];
                k += 1;
            }
        }
    }
}
