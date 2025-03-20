using Microsoft.Extensions.Logging;
using OrderManagement.Application.DTOs;
using OrderManagement.Application.Interfaces;
using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Enums;
using OrderManagement.Domain.Interfaces;

namespace OrderManagement.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrderService> _logger;

        public OrderService(IOrderRepository orderRepository, ILogger<OrderService> logger)
        {
            _orderRepository = orderRepository;
            _logger = logger;
        }

        public async Task<IEnumerable<OrderDto>> GetAllOrdersAsync()
        {
            var orders = await _orderRepository.GetAllOrdersAsync();
            return orders.Select(MapToOrderDto);
        }

        public async Task<OrderDto?> GetOrderByIdAsync(Guid id)
        {
            var order = await _orderRepository.GetOrderByIdAsync(id);
            return order != null ? MapToOrderDto(order) : null;
        }

        public async Task<OrderDto> CreateOrderAsync(CreateOrderDto orderDto)
        {
            var order = new Order
            {
                Id = Guid.NewGuid(),
                OrderNumber = orderDto.OrderNumber,
                CustomerName = orderDto.CustomerName,
                CustomerEmail = orderDto.CustomerEmail,
                OrderDate = orderDto.OrderDate,
                ShippingAddress = orderDto.ShippingAddress,
                Notes = orderDto.Notes,
                Items = orderDto.Items.Select(i => new OrderItem
                {
                    Id = Guid.NewGuid(),
                    ProductName = i.ProductName,
                    Quantity = i.Quantity,
                    UnitPrice = i.UnitPrice
                }).ToList()
            };

            order.SetOrderStatus(MapToOrderStatus(orderDto.Status));

            // Calculate totals
            foreach (var item in order.Items)
            {
                item.CalculateTotal();
            }
            order.CalculateTotal();
            var createdOrder = await _orderRepository.CreateOrderAsync(order);
            return MapToOrderDto(createdOrder);
        }

        public async Task<OrderDto?> UpdateOrderAsync(UpdateOrderDto orderDto)
        {
            var existingOrder = await _orderRepository.GetOrderByIdAsync(orderDto.Id);
            if (existingOrder == null)
                return null;

            // Update order properties
            existingOrder.OrderNumber = orderDto.OrderNumber;
            existingOrder.CustomerName = orderDto.CustomerName;
            existingOrder.CustomerEmail = orderDto.CustomerEmail;
            existingOrder.OrderDate = orderDto.OrderDate;
            existingOrder.ShippingAddress = orderDto.ShippingAddress;
            existingOrder.Notes = orderDto.Notes;
            existingOrder.ReceiptUrl = orderDto.ReceiptUrl ?? existingOrder.ReceiptUrl;
            existingOrder.SetOrderStatus(MapToOrderStatus(orderDto.Status));

            // Clear existing items and add updated ones
            existingOrder.Items.Clear();
            foreach (var itemDto in orderDto.Items)
            {
                var item = new OrderItem
                {
                    Id = itemDto.Id != Guid.Empty ? itemDto.Id : Guid.NewGuid(),
                    OrderId = existingOrder.Id,
                    ProductName = itemDto.ProductName,
                    Quantity = itemDto.Quantity,
                    UnitPrice = itemDto.UnitPrice
                };
                item.CalculateTotal();
                existingOrder.Items.Add(item);
            }

            existingOrder.CalculateTotal();

            var updatedOrder = await _orderRepository.UpdateOrderAsync(existingOrder);
            return updatedOrder != null ? MapToOrderDto(updatedOrder) : null;
        }

        public async Task<bool> DeleteOrderAsync(Guid id)
        {
            await _orderRepository.DeleteOrderAsync(id);
            return true;
        }

        private OrderDto MapToOrderDto(Order order)
        {
            return new OrderDto
            {
                Id = order.Id,
                OrderNumber = order.OrderNumber,
                CustomerName = order.CustomerName,
                CustomerEmail = order.CustomerEmail,
                OrderDate = order.OrderDate,
                Status = MapStatus(order.Status),
                Total = order.Total,
                ShippingAddress = order.ShippingAddress,
                Notes = order.Notes,
                ReceiptUrl = order.ReceiptUrl,
                Items = order.Items.Select(i => new OrderItemDto
                {
                    Id = i.Id,
                    ProductName = i.ProductName,
                    Quantity = i.Quantity,
                    UnitPrice = i.UnitPrice,
                    Total = i.Total
                }).ToList()
            };
        }

        private OrderStatus MapToOrderStatus(string status) => status.ToLower() switch
        {
            "pending" => OrderStatus.Submitted,
            "paid" => OrderStatus.Paid,
            "cancelled" => OrderStatus.Cancelled,
            "processed" => OrderStatus.Processed,
            _ => OrderStatus.Submitted,
        };

        private string MapStatus(OrderStatus status) => status switch
        {
            OrderStatus.Submitted => "pending",
            OrderStatus.Paid => "paid",
            OrderStatus.Cancelled => "cancelled",
            OrderStatus.Processed => "processed",
            _ => ""
        };

    }
}
