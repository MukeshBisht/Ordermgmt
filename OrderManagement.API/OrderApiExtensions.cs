using Microsoft.AspNetCore.Http.HttpResults;
using OrderManagement.Application.DTOs;
using OrderManagement.Application.Interfaces;
using OrderManagement.Domain.Entities;

namespace OrderManagement.API
{
    public static class OrderApiExtensions
    {
        public static void MapOrderEndpoints(this WebApplication app)
        {
            var group = app.MapGroup("/api/orders");
            group.MapGet("/", GetAllOrdersAsync);
            group.MapGet("/{id}", GetOrderByIdAsync);
            group.MapPost("/", CreateOrderAsync);
            group.MapPut("/{id}", UpdateOrderAsync);
            group.MapDelete("/{id}", DeleteOrderAsync);
        }

        public static async Task<Ok<IEnumerable<OrderDto>>> GetAllOrdersAsync(IOrderService orderService)
        {
            var orders = await orderService.GetAllOrdersAsync();
            return TypedResults.Ok(orders);
        }

        public static async Task<Results<Ok<OrderDto>, NotFound>> GetOrderByIdAsync(Guid id, IOrderService orderService)
        {
            var order = await orderService.GetOrderByIdAsync(id);
            return order is not null ? TypedResults.Ok(order) : TypedResults.NotFound();
        }

        public static async Task<Created<OrderDto>> CreateOrderAsync(CreateOrderDto orderDto, IOrderService orderService)
        {
            var createdOrder = await orderService.CreateOrderAsync(orderDto);
            return TypedResults.Created($"/api/orders/{createdOrder.Id}", createdOrder);
        }

        public static async Task<Results<Ok<OrderDto>, NotFound>> UpdateOrderAsync(UpdateOrderDto orderDto, IOrderService orderService)
        {
            var updatedOrder = await orderService.UpdateOrderAsync(orderDto);
            return updatedOrder is not null ? TypedResults.Ok(updatedOrder) : TypedResults.NotFound();
        }
        public static async Task<Results<NoContent, NotFound>> DeleteOrderAsync(Guid id, IOrderService orderService)
        {
            var result = await orderService.DeleteOrderAsync(id);
            return result ? TypedResults.NoContent() : TypedResults.NotFound();
        }

    }
}
