import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/services/order.service";
import { Order } from "src/types/Order";
import { CreateOrderDto, OrderItemDto, UpdateOrderDto } from "src/types/dto";
import { OrderItem } from "src/types/orderItem";


@Component({
    selector: 'order-list',
    templateUrl: './order-list.template.html'
})
export class OrderListComponent implements OnInit {

    constructor(private orderService: OrderService) { }

    Orders: Order[] = [];
    CurrentOrder: Order | null = null;
    IsLoading: boolean = false;
    IsModalOpen: boolean = false;

    ngOnInit(): void {
        this.IsLoading = true;
        this.orderService.getOrders().subscribe(orders => {
            this.Orders = orders;
        });
    }

    handleAddOrder() {
        this.CurrentOrder = null;
        this.IsModalOpen = true;
    }

    handleEditOrder(order: Order) {
        this.CurrentOrder = order;
        this.IsModalOpen = true;
    }

    handleDeleteOrder(id: string) {
        try {
            this.orderService.deleteOrder(id);
            this.Orders = this.Orders.filter((order) => order.id !== id);
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

    handleSaveOrder(order: Order) {
        try {
            if (order.id) {
                // Update existing order
                this.orderService.updateOrder(order.id, this.mapOrderToUpdateOrderDto(order)).subscribe(updatedOrder => {
                    this.Orders = this.Orders.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
                });

                // toast({
                //   title: "Success",
                //   description: "Order updated successfully",
                // })
            } else {
                // Create new order
                this.orderService.createOrder(this.mapOrderToCreateOrderDto(order)).subscribe(order => {
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

    // Map OrderItem to OrderItemDto
    mapOrderItemToOrderItemDto(orderItem: OrderItem): OrderItemDto {
        return {
            id: orderItem.id,
            productName: orderItem.productName,
            quantity: orderItem.quantity,
            unitPrice: orderItem.unitPrice,
            total: orderItem.total,
        };
    }

    // Map Order to CreateOrderDto
    mapOrderToCreateOrderDto(order: Order): CreateOrderDto {
        return {
            orderNumber: order.orderNumber,
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            orderDate: order.orderDate,
            status: order.status,
            shippingAddress: order.shippingAddress,
            notes: order.notes,
            items: order.items.map(this.mapOrderItemToOrderItemDto), // Map items
        };
    }

    mapOrderToUpdateOrderDto(order: Order): UpdateOrderDto {
        return {
            id: order.id,
            orderNumber: order.orderNumber,
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            orderDate: order.orderDate,
            status: order.status,
            shippingAddress: order.shippingAddress,
            notes: order.notes,
            items: order.items.map(this.mapOrderItemToOrderItemDto), // Map items
        };
    }
}