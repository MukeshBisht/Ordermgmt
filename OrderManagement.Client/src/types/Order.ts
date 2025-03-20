import { OrderItem } from "./orderItem"

export interface Order {
    id: string
    orderNumber: string
    customerName: string
    customerEmail: string
    orderDate: string
    status: string
    total: number
    items: OrderItem[]
    shippingAddress: string
    notes: string
}
