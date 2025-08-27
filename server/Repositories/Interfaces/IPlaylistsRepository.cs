using Domain;

namespace Repositories.Interfaces;

public interface IPlaylistsRepository
{
    Task<List<Playlist>> GetPlaylists(List<string> ids, bool allowDeleted = false);
    Task  CreatePlaylist(Playlist playlist);
    Task<bool> UpdatePlaylist(Playlist playlist, string id);
}