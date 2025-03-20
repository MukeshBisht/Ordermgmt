using Microsoft.EntityFrameworkCore;
using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Interfaces;

namespace OrderManagement.Infrastructure.Persistence.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext _context;

        public OrderRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync()
        {
            return await _context.Orders
                .Include(o => o.Items)
                .ToListAsync();
        }

        public async Task<Order?> GetOrderByIdAsync(Guid id)
        {
            return await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<Order> CreateOrderAsync(Order order)
        {
            order.Id = Guid.NewGuid();
            foreach (var item in order.Items)
            {
                item.Id = Guid.NewGuid();
                item.OrderId = order.Id;
            }

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task<Order?> UpdateOrderAsync(Order order)
        {
            var existingOrder = await _context.Orders
                .Include(o => o.Items)
                .FirstOrDefaultAsync(o => o.Id == order.Id);

            if (existingOrder == null)
                return null;

            // Update order properties
            _context.Entry(existingOrder).CurrentValues.SetValues(order);

            // Handle order items
            // Remove items that are not in the updated order
            existingOrder.Items.RemoveAll(item => !order.Items.Any(i => i.Id == item.Id));

            // Update existing items and add new ones
            foreach (var item in order.Items)
            {
                var existingItem = existingOrder.Items.FirstOrDefault(i => i.Id == item.Id);
                if (existingItem != null)
                {
                    _context.Entry(existingItem).CurrentValues.SetValues(item);
                }
                else
                {
                    item.Id = Guid.NewGuid();
                    item.OrderId = order.Id;
                    existingOrder.Items.Add(item);
                }
            }

            await _context.SaveChangesAsync();
            return existingOrder;
        }

        public async Task DeleteOrderAsync(Guid id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null)
                return;

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }
    }
}
