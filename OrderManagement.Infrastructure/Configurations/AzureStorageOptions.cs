namespace OrderManagement.Infrastructure.Configurations
{
    public class AzureStorageOptions
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string QueueName { get; set; } = string.Empty;
        public string? BlobContainerName { get;  set; } = string.Empty;
    }
}
