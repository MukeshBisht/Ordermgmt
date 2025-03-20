using Microsoft.EntityFrameworkCore;
using OrderManagement.Application.Interfaces;
using OrderManagement.Domain.Entities;
using OrderManagement.Domain.Events;

namespace OrderManagement.Infrastructure.Persistence
{
    public class DataContext : DbContext
    {
        private readonly IQueueService queueService;

        public DataContext(DbContextOptions<DataContext> options, IQueueService queueService)
            : base(options)
        {
            this.queueService = queueService;
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlite("Data Source=sqlite.db"); // Your SQLite connection string here
        //    }
        //    base.OnConfiguring(optionsBuilder);
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Order entity
            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.OrderNumber).IsRequired().HasMaxLength(20);
                entity.Property(e => e.CustomerName).IsRequired().HasMaxLength(100);
                entity.Property(e => e.CustomerEmail).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Status).IsRequired().HasMaxLength(20);
                entity.Property(e => e.Total);
                entity.Property(e => e.ShippingAddress).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Notes).HasMaxLength(500);
                entity.Property(e => e.ReceiptUrl).HasMaxLength(500);

                // Configure one-to-many relationship with OrderItem
                entity.HasMany(e => e.Items)
                      .WithOne(e => e.Order)
                      .HasForeignKey(e => e.OrderId)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // Configure OrderItem entity
            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.ProductName).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Quantity).IsRequired();
                entity.Property(e => e.UnitPrice);
                entity.Property(e => e.Total);
            });
        }


        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            await PublishDomainEventsAsync();
            return await base.SaveChangesAsync(cancellationToken);
        }

        private async Task PublishDomainEventsAsync()
        {
            var domainEntities = base.ChangeTracker
             .Entries<Entity>()
             .Where(x => x.Entity.DomainEvents != null && x.Entity.DomainEvents.Any());

            var domainEvents = domainEntities
                 .SelectMany(x => x.Entity.DomainEvents)
                 .ToList();

            foreach (var entity in domainEntities)
                entity.Entity.ClearDomainEvents();

            foreach (var domainEvent in domainEvents)
            {
                // publish events
                //await queueService.SendMessageAsync(domainEvent);
                if (domainEvent is OrderProcessedEvent processEvent)
                {
                   // OrderProcessedEvent processEvent = (OrderProcessedEvent)domainEvent;
                    await queueService.SendMessageAsync<OrderProcessedEvent>(processEvent);
                }
            }
        }
    }
}
