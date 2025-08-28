using Domain;

namespace Repositories.Interfaces;

public interface ISongsRepository
{
    Task<List<Song>> GetSongsByIds(List<string> ids, bool allowDeleted = false);
    Task CreateSong(Song song);
}