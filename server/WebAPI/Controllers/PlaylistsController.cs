using Domain;
using Microsoft.AspNetCore.Mvc;
using Repositories.Interfaces;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlaylistsController : ControllerBase
{
    private readonly IPlaylistsRepository _playlistsRepository;

    public PlaylistsController(IPlaylistsRepository playlistsRepository)
    {
        _playlistsRepository = playlistsRepository;
    }
    
    [HttpPost("GetByIds")]
    [Produces("application/json")]
    public IActionResult GetByIds([FromBody] List<string> ids, bool allowDeleted)
    {
        try
        {
            var playlists = _playlistsRepository.GetPlaylists(ids, allowDeleted).Result;

            if (playlists == null || playlists.Count == 0)
            {
                return NoContent();
            }

            return Ok(playlists);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPost]
    [Produces("application/json")]
    public IActionResult Create([FromBody] Playlist playlist)
    {
        try
        {
            _playlistsRepository.CreatePlaylist(playlist);

            return Created();
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPut]
    [Produces("application/json")]
    public IActionResult Update([FromBody] Playlist playlist, string id)
    {
        try
        {
            var success = _playlistsRepository.UpdatePlaylist(playlist, id).Result;

            if (success)
                return Ok();
            else
                return BadRequest();
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}