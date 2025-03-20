using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Enums;
using OrderManagement.Domain.Events;
using System.Text.Json;

namespace OrderManagement.Functions
{
    public class ProcessOrderFunction
    {
        private readonly ILogger<ProcessOrderFunction> _logger;

        public ProcessOrderFunction(
            ILogger<ProcessOrderFunction> logger)
        {
            _logger = logger;
        }

        [BlobOutput("receipts/{rand-guid}.txt", Connection = "AzureStorage")]
        [Function("ProcessOrder")]
        public async Task<string?> Run([QueueTrigger("%QueueName%", Connection = "AzureStorage")] string message,
            ILogger log)
        {
            try
            {
                var orderMessage = JsonSerializer.Deserialize<OrderProcessedEvent>(message);
                _logger.LogInformation("Processing order: {OrderId}, Action: {Action}",
                    orderMessage.Order?.Id, orderMessage.Order?.Status);

                      var order = orderMessage.Order;
                if (order == null)
                {
                    _logger.LogWarning("Order not found: {OrderId}", order.Id);
                    return null;
                }

                await ProcessUpdatedOrder(order);

                if (order.Status == OrderStatus.Processed)
                {
                    return GenerateReceipt(order);
                }
                else
                {
                    // No file created if not paid
                    return null; 
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing order message");
                throw;
            }
        }

        private async Task ProcessUpdatedOrder(Order order)
        {
            // Process an updated order
            _logger.LogInformation("Processing updated order: {OrderId}", order.Id);

            // Additional processing logic here
            // send email to users for order update
        }

        private string GenerateReceipt(Order order)
        {
            _logger.LogInformation("Generating receipt for order: {OrderId}", order.Id);
            return $"Receipt for Order ID: {order.Id}\nStatus: {order.Status}\nAmount: {order.Total:C}";
        }
    }
}
