import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Order } from "src/types/Order";
import { CreateOrderDto, UpdateOrderDto } from "src/types/dto";
import { Observable } from "rxjs";

@Injectable()
export class OrderService {
    private readonly apiUrl = 'https://localhost:7149/api/orders';  // Base URL for the orders API

    constructor(private httpClient: HttpClient) {
    }

    getOrders(): Observable<Order[]> {
        
        return this.httpClient.get<Order[]>(this.apiUrl);
    }

    // Get an order by ID
    getOrderById(id: string): Observable<Order> {
        return this.httpClient.get<Order>(`${this.apiUrl}/${id}`);
    }

    // Create a new order
    createOrder(orderDto: CreateOrderDto): Observable<Order> {
        return this.httpClient.post<Order>(this.apiUrl, orderDto);
    }

    // Update an existing order
    updateOrder(id: string, orderDto: UpdateOrderDto): Observable<Order> {
        return this.httpClient.put<Order>(`${this.apiUrl}/${id}`, orderDto);
    }

    // Delete an order
    deleteOrder(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
    }
}