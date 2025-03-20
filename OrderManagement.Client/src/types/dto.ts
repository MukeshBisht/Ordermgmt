// Define the OrderItemDto type (as referenced in both CreateOrderDto and UpdateOrderDto)
export interface OrderItemDto {
    id: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    total: number;
}

// Define CreateOrderDto interface
export interface CreateOrderDto {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    orderDate: string; // ISO 8601 formatted date string
    status: string; // e.g. "Pending", "Delivered"
    shippingAddress: string;
    notes: string;
    items: OrderItemDto[];
}

// Define UpdateOrderDto interface
export interface UpdateOrderDto {
    id: string; // GUID for the order
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    orderDate: string; // ISO 8601 formatted date string
    status: string;
    shippingAddress: string;
    notes: string;
    receiptUrl?: string; // Optional field for receipt URL
    items: OrderItemDto[];
}