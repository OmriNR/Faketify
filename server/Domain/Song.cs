using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain;

public class Song
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("songName")]
    public string SongName { get; set; }
    
    [BsonElement("createdBy")]
    public string CreatedBy { get; set; }
    
    [BsonElement("CreatedAt")]
    public DateTime CreatedAt { get; set; }
    
    [BsonElement("Status")]
    public int status { get; set; }
}