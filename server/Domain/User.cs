using Domain.Enums;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("username")]
    public string Username { get; set; }
    
    [BsonElement("password")]
    public string?  Password { get; set; }
    
    [BsonElement("Status")]
    public int status { get; set; }
    
    [BsonElement("CreatedAt")]
    public DateTime CreatedAt { get; set; }
}