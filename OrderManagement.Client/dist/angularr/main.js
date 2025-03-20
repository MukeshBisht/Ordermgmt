"use strict";
(self["webpackChunkangularr"] = self["webpackChunkangularr"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_pages_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pages/order-list.component */ 795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: src_pages_order_list_component__WEBPACK_IMPORTED_MODULE_0__.OrderListComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "min-vh-100", "p-4"], [1, "container-xl"], [1, "h3", "fw-bold", "mb-4"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order Management System");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var src_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/order.service */ 350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_pages_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/order-list.component */ 795);
/* harmony import */ var src_components_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/order-modal/order-modal.component */ 9381);
/* harmony import */ var src_components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/order-table/order-table.component */ 5301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);











class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [src_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, src_pages_order_list_component__WEBPACK_IMPORTED_MODULE_3__.OrderListComponent, src_components_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_4__.OrderModalComponent, src_components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_5__.OrderTableComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule]
  });
})();

/***/ }),

/***/ 9381:
/*!*************************************************************!*\
  !*** ./src/components/order-modal/order-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderModalComponent: () => (/* binding */ OrderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function OrderModalComponent_div_0_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 29)(2, "input", 30)(3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderModalComponent_div_0_div_46_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.removeItem(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, (tmp_1_0 = item_r2.get("total")) == null ? null : tmp_1_0.value), "");
  }
}
function OrderModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderModalComponent_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.OnClose.emit(ctx_r6.Order));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrderModalComponent_div_0_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9)(18, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Customer Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9)(26, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 15)(29, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Delivered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9)(36, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9)(40, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrderModalComponent_div_0_div_46_Template, 9, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderModalComponent_div_0_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.addItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Add Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25)(53, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Save Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderModalComponent_div_0_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.OnClose.emit(ctx_r10.Order));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.orderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 4, (tmp_2_0 = ctx_r0.orderForm.get("total")) == null ? null : tmp_2_0.value), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.orderForm.invalid);
  }
}
class OrderModalComponent {
  constructor(fb) {
    this.fb = fb;
    this.IsOpen = false;
    this.Order = null;
    this.OnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.OnSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
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
  ngOnChanges(changes) {
    if (changes['order'] && this.Order) {
      this.populateForm(this.Order);
    } else {
      this.resetForm();
    }
  }
  get items() {
    return this.orderForm.get('items');
  }
  addItem() {
    this.items.push(this.fb.group({
      id: [''],
      productName: [''],
      quantity: [1],
      unitPrice: [0],
      total: [0]
    }));
  }
  removeItem(index) {
    this.items.removeAt(index);
    this.updateTotal();
  }
  updateTotal() {
    const total = this.items.value.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    this.orderForm.patchValue({
      total
    });
  }
  populateForm(order) {
    this.orderForm.patchValue(order);
    console.log('here');
    console.log(order, this.orderForm);
    this.items.clear();
    order.items.forEach(item => this.items.push(this.fb.group(item)));
  }
  resetForm() {
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
  submit() {
    if (this.orderForm.valid) {
      this.OnSave.emit(this.orderForm.value);
    }
  }
  static {
    this.ɵfac = function OrderModalComponent_Factory(t) {
      return new (t || OrderModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderModalComponent,
      selectors: [["order-modal"]],
      inputs: {
        IsOpen: "IsOpen",
        Order: "Order"
      },
      outputs: {
        OnClose: "OnClose",
        OnSave: "OnSave"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "modal fade show d-block", "tabindex", "-1", 4, "ngIf"], ["tabindex", "-1", 1, "modal", "fade", "show", "d-block"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["formControlName", "orderNumber", 1, "form-control"], ["formControlName", "customerName", "required", "", 1, "form-control"], ["formControlName", "customerEmail", "type", "email", "required", "", 1, "form-control"], ["formControlName", "orderDate", "type", "date", "required", "", 1, "form-control"], ["formControlName", "status", 1, "form-select"], ["value", "Pending"], ["value", "Shipped"], ["value", "Delivered"], ["formControlName", "shippingAddress", "required", "", 1, "form-control"], ["formControlName", "notes", 1, "form-control"], ["formArrayName", "items"], ["class", "mb-3 p-3 border rounded", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "mt-3"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "mb-3", "p-3", "border", "rounded", 3, "formGroupName"], ["formControlName", "productName", "placeholder", "Product Name", "required", "", 1, "form-control", "mb-2"], ["formControlName", "quantity", "type", "number", "min", "1", "required", "", 1, "form-control", "mb-2"], ["formControlName", "unitPrice", "type", "number", "min", "0.01", "step", "0.01", "required", "", 1, "form-control", "mb-2"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "ms-2", 3, "click"]],
      template: function OrderModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderModalComponent_div_0_Template, 57, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5301:
/*!*************************************************************!*\
  !*** ./src/components/order-table/order-table.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderTableComponent: () => (/* binding */ OrderTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function OrderTableComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5)(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td")(10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 3)(16, "div", 9)(17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderTableComponent_tr_19_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const order_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.OnEdit.emit(order_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderTableComponent_tr_19_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const order_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.OnDelete.emit(order_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.orderNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.orderDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", order_r1.items.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.total);
  }
}
class OrderTableComponent {
  constructor() {
    this.Orders = [];
    this.IsLoading = false;
    this.OnEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.OnDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  static {
    this.ɵfac = function OrderTableComponent_Factory(t) {
      return new (t || OrderTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderTableComponent,
      selectors: [["order-table"]],
      inputs: {
        Orders: "Orders",
        IsLoading: "IsLoading"
      },
      outputs: {
        OnEdit: "OnEdit",
        OnDelete: "OnDelete"
      },
      decls: 20,
      vars: 1,
      consts: [[1, "border", "rounded", "p-3"], [1, "table", "table-striped", "table-hover"], [1, "table-dark"], [1, "text-end"], ["key", "order.id", 4, "ngFor", "ngForOf"], ["key", "order.id"], [1, "fw-medium"], [1, "d-flex", "align-items-center"], [1, "bi", "bi-cart"], [1, "d-flex", "justify-content-end", "gap-2"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "bi", "bi-pencil"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"]],
      template: function OrderTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead", 2)(3, "tr")(4, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Items");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderTableComponent_tr_19_Template, 23, 6, "tr", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Orders);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 795:
/*!*******************************************!*\
  !*** ./src/pages/order-list.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderListComponent: () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/order.service */ 350);
/* harmony import */ var src_components_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/order-modal/order-modal.component */ 9381);
/* harmony import */ var src_components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/order-table/order-table.component */ 5301);




class OrderListComponent {
  constructor(orderService) {
    this.orderService = orderService;
    this.Orders = [];
    this.CurrentOrder = null;
    this.IsLoading = false;
    this.IsModalOpen = false;
  }
  ngOnInit() {
    this.IsLoading = true;
    this.orderService.getOrders().then(orders => {
      this.Orders = orders;
    });
  }
  handleAddOrder() {
    this.CurrentOrder = null;
    this.IsModalOpen = true;
  }
  handleEditOrder(order) {
    this.CurrentOrder = order;
    this.IsModalOpen = true;
  }
  handleDeleteOrder(id) {
    try {
      this.orderService.deleteOrder(id);
      this.Orders = this.Orders.filter(order => order.id !== id);
      //   toast({
      //     title: "Success",
      //     description: "Order deleted successfully",
      //   })
    } catch (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to delete order",
      //     variant: "destructive",
      //   })
    }
  }
  handleSaveOrder(order) {
    try {
      if (order.id) {
        // Update existing order
        this.orderService.updateOrder(order).then(updatedOrder => {
          this.Orders = this.Orders.map(o => o.id === updatedOrder.id ? updatedOrder : o);
        });
        // toast({
        //   title: "Success",
        //   description: "Order updated successfully",
        // })
      } else {
        // Create new order
        this.orderService.createOrder(order).then(order => {
          this.Orders.push(order);
        });
        // toast({
        //   title: "Success",
        //   description: "Order created successfully",
        // })
      }

      this.IsModalOpen = false;
    } catch (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to save order",
      //     variant: "destructive",
      //   })
    }
  }
  static {
    this.ɵfac = function OrderListComponent_Factory(t) {
      return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: OrderListComponent,
      selectors: [["order-list"]],
      decls: 8,
      vars: 4,
      consts: [[1, "d-flex", "flex-column", "gap-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "h4", "fw-semibold"], [1, "btn", "btn-primary", 3, "click"], [3, "Orders", "IsLoading", "OnEdit", "OnDelete"], [3, "IsOpen", "Order", "OnClose", "OnSave"]],
      template: function OrderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_4_listener() {
            return ctx.handleAddOrder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Add Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "order-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("OnEdit", function OrderListComponent_Template_order_table_OnEdit_6_listener($event) {
            return ctx.handleEditOrder($event);
          })("OnDelete", function OrderListComponent_Template_order_table_OnDelete_6_listener($event) {
            return ctx.handleDeleteOrder($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "order-modal", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("OnClose", function OrderListComponent_Template_order_modal_OnClose_7_listener() {
            return ctx.IsModalOpen = false;
          })("OnSave", function OrderListComponent_Template_order_modal_OnSave_7_listener($event) {
            return ctx.handleSaveOrder($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("Orders", ctx.Orders)("IsLoading", ctx.IsLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("IsOpen", ctx.IsModalOpen)("Order", ctx.CurrentOrder);
        }
      },
      dependencies: [src_components_order_modal_order_modal_component__WEBPACK_IMPORTED_MODULE_1__.OrderModalComponent, src_components_order_table_order_table_component__WEBPACK_IMPORTED_MODULE_2__.OrderTableComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 350:
/*!***************************************!*\
  !*** ./src/services/order.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class OrderService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    // Mock data for development
    this.mockOrders = [{
      id: "1",
      orderNumber: "ORD-0001",
      customerName: "John Doe",
      customerEmail: "john.doe@example.com",
      orderDate: "2023-05-15T10:30:00Z",
      status: "Delivered",
      total: 125.99,
      items: [{
        id: "item1",
        productName: "Product A",
        quantity: 2,
        unitPrice: 49.99,
        total: 99.98
      }, {
        id: "item2",
        productName: "Product B",
        quantity: 1,
        unitPrice: 26.01,
        total: 26.01
      }],
      shippingAddress: "123 Main St, Anytown, USA",
      notes: "Please leave at the front door"
    }, {
      id: "2",
      orderNumber: "ORD-0002",
      customerName: "Jane Smith",
      customerEmail: "jane.smith@example.com",
      orderDate: "2023-05-16T14:45:00Z",
      status: "Processing",
      total: 79.95,
      items: [{
        id: "item3",
        productName: "Product C",
        quantity: 1,
        unitPrice: 79.95,
        total: 79.95
      }],
      shippingAddress: "456 Oak Ave, Somewhere, USA",
      notes: ""
    }, {
      id: "3",
      orderNumber: "ORD-0003",
      customerName: "Bob Johnson",
      customerEmail: "bob.johnson@example.com",
      orderDate: "2023-05-17T09:15:00Z",
      status: "Pending",
      total: 249.97,
      items: [{
        id: "item4",
        productName: "Product D",
        quantity: 3,
        unitPrice: 59.99,
        total: 179.97
      }, {
        id: "item5",
        productName: "Product E",
        quantity: 1,
        unitPrice: 70.0,
        total: 70.0
      }],
      shippingAddress: "789 Pine St, Elsewhere, USA",
      notes: "Call before delivery"
    }];
  }
  getOrders() {
    return Promise.resolve([...this.mockOrders]);
  }
  getOrderById(id) {
    const order = this.mockOrders.find(o => o.id === id);
    if (!order) {
      throw new Error("Order not found");
    }
    return Promise.resolve({
      ...order
    });
  }
  createOrder(order) {
    const newOrder = {
      ...order,
      id: Math.random().toString(36).substring(2, 9)
    };
    this.mockOrders.push(newOrder);
    return Promise.resolve({
      ...newOrder
    });
  }
  updateOrder(order) {
    const index = this.mockOrders.findIndex(o => o.id === order.id);
    if (index === -1) {
      throw new Error("Order not found");
    }
    this.mockOrders[index] = {
      ...order
    };
    return Promise.resolve({
      ...order
    });
  }
  deleteOrder(id) {
    const index = this.mockOrders.findIndex(o => o.id === id);
    if (index === -1) {
      throw new Error("Order not found");
    }
    this.mockOrders.splice(index, 1);
    return Promise.resolve();
  }
  uploadReceipt(orderId, file) {
    // In a real application, this would upload the file to Azure Blob Storage
    // For now, we'll just simulate the upload
    console.log(`Receipt uploaded for order ${orderId}: ${file.name}`);
    // In a real app, this would trigger an Azure Function via a queue message
    console.log(`Sending message to queue for processing order ${orderId}`);
    return Promise.resolve();
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map