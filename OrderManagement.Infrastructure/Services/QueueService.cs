using Azure.Storage.Queues;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OrderManagement.Application.Interfaces;
using OrderManagement.Infrastructure.Configurations;
using System.Text;
using System.Text.Json;

namespace OrderManagement.Infrastructure.Services
{
    public class QueueService : IQueueService
    {
        private readonly QueueClient _queueClient;
        private readonly ILogger<QueueService> _logger;

        public QueueService(
            IOptions<AzureStorageOptions> options,
            ILogger<QueueService> logger)
        {
            var queueServiceClient = new QueueServiceClient(options.Value.ConnectionString);
            _queueClient = queueServiceClient.GetQueueClient(options.Value.QueueName);
            _logger = logger;
        }

        public async Task SendMessageAsync<T>(T message)
        {
            try
            {
                await _queueClient.CreateIfNotExistsAsync();

                var messageJson = JsonSerializer.Serialize<T>(message, JsonSerializerOptions.Default);
                var messageBytes = Encoding.UTF8.GetBytes(messageJson);
                var base64Message = Convert.ToBase64String(messageBytes);

                await _queueClient.SendMessageAsync(base64Message);

                _logger.LogInformation("Message sent to queue: {QueueName}", _queueClient.Name);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error sending message to queue");
                throw;
            }
        }
    }
}
