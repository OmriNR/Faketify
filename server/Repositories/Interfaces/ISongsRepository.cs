using Domain;

namespace Repositories.Interfaces;

public interface ISongsRepository
{
    List<Song> GetSongsByIds(List<string> ids, bool allowDeleted = false);
    Song CreateSong(Song song);
    bool UpdateSong(Song song, string id);
}