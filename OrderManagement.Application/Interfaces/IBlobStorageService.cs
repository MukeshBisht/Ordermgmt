namespace OrderManagement.Application.Interfaces
{

    public interface IBlobStorageService
    {
        Task<string> UploadFileAsync(string fileName, Stream content);
        Task<Stream> DownloadFileAsync(string blobName);
        Task DeleteFileAsync(string blobName);
    }
}
