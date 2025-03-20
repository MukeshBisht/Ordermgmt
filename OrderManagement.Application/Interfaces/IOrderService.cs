using OrderManagement.Application.DTOs;

namespace OrderManagement.Application.Interfaces
{
    public interface IOrderService
    {
        Task<IEnumerable<OrderDto>> GetAllOrdersAsync();
        Task<OrderDto?> GetOrderByIdAsync(Guid id);
        Task<OrderDto> CreateOrderAsync(CreateOrderDto orderDto);
        Task<OrderDto?> UpdateOrderAsync(UpdateOrderDto orderDto);
        Task<bool> DeleteOrderAsync(Guid id);
    }
}
