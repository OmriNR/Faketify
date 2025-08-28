using Domain;
using Domain.Consts;
using Domain.Enums;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using Repositories.Interfaces;

namespace Repositories.Repositories;

public class PlaylistsRepository : IPlaylistsRepository
{
    private readonly IMongoCollection<Playlist> _playlistsCollection;

    public PlaylistsRepository(IConfiguration config)
    {
        var connectionString = config.GetSection(DB.CONNNECTION).Value;
        var client = new MongoClient(connectionString);
        
        var database = client.GetDatabase(DB.Database);
        _playlistsCollection = database.GetCollection<Playlist>(DB.PlaylistTable);
    }


    public async Task<List<Playlist>> GetPlaylists(List<string> ids, bool allowDeleted = false)
    {
        List<ObjectId> objectIds = ids.ConvertAll(id => new ObjectId(id));

        FilterDefinition<Playlist> fullFilter;
        
        var idFilter = Builders<Playlist>.Filter.Eq("_id", objectIds);

        if (allowDeleted)
        {
            fullFilter = Builders<Playlist>.Filter.And(idFilter);
        }
        else
        {
            var statusFilter = Builders<Playlist>.Filter.Eq(x => x.status, (int)Statuses.Active);
            fullFilter = Builders<Playlist>.Filter.And(statusFilter, statusFilter);
        }

        var playlists = await _playlistsCollection.Find(fullFilter).ToListAsync();
        
        return playlists;
    }

    public async Task CreatePlaylist(Playlist playlist)
    {
        await _playlistsCollection.InsertOneAsync(playlist);
    }

    public async Task<bool> UpdatePlaylist(Playlist playlist, string id)
    {
        var filter = Builders<Playlist>.Filter.Eq(x => x.Id, new ObjectId(id));
        var update = Builders<Playlist>.Update
            .Set(x => x.status, playlist.status)
            .Set(x => x.CreatedAt, playlist.UpdatedAt)
            .Set(x => x.UpdatedAt, playlist.UpdatedAt)
            .Set(x => x.IconPath, playlist.IconPath)
            .Set(x => x.SongsIds, playlist.SongsIds);
        
        var result = await _playlistsCollection.UpdateOneAsync(filter, update);
        
        return result.IsAcknowledged;
    }
}