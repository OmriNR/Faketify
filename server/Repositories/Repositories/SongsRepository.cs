using Domain;
using Domain.Consts;
using Domain.Enums;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using Repositories.Interfaces;

namespace Repositories.Repositories;

public class SongsRepository : ISongsRepository
{
    private readonly IMongoCollection<Song> _songsCollection;

    public SongsRepository(IConfiguration config)
    {
        var connectionString = config.GetSection(DB.CONNNECTION).Value;
        var client = new MongoClient(connectionString);
        
        var database = client.GetDatabase(DB.Database);
        _songsCollection = database.GetCollection<Song>(DB.SongTable);
    }
    public async Task<List<Song>> GetSongsByIds(List<string> ids, bool allowDeleted = false)
    {
        List<ObjectId> objectIds = ids.ConvertAll(id => new ObjectId(id));

        FilterDefinition<Song> fullFilter;
        
        var idFilter = Builders<Song>.Filter.Eq("_id", objectIds);

        if (allowDeleted)
        {
            fullFilter = Builders<Song>.Filter.And(idFilter);
        }
        else
        {
            var statusFilter = Builders<Song>.Filter.Eq(x => x.status, (int)Statuses.Active);
            fullFilter = Builders<Song>.Filter.And(statusFilter, statusFilter);
        }

        var songs = await _songsCollection.Find(fullFilter).ToListAsync();
        
        return songs;
    }

    public async Task CreateSong(Song song)
    {
        await _songsCollection.InsertOneAsync(song);
    }
}