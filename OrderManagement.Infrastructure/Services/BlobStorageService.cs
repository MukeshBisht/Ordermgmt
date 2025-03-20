using Azure.Storage.Blobs;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OrderManagement.Application.Interfaces;
using OrderManagement.Infrastructure.Configurations;

namespace OrderManagement.Infrastructure.Services
{
    public class BlobStorageService : IBlobStorageService
    {
        private readonly BlobServiceClient _blobServiceClient;
        private readonly string _containerName;
        private readonly ILogger<BlobStorageService> _logger;

        public BlobStorageService(
            IOptions<AzureStorageOptions> options,
            ILogger<BlobStorageService> logger)
        {
            _blobServiceClient = new BlobServiceClient(options.Value.ConnectionString);
            _containerName = options.Value.BlobContainerName;
            _logger = logger;
        }

        public async Task<string> UploadFileAsync(string fileName, Stream content)
        {
            try
            {
                var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
                await containerClient.CreateIfNotExistsAsync();

                // Create a unique file name
                var uniqueFileName = $"{Guid.NewGuid()}_{fileName}";
                var blobClient = containerClient.GetBlobClient(uniqueFileName);

                // Upload the file
                await blobClient.UploadAsync(content, true);

                // Return the URL to the blob
                return blobClient.Uri.ToString();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error uploading file to blob storage");
                throw;
            }
        }

        public async Task<Stream> DownloadFileAsync(string blobName)
        {
            try
            {
                var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
                var blobClient = containerClient.GetBlobClient(blobName);

                var response = await blobClient.DownloadAsync();
                return response.Value.Content;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error downloading file from blob storage");
                throw;
            }
        }

        public async Task DeleteFileAsync(string blobName)
        {
            try
            {
                var containerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
                var blobClient = containerClient.GetBlobClient(blobName);

                await blobClient.DeleteIfExistsAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting file from blob storage");
                throw;
            }
        }
    }
}
