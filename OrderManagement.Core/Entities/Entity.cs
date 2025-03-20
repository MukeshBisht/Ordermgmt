using OrderManagement.Domain.Interfaces;
using System.Collections.ObjectModel;
using System.Text.Json.Serialization;

namespace OrderManagement.Domain.Entities
{
    public abstract class Entity
    {
        public Guid Id { get; set; }

        [JsonIgnore]
        private List<IDomainEvent>? _events;

        [JsonIgnore]
        public ReadOnlyCollection<IDomainEvent>? DomainEvents  => _events?.AsReadOnly();

        public void ClearDomainEvents()
        {
            _events?.Clear();
        }

        public void AddDomainEvent(IDomainEvent domainEvent)
        {
            if (domainEvent == null) return;

            _events ??= new List<IDomainEvent>();
            _events.Add(domainEvent);
        }
    }
}
