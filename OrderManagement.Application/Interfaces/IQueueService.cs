namespace OrderManagement.Application.Interfaces
{
    public interface IQueueService
    {
        Task SendMessageAsync<T>(T message);
    }

}
