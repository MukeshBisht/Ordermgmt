using OrderManagement.Domain.Entities;

namespace OrderManagement.Domain.Events
{
    public class OrderCancelledEvent
    {
        public readonly Order order;

        public OrderCancelledEvent(Order order)
        {
            this.order = order;
        }
    }
}