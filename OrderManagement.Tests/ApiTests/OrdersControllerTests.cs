using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using OrderManagement.API;
using OrderManagement.Application.DTOs;
using OrderManagement.Application.Interfaces;
using OrderManagement.Domain.Interfaces;
using Xunit;

namespace OrderManagement.Tests.ApiTests
{
    public class OrdersControllerTests
    {
        private readonly Mock<IOrderService> _mockOrderService;
        private readonly Mock<IBlobStorageService> _mockBlobStorageService;
        private readonly Mock<IQueueService> _mockQueueService;

        public OrdersControllerTests()
        {
            _mockOrderService = new Mock<IOrderService>();
            _mockBlobStorageService = new Mock<IBlobStorageService>();
            _mockQueueService = new Mock<IQueueService>();
        }

        [Fact]
        public async Task GetOrders_ReturnsOkWithOrders()
        {
            // Arrange
            var orders = new List<OrderDto>
            {
                new OrderDto { Id = Guid.NewGuid(), OrderNumber = "ORD-001" },
                new OrderDto { Id = Guid.NewGuid(), OrderNumber = "ORD-002" }
            };

            _mockOrderService.Setup(service => service.GetAllOrdersAsync())
                .ReturnsAsync(orders);

            // Act
            var result = await OrderApiExtensions.GetAllOrdersAsync(_mockOrderService.Object);

            // Assert

            Assert.IsType<Ok<IEnumerable<OrderDto>>>(result);
            Assert.NotNull(result.Value);
            Assert.Equal(2, result.Value.Count());
        }

        [Fact]
        public async Task GetOrder_WithValidId_ReturnsOkWithOrder()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var order = new OrderDto { Id = orderId, OrderNumber = "ORD-001" };

            _mockOrderService.Setup(service => service.GetOrderByIdAsync(orderId))
                .ReturnsAsync(order);

            // Act
            var result = await OrderApiExtensions.GetOrderByIdAsync(orderId, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<Ok<OrderDto>, NotFound>> (result);
            var okResult = (Ok<OrderDto>)result.Result;
            Assert.NotNull(okResult.Value);
            Assert.Equal(orderId, okResult.Value.Id);
        }

        [Fact]
        public async Task GetOrder_WithInvalidId_ReturnsNotFound()
        {
            // Arrange
            var orderId = Guid.NewGuid();

            _mockOrderService.Setup(service => service.GetOrderByIdAsync(orderId))
                .ReturnsAsync((OrderDto?)null);

            // Act
            var result = await OrderApiExtensions.GetOrderByIdAsync(orderId, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<Ok<OrderDto>, NotFound>>(result);
            Assert.IsType<NotFound>(result.Result);
        }

        [Fact]
        public async Task CreateOrder_WithValidOrder_ReturnsCreatedAtAction()
        {
            // Arrange
            var createOrderDto = new CreateOrderDto
            {
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com"
            };

            var createdOrder = new OrderDto
            {
                Id = Guid.NewGuid(),
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com"
            };

            _mockOrderService.Setup(service => service.CreateOrderAsync(createOrderDto))
                .ReturnsAsync(createdOrder);

            // Act
            var result = await OrderApiExtensions.CreateOrderAsync(createOrderDto, _mockOrderService.Object);

            // Assert

            Assert.IsType<Created<OrderDto>>(result);
            Assert.NotNull(result);
            Assert.Equal(createdOrder.OrderNumber, result.Value.OrderNumber);
        }

        [Fact]
        public async Task UpdateOrder_WithValidIdAndOrder_ReturnsOkWithOrder()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var updateOrderDto = new UpdateOrderDto
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe Updated",
                CustomerEmail = "john@example.com"
            };

            var updatedOrder = new OrderDto
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe Updated",
                CustomerEmail = "john@example.com"
            };

            _mockOrderService.Setup(service => service.UpdateOrderAsync(updateOrderDto))
                .ReturnsAsync(updatedOrder);

            // Act
            var result = await OrderApiExtensions.UpdateOrderAsync(updateOrderDto, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<Ok<OrderDto>, NotFound>>(result);
            Assert.IsType<Ok<OrderDto>>(result.Result);

            var okResult = (Ok<OrderDto>)result.Result;
            Assert.Equal(updatedOrder.Id, okResult.Value.Id);
            Assert.Equal(updatedOrder.CustomerName, okResult.Value.CustomerName);

        }


        [Fact]
        public async Task UpdateOrder_WithNonExistentOrder_ReturnsNotFound()
        {
            // Arrange
            var orderId = Guid.NewGuid();
            var updateOrderDto = new UpdateOrderDto
            {
                Id = orderId,
                OrderNumber = "ORD-001",
                CustomerName = "John Doe",
                CustomerEmail = "john@example.com"
            };

            _mockOrderService.Setup(service => service.UpdateOrderAsync(updateOrderDto))
                .ReturnsAsync((OrderDto?)null);

            // Act
            var result = await OrderApiExtensions.UpdateOrderAsync(updateOrderDto, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<Ok<OrderDto>, NotFound>>(result);
            Assert.IsType<NotFound>(result.Result);
        }

        [Fact]
        public async Task DeleteOrder_WithValidId_ReturnsNoContent()
        {
            // Arrange
            var orderId = Guid.NewGuid();

            _mockOrderService.Setup(service => service.DeleteOrderAsync(orderId))
                .ReturnsAsync(true);

            // Act
            var result = await OrderApiExtensions.DeleteOrderAsync(orderId, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<NoContent, NotFound>>(result);
            Assert.IsType<NoContent>(result.Result);
        }

        [Fact]
        public async Task DeleteOrder_WithInvalidId_ReturnsNotFound()
        {
            // Arrange
            var orderId = Guid.NewGuid();

            _mockOrderService.Setup(service => service.DeleteOrderAsync(orderId))
                .ReturnsAsync(false);

            // Act
            var result = await OrderApiExtensions.DeleteOrderAsync(orderId, _mockOrderService.Object);

            // Assert
            Assert.IsType<Results<NoContent, NotFound>>(result);
            Assert.IsType<NotFound>(result.Result);
        }
    }
}
