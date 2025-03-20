using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Interfaces;

namespace OrderManagement.Domain.Events
{
    public class OrderProcessedEvent(Order order)  : IDomainEvent
    {
        public Order Order { get; } = order;

    }
}
