import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { Order } from "src/types/Order";
import { OrderItem } from "src/types/orderItem";

@Component({
 selector: 'order-modal',
 templateUrl: './order-modal.template.html'
}) 
export class OrderModalComponent {

    @Input() IsOpen: boolean = false;
    @Input() Order: Order | null = null;
    @Output() OnClose: EventEmitter<any> = new EventEmitter();
    @Output() OnSave: EventEmitter<any> = new EventEmitter();

    orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      id: [''],
      orderNumber: [''],
      customerName: [''],
      customerEmail: [''],
      orderDate: [''],
      status: ['Pending'],
      total: [0],
      items: this.fb.array([]),
      shippingAddress: [''],
      notes: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.Order) {
      this.populateForm(this.Order);
    } else {
      this.resetForm();
    }
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  addItem(): void {
    this.items.push(this.fb.group({
      id: [''],
      productName: [''],
      quantity: [1],
      unitPrice: [0],
      total: [0]
    }));
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
    this.updateTotal();
  }

  updateTotal(): void {
    const total = this.items.value.reduce((sum: number, item: OrderItem) => sum + item.quantity * item.unitPrice, 0);
    this.orderForm.patchValue({ total });
  }

  populateForm(order: Order): void {
    this.orderForm.patchValue(order);
    this.items.clear();
    order.items.forEach(item => this.items.push(this.fb.group(item)));
  }

  resetForm(): void {
    this.orderForm.reset({
      id: '',
      orderNumber: '',
      customerName: '',
      customerEmail: '',
      orderDate: new Date().toISOString().split('T')[0],
      status: 'Pending',
      total: 0,
      items: [],
      shippingAddress: '',
      notes: ''
    });
    this.items.clear();
  }

  submit(): void {
    if (this.orderForm.valid) {
      this.OnSave.emit(this.orderForm.value);
    }
  }

}