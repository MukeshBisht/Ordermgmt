import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from 'src/services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderListComponent } from 'src/pages/order-list.component';
import { OrderModalComponent } from 'src/components/order-modal/order-modal.component';
import { OrderTableComponent } from 'src/components/order-table/order-table.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderModalComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
