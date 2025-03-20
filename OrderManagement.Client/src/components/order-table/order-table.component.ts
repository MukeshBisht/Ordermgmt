import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Order } from "src/types/Order";


@Component({
    selector: 'order-table',
    templateUrl: './order-table.template.html'
})
export class OrderTableComponent {

    constructor() { }

    @Input() Orders: Order[] = [];
    @Input() IsLoading: boolean = false;
    @Output() OnEdit: EventEmitter<any> = new EventEmitter();
    @Output() OnDelete: EventEmitter<any> = new EventEmitter();

}