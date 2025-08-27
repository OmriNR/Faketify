using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Playlist
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("name")]
    public string Name { get; set; }
    
    [BsonElement("iconPath")]
    public string IconPath { get; set; }
    
    [BsonElement("songsIds")]
    public List<string> SongsIds { get; set; }
    
    [BsonElement("createdBy")]
    public string CreatedBy { get; set; }
    
    [BsonElement("createdAt")]
    public DateTime CreatedAt { get; set; }
    
    [BsonElement("updatedAt")]
    public DateTime UpdatedAt { get; set; }
    
    [BsonElement("updatedBy")]
    public string UpdatedBy { get; set; }
    
    [BsonElement("Status")]
    public int status { get; set; }
}