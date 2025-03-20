using Microsoft.Extensions.Logging;
using Moq;
using OrderManagement.Application.DTOs;
using OrderManagement.Application.Services;
using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Interfaces;

namespace OrderManagement.Tests.InfrastructureTests
{
    public class OrderServiceTests
    {
        private readonly Mock<IOrderRepository> _mockOrderRepository;
        private readonly Mock<ILogger<OrderService>> _mockLogger;
        private readonly OrderService _orderService;

        public OrderServiceTests()
        {
            _mockOrderRepository = new Mock<IOrderRepository>();
            _mockLogger = new Mock<ILogger<OrderService>>();
            _orderService = new OrderService(_mockOrderRepository.Object, _mockLogger.Object);
        }

        [Fact]
        public async Task GetAllOrdersAsync_ReturnsAllOrders()
        {
            // Arrange
            var orders = new List<Order>
            {
                new Order { Id = Guid.NewGuid(), OrderNumber = "ORD-001" },
                new Order { Id = Guid.NewGuid(), OrderNumber = "ORD-002" }
            };

            _mockOrderRepository.Setup(repo => repo.GetAllOrdersAsync())
                .ReturnsAsync(orders);

            // Act
            var result = await _orderService.GetAllOrdersAsync();

            // Assert
            Assert.Equal(2, result.Count());
            Assert.Equal(orders[0].OrderNumber, result.First().OrderNumber);
            Assert.Equal(orders[1].OrderNumber, result.Last().OrderNumber);
        }

        [Fact]
        public async Task GetOrderByIdAsync_WithValidId_ReturnsOrder()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var order = new Order { Id = orderId, OrderNumber = "ORD-001" };

            _mockOrderRepository.Setup(repo => repo.GetOrderByIdAsync(orderId))
                .ReturnsAsync(order);

            // Act
            var result = await _orderService.GetOrderByIdAsync(orderId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(orderId, result.Id);
            Assert.Equal(order.OrderNumber, result.OrderNumber);
        }

        [Fact]
        public async Task GetOrderByIdAsync_WithInvalidId_ReturnsNull()
        {
            // Arrange
            var orderId = Guid.NewGuid();

            _mockOrderRepository.Setup(repo => repo.GetOrderByIdAsync(orderId))
                .ReturnsAsync((Order?)null);

            // Act
            var result = await _orderService.GetOrderByIdAsync(orderId);

            // Assert
            Assert.Null(result);
        }

        [Fact]
        public async Task CreateOrderAsync_CreatesAndReturnsOrder()
        {
            // Arrange
            var createOrderDto = new CreateOrderDto
            {
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com",
                OrderDate = DateTime.UtcNow,
                Status = "pending",
                ShippingAddress = "123 Main St",
                Notes = "Test order",
                Items = new List<OrderItemDto>
                {
                    new OrderItemDto
                    {
                        ProductName = "Product A",
                        Quantity = 2,
                        UnitPrice = 10.00m
                    }
                }
            };

            _mockOrderRepository.Setup(repo => repo.CreateOrderAsync(It.IsAny<Order>()))
                .ReturnsAsync((Order order) => order);

            // Act
            var result = await _orderService.CreateOrderAsync(createOrderDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(createOrderDto.OrderNumber, result.OrderNumber);
            Assert.Equal(createOrderDto.CustomerName, result.CustomerName);
            Assert.Equal(createOrderDto.CustomerEmail, result.CustomerEmail);
            Assert.Equal(createOrderDto.Status, result.Status);
            Assert.Equal(1, result.Items.Count);
            Assert.Equal(createOrderDto.Items[0].ProductName, result.Items[0].ProductName);
            Assert.Equal(20.00m, result.Total); // 2 * 10.00
        }

        [Fact]
        public async Task UpdateOrderAsync_WithValidId_UpdatesAndReturnsOrder()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var existingOrder = new Order
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com",
                OrderDate = DateTime.UtcNow,
                Status = Domain.Enums.OrderStatus.Submitted,
                ShippingAddress = "123 Main St",
                Notes = "Test order",
                Items = new List<OrderItem>
                {
                    new OrderItem
                    {
                        Id = Guid.NewGuid(),
                        ProductName = "Product A",
                        Quantity = 2,
                        UnitPrice = 10.00m
                    }
                }
            };

            var updateOrderDto = new UpdateOrderDto
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe Updated",
                CustomerEmail = "john@example.com",
                OrderDate = DateTime.UtcNow,
                Status = "pending",
                ShippingAddress = "123 Main St",
                Notes = "Test order updated",
                Items = new List<OrderItemDto>
                {
                    new OrderItemDto
                    {
                        Id = Guid.NewGuid(),
                        ProductName = "Product B",
                        Quantity = 1,
                        UnitPrice = 15.00m
                    }
                }
            };

            _mockOrderRepository.Setup(repo => repo.GetOrderByIdAsync(orderId))
                .ReturnsAsync(existingOrder);

            _mockOrderRepository.Setup(repo => repo.UpdateOrderAsync(It.IsAny<Order>()))
                .ReturnsAsync((Order order) => order);

            // Act
            var result = await _orderService.UpdateOrderAsync(updateOrderDto);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(updateOrderDto.CustomerName, result.CustomerName);
            Assert.Equal(updateOrderDto.Status, result.Status);
            Assert.Equal(updateOrderDto.Notes, result.Notes);
            Assert.Equal(1, result.Items.Count);
            Assert.Equal(updateOrderDto.Items[0].ProductName, result.Items[0].ProductName);
            Assert.Equal(15.00m, result.Total); // 1 * 15.00
        }

        [Fact]
        public async Task UpdateOrderAsync_WithInvalidId_ReturnsNull()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var updateOrderDto = new UpdateOrderDto
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com",
                OrderDate = DateTime.UtcNow,
                Status = "Processing",
                ShippingAddress = "123 Main St",
                Notes = "Test order",
                Items = new List<OrderItemDto>()
            };

            _mockOrderRepository.Setup(repo => repo.GetOrderByIdAsync(orderId))
                .ReturnsAsync((Order?)null);

            // Act
            var result = await _orderService.UpdateOrderAsync(updateOrderDto);

            // Assert
            Assert.Null(result);
        }
    }
}
