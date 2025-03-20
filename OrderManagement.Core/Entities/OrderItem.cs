using System.Text.Json.Serialization;

namespace OrderManagement.Domain.Entities
{
    public class OrderItem
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal Total { get; set; }
        
        [JsonIgnore]
        public Order? Order { get; set; }

        public void CalculateTotal()
        {
            Total = Quantity * UnitPrice;
        }
    }
}
