using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace OrderManagement.Domain.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum OrderStatus
    {
        [EnumMember(Value = "submitted")]
        Submitted = 1,
        [EnumMember(Value = "paid")]
        Paid = 2,
        [EnumMember(Value = "processed")]
        Processed = 3,
        [EnumMember(Value = "cancelled")]
        Cancelled = 4
    }
}
