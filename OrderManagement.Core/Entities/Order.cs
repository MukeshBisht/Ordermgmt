using OrderManagement.Domain.Enums;
using OrderManagement.Domain.Events;
using System.Text.Json.Serialization;

namespace OrderManagement.Domain.Entities
{
    public class Order : Entity
    { 
        public string OrderNumber { get; set; }
        public string CustomerName { get; set; }
        public string? CustomerEmail { get; set; }
        public DateTime OrderDate { get; set; }
        public OrderStatus Status { get; set; }
        public decimal Total { get; set; }
        public string ShippingAddress { get; set; }
        public string? Notes { get; set; }

        public List<OrderItem> Items { get; set; } = new List<OrderItem>();
        public string? ReceiptUrl { get; set; }

        public void SetOrderStatus(OrderStatus status)
        {
            if (status == OrderStatus.Processed)
            {
                this.AddDomainEvent(new OrderProcessedEvent(this));
            }
            this.Status = status;
        }

        public void CalculateTotal()
        {
            this.Total = Items?.Sum(x => x.Total) ?? 0;
        }

    }
}
